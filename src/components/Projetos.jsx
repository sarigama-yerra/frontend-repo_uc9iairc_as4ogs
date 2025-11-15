import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Maximize2 } from 'lucide-react'

const projects = [
  {
    title: 'Dashboard Analytics',
    desc: 'Plataforma de visualização com gráficos interativos e filtros dinâmicos.',
    image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEYXNoYm9hcmQlMjBBbmFseXRpY3N8ZW58MHwwfHx8MTc2MzI0NTMxMHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tech: ['React', 'TypeScript', 'Tailwind'],
    live: '#',
    repo: '#',
  },
  {
    title: 'E-commerce Modular',
    desc: 'Arquitetura escalável com carrinho, checkout e CMS headless.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1400&auto=format&fit=crop',
    tech: ['Next.js', 'Stripe', 'PostgreSQL'],
    live: '#',
    repo: '#',
  },
  {
    title: 'API de Reservas',
    desc: 'Serviço REST com autenticação JWT e documentação OpenAPI.',
    image: 'https://images.unsplash.com/photo-1553484771-047a74a1f2c2?q=80&w=1400&auto=format&fit=crop',
    tech: ['FastAPI', 'MongoDB', 'Docker'],
    live: '#',
    repo: '#',
  },
]

export default function Projetos() {
  const [active, setActive] = useState(null)

  return (
    <section id="projetos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-12">Meus Projetos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/50 transition-colors duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-5 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/90 text-slate-700 shadow">{t}</span>
                  ))}
                </div>
                <h3 className="text-white text-xl font-semibold">{p.title}</h3>
                <p className="text-slate-200 text-sm line-clamp-2">{p.desc}</p>
                <div className="mt-3 flex items-center gap-3">
                  <a href={p.live} aria-label="Ver Deploy" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-white hover:bg-primary-600"><ExternalLink size={18} /></a>
                  <a href={p.repo} aria-label="Ver Código" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white text-slate-800 hover:bg-slate-100"><Github size={18} /></a>
                  <button aria-label="Expandir detalhes" onClick={()=>setActive(p)} className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-secondary text-white hover:opacity-90"><Maximize2 size={18} /></button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-900/70 p-6 flex items-center justify-center"
              onClick={()=>setActive(null)}
            >
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 30, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 140, damping: 18 }}
                className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden"
                onClick={(e)=>e.stopPropagation()}
              >
                <img src={active.image} alt="cover" className="w-full aspect-video object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-2">{active.title}</h3>
                  <p className="text-slate-600 mb-4">{active.desc}</p>
                  <div className="flex items-center gap-3">
                    <a href={active.live} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white hover:bg-primary-600"><ExternalLink size={18}/> Deploy</a>
                    <a href={active.repo} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800"><Github size={18}/> Código</a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
