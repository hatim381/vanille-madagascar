import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.rv:not(.in)'))
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px' }
    )
    els.forEach((el, i) => {
      el.style.transitionDelay = (i % 4) * 70 + 'ms'
      io.observe(el)
    })
    return () => io.disconnect()
  }, [])
}

export function useScrolled(offset = 8) {
  useEffect(() => {
    const hdr = document.getElementById('hdr')
    if (!hdr) return
    const onScroll = () => hdr.classList.toggle('scrolled', window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])
}
