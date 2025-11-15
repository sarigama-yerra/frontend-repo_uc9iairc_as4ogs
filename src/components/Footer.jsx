import { Linkedin, Github } from 'lucide-react'

export default function Footer(){
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contato', href: '#contato' },
  ]
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-slate-700 font-semibold">[Nome] Dev</div>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-slate-900">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a aria-label="LinkedIn" href="#" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200"><Linkedin size={18}/></a>
          <a aria-label="GitHub" href="#" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200"><Github size={18}/></a>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 pb-6">© {new Date().getFullYear()} — Todos os direitos reservados.</div>
    </footer>
  )
}
