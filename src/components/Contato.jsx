import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Phone } from 'lucide-react'

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', assunto: '', mensagem: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const validate = (f) => {
    const errs = {}
    if (!f.nome.trim()) errs.nome = 'Informe seu nome'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) errs.email = 'Email inválido'
    if (!f.assunto.trim()) errs.assunto = 'Informe o assunto'
    if (f.mensagem.trim().length < 10) errs.mensagem = 'Escreva ao menos 10 caracteres'
    return errs
  }

  const onChange = (e) => {
    const next = { ...form, [e.target.name]: e.target.value }
    setForm(next)
    setErrors(validate(next))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const v = validate(form)
    setErrors(v)
    if (Object.keys(v).length === 0) {
      setTimeout(()=>setSent(true), 600)
    }
  }

  return (
    <section id="contato" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-6">Vamos Trabalhar Juntos?</h2>
          <p className="text-slate-600 mb-8">Preencha o formulário e retornarei em breve. Também estou disponível nos canais ao lado.</p>
          <form onSubmit={onSubmit} noValidate className="space-y-4">
            <div>
              <label className="block text-sm text-slate-600 mb-1">Nome</label>
              <input name="nome" value={form.nome} onChange={onChange} aria-invalid={!!errors.nome} aria-describedby="err-nome" className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Seu nome" />
              {errors.nome && <p id="err-nome" className="text-sm text-red-600 mt-1">{errors.nome}</p>}
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Email</label>
              <input type="email" name="email" value={form.email} onChange={onChange} aria-invalid={!!errors.email} aria-describedby="err-email" className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none" placeholder="seu@email.com" />
              {errors.email && <p id="err-email" className="text-sm text-red-600 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Assunto</label>
              <input name="assunto" value={form.assunto} onChange={onChange} aria-invalid={!!errors.assunto} aria-describedby="err-assunto" className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Como posso ajudar?" />
              {errors.assunto && <p id="err-assunto" className="text-sm text-red-600 mt-1">{errors.assunto}</p>}
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Mensagem</label>
              <textarea name="mensagem" value={form.mensagem} onChange={onChange} rows="5" aria-invalid={!!errors.mensagem} aria-describedby="err-mensagem" className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Fale sobre seu projeto..." />
              {errors.mensagem && <p id="err-mensagem" className="text-sm text-red-600 mt-1">{errors.mensagem}</p>}
            </div>
            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-primary text-white px-6 py-3 font-medium shadow hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary transition">
              {sent ? 'Mensagem Enviada ✔' : 'Enviar Mensagem'}
            </button>
          </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <a href="mailto:email@profissional.dev" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow hover:shadow-md transition">
            <Mail className="text-primary"/> <span>email@profissional.dev</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow hover:shadow-md transition">
            <Linkedin className="text-primary"/> <span>linkedin.com/in/seuusuario</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow hover:shadow-md transition">
            <Github className="text-primary"/> <span>github.com/seuusuario</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow hover:shadow-md transition">
            <Phone className="text-primary"/> <span>+55 (00) 00000-0000</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
