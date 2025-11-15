import { motion } from 'framer-motion'

export default function Sobre() {
  const stats = [
    { label: 'Anos de Experiência', value: '++' },
    { label: 'Projetos Concluídos', value: '++' },
    { label: 'Clientes Satisfeitos', value: '++' },
  ]

  const skills = [
    { label: 'Frontend Development', value: 90 },
    { label: 'Backend Development', value: 85 },
    { label: 'UI/UX Design', value: 75 },
  ]

  return (
    <section id="sobre" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-6">Sobre Mim</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Desenvolvedor apaixonado por tecnologia com [X] anos de experiência criando soluções inovadoras. Crio soluções que conectam objetivos de negócio a experiências digitais elegantes e performáticas, com foco em qualidade, acessibilidade e resultados mensuráveis.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="bg-white rounded-xl shadow p-4 text-center">
                  <div className="text-3xl font-bold text-slate-900">{s.value}</div>
                  <div className="text-sm text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-5">
              {skills.map((sk) => (
                <div key={sk.label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 font-medium">{sk.label}</span>
                    <span className="text-slate-500">{sk.value}%</span>
                  </div>
                  <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${sk.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
