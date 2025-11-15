import Header from './components/Header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Habilidades from './components/Habilidades'
import Projetos from './components/Projetos'
import Contato from './components/Contato'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans text-[1.1rem] leading-relaxed text-slate-700 bg-slate-50">
      <style>{`
        :root{
          --color-primary:#2563eb; /* azul */
          --color-secondary:#7c3aed; /* roxo */
          --color-accent:#06d6a0; /* verde */
          --color-dark:#1e293b;
          --color-mid:#64748b;
          --color-light:#f8fafc;
          --color-white:#ffffff;
        }
        .text-primary{ color: var(--color-primary); }
        .bg-primary{ background-color: var(--color-primary); }
        .bg-primary-600{ background-color:#1d4ed8; }
        .text-secondary{ color: var(--color-secondary); }
        .bg-secondary{ background-color: var(--color-secondary); }
        .text-accent{ color: var(--color-accent); }
        .bg-accent{ background-color: var(--color-accent); }
        h1{ font-size:3.5rem; font-weight:700; }
        h2{ font-size:2.5rem; font-weight:600; }
        h3{ font-size:1.8rem; font-weight:600; }
        small{ font-size:0.9rem; }
      `}</style>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Habilidades />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </div>
  )
}

export default App
