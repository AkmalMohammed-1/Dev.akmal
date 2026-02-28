'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#hero' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

// Outside the component so it's never recreated and has no closure deps.
function getDocumentTop(el: HTMLElement): number {
  let top = 0
  let curr: HTMLElement | null = el
  while (curr) {
    top += curr.offsetTop
    curr = curr.offsetParent as HTMLElement | null
  }
  return top
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleActiveSection = () => {
      const sections = Array.from(
        document.querySelectorAll('section[id]')
      ) as HTMLElement[]

      // Treat 30% down the viewport as the "reading line"
      const readingY = window.scrollY + window.innerHeight * 0.3

      let current = '#hero'
      for (const section of sections) {
        if (readingY >= getDocumentTop(section)) {
          current = `#${section.id}`
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleActiveSection, { passive: true })
    handleActiveSection() // set on mount
    return () => window.removeEventListener('scroll', handleActiveSection)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${scrolled
        ? 'bg-black/80 backdrop-blur-xl border-white/10 py-2'
        : 'bg-transparent backdrop-blur-sm border-transparent py-4'
        }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <div className="w-full px-8 flex items-center justify-between">
        {/* Logo / name */}
        <motion.a
          href="#hero"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className={`font-semibold tracking-wide transition-all duration-300 ${scrolled ? 'text-sm text-white' : 'text-base text-white/80'
            }`}
          whileHover={{ scale: 1.05 }}
        >
          <span className="gradient-text-shimmer">Dev.Akmal</span>
        </motion.a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-1 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                if (link.href === '#hero') {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                } else {
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className={`relative px-4 py-2 text-sm rounded-full transition-all duration-300 ${activeSection === link.href
                ? 'text-white'
                : 'text-neutral-400 hover:text-white'
                }`}
            >
              {activeSection === link.href && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-full bg-white/10 border border-white/10"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`block px-4 py-2.5 text-sm rounded-lg transition-colors ${activeSection === link.href
                    ? 'text-white bg-white/10'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                    }`}
                  onClick={(e) => {
                    e.preventDefault()
                    setOpen(false)
                    if (link.href === '#hero') {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    } else {
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
