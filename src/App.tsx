import Header from './components/Header'
import Hero from './sections/Hero'
import Countdown from './sections/Countdown'
import PerfilPublico from './sections/PerfilPublico'
import Revolucionar from './sections/Revolucionar'
import Formatos from './sections/Formatos'
import TrendsVoice from './sections/TrendsVoice'
import CaseDoMercado from './sections/CaseDoMercado'

function App() {
  return (
    <div className="w-full min-h-screen bg-[#010C28] text-white overflow-x-hidden">
      <Header />

      <main className="w-full pt-24 lg:pt-[120px]">
        <Hero />
        <Countdown />
        <PerfilPublico />
        <Revolucionar />
        <Formatos />
        <TrendsVoice />
        <CaseDoMercado />

        <section id="sobre" className="w-full min-h-screen flex items-center justify-center bg-[#010C28]">
          <div className="container-app">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Sobre</h2>
          </div>
        </section>

        <section id="speakers" className="w-full min-h-screen flex items-center justify-center">
          <div className="container-app">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Speakers</h2>
          </div>
        </section>

        <section id="programacao" className="w-full min-h-screen flex items-center justify-center bg-[#010C28]">
          <div className="container-app">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Programação</h2>
          </div>
        </section>

        <section id="local" className="w-full min-h-screen flex items-center justify-center">
          <div className="container-app">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Local</h2>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
