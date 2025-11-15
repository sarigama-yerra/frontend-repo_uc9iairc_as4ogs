import { motion } from 'framer-motion'
import { Code2, Server, Boxes, Workflow } from 'lucide-react'

const data = [
  {
    icon: Code2,
    title: 'Frontend',
    items: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: Server,
    title: 'Backend',
    items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
  },
  {
    icon: Boxes,
    title: 'Ferramentas',
    items: ['Git', 'Docker', 'AWS', 'Figma'],
  },
  {
    icon: Workflow,
    title: 'Metodologias',
    items: ['Agile', 'Scrum', 'Clean Code'],
  },
]

export default function Habilidades() {
  return (
    <section id="habilidades" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-12">Tecnologias & Ferramentas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white rounded-2xl shadow p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <card.icon className="text-secondary" />
                <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
              </div>
              <ul className="space-y-2 text-slate-600">
                {card.items.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" /> {i}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
