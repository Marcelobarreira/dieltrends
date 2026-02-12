import Header from './components/Header'
import Hero from './sections/Hero'
import Countdown from './sections/Countdown'
import PerfilPublico from './sections/PerfilPublico'
import Revolucionar from './sections/Revolucionar'
import Formatos from './sections/Formatos'
import TrendsVoice from './sections/TrendsVoice'
import CaseDoMercado from './sections/CaseDoMercado'
import  SlotInterativo from './sections/TrendsCast'
import TrendCast from './sections/Slot'
import TrendsTalk from './sections/TrendsTalk'
import Programacao from './sections/Programacao'
import Marcas from './sections/Marcas'
import UltimoEvento from './sections/UltmoEvento'
import Local from './sections/Local'
import Sponsorship from './sections/Sporsorship'


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
        <TrendCast />
        <SlotInterativo />
        <TrendsTalk />
        <Programacao />
        <Marcas />
        <UltimoEvento />
        <Local />
        <Sponsorship />

      </main>
    </div>
  )
}

export default App
