import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] lg:min-h-screen flex items-center pt-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/70 to-white/40 pointer-events-none" />
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-slate-600">Olá, eu sou <span className="font-semibold text-slate-900">[Nome]</span></p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
              Desenvolvedor Full-Stack & Criador de Soluções Digitais
            </h1>
            <p className="text-slate-600 max-w-xl">
              Transformo ideias em experiências digitais excepcionais. Especializado em criar aplicações web modernas, responsivas e de alto desempenho.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#projetos" className="inline-flex items-center justify-center rounded-full bg-primary text-white px-6 py-3 font-medium shadow hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary transition">
                Ver Projetos
              </a>
              <a href="/cv.pdf" target="_blank" className="inline-flex items-center justify-center rounded-full border border-slate-300 text-slate-800 px-6 py-3 font-medium hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary transition">
                Download CV
              </a>
            </div>
          </motion.div>
          <div className="h-[360px] md:h-[520px]" />
        </div>
      </div>
    </section>
  )
}
