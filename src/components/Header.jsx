import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-white/60 shadow-sm' : 'bg-transparent'} `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" onClick={(e)=>handleNav(e,'#home')} className="font-semibold text-lg text-slate-800">
          <span className="text-primary">[Nome]</span> <span className="text-slate-700">Dev</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e)=>handleNav(e,item.href)}
              className="text-slate-600 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={(e)=>handleNav(e,'#contato')}
            className="inline-flex items-center justify-center rounded-full bg-primary text-white px-4 py-2 text-sm font-medium shadow hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary transition"
          >
            Vamos Conversar
          </a>
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Abrir menu"
          onClick={()=>setOpen(!open)}
        >
          {open ? <X size={22}/> : <Menu size={22}/>} 
        </button>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/90 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e)=>handleNav(e,item.href)}
                className="block text-slate-700 hover:text-slate-900 py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={(e)=>handleNav(e,'#contato')}
              className="block text-center rounded-full bg-primary text-white px-4 py-2 text-sm font-medium shadow hover:bg-primary-600"
            >
              Vamos Conversar
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
