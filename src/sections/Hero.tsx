import heroImage from '../assets/foto.png'
import verdeEffect from '../assets/verde.png'
import edicaoLogo from '../assets/5edic.png'
import calendarIcon from '../assets/calendar.png'
import markerIcon from '../assets/fi-rr-marker.png'

export default function Hero() {
  return (
    <section id="hero" className="w-full">
      <div className="container-app">
        {/* Container da imagem com bordas arredondadas */}
        <div
          className="w-full h-[420px] sm:h-[500px] md:h-[600px] lg:h-[843px] rounded-[16px] sm:rounded-[30px] bg-cover bg-center flex flex-col items-center justify-center text-center px-4 sm:px-12 lg:px-20"
          style={{
            backgroundImage: `url(${verdeEffect}), url(${heroImage})`
          }}
        >
          {/* Logo 5ª edição */}
          <img
            src={edicaoLogo}
            alt="5ª edição Diel Trends"
            className="mb-6 h-8 sm:h-10 lg:h-12"
          />

          {/* Título principal */}
          <h1 className="hero-title mb-4 lg:mb-6">
            Ganhando o jogo<br />da eficiência
          </h1>

          {/* Subtítulo */}
          <p className="text-white text-sm sm:text-base lg:text-xl mb-6 lg:mb-10 max-w-3xl px-2">
            Onde líderes transformam eficiência operacional em vantagem competitiva
          </p>

          {/* Informações de data e local */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-8 lg:mb-10 text-white">
            <div className="flex items-center gap-2">
              <img src={calendarIcon} alt="Calendário" className="w-6 h-6" />
              <span className="hero-info-text">14 de maio - 08h às 17h</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={markerIcon} alt="Localização" className="w-6 h-6" />
              <span className="hero-info-text">Cubo Itaú - Alameda Vicente Pinzon, 54</span>
            </div>
          </div>

          {/* Botões de ação */}
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 sm:w-14 sm:h-14 bg-[#00FF9B] rounded-lg flex items-center justify-center hover:bg-[#00e68a] transition-colors cursor-pointer">
              <div className="w-7 h-7 sm:w-10 sm:h-10 border-2 border-black rounded-lg flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </button>
            <a
              href="#inscricao"
              className="bg-[#00FF9B] text-black px-5 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-sm sm:text-lg hover:bg-[#00e68a] transition-colors"
            >
              Quero participar
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
