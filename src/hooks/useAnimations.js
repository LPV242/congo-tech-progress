import { useEffect } from 'react'

/* Scroll-reveal (fade-up / fade-left / fade-right) */
export function useScrollReveal() {
  useEffect(() => {
    const run = () => {
      const els = document.querySelectorAll('.fade-up, .fade-left, .fade-right')
      const observer = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } })
      }, { threshold: 0.12 })
      els.forEach(el => observer.observe(el))
      return () => observer.disconnect()
    }
    // short delay so React has flushed the DOM
    const timer = setTimeout(run, 60)
    return () => clearTimeout(timer)
  }, [])
}

/* Animated counters via data-count / data-suffix attributes */
export function useCounters() {
  useEffect(() => {
    const easeOut = t => 1 - Math.pow(1 - t, 3)

    const animate = el => {
      const target   = parseInt(el.dataset.count, 10)
      const suffix   = el.dataset.suffix || ''
      const duration = 2200
      const start    = performance.now()
      const tick = now => {
        const p = Math.min((now - start) / duration, 1)
        el.textContent = Math.floor(easeOut(p) * target).toLocaleString('fr-FR') + suffix
        if (p < 1) requestAnimationFrame(tick)
        else el.textContent = target.toLocaleString('fr-FR') + suffix
      }
      requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { animate(e.target); observer.unobserve(e.target) } })
    }, { threshold: 0.5 })

    const timer = setTimeout(() => {
      document.querySelectorAll('[data-count]').forEach(el => observer.observe(el))
    }, 60)

    return () => { clearTimeout(timer); observer.disconnect() }
  }, [])
}
