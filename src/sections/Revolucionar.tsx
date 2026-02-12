import AnimatedSection from '../components/animations/AnimatedSection'

export default function Revolucionar() {
  return (
    <section id="sobre" className="w-full py-10 sm:py-16 lg:py-20 scroll-mt-24 lg:scroll-mt-[120px]">
      <div className="container-app">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-[60px]">
          {/* Lado esquerdo */}
          <AnimatedSection variant="slideLeft" className="flex-1">
            <h2
              className="text-white font-bold text-3xl sm:text-4xl lg:text-[52px] mb-6 lg:mb-10"
              style={{ lineHeight: '100%', letterSpacing: '-0.07em' }}
            >
              A edição que vai
              <br />
              <em className="text-[#00FF9B] italic">revolucionar</em>
              <br />
              o mercado
            </h2>

            <div className="flex items-center gap-2">
              <button className="w-11 h-11 sm:w-[58px] sm:h-[58px] bg-[#00FF9B] rounded-[7px] flex items-center justify-center hover:bg-[#00e68a] transition-colors shrink-0 cursor-pointer">
                <div className="w-8 h-8 sm:w-[42px] sm:h-[42px] border-[2.5px] border-black rounded-[7px] flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </button>
              <a
                href="#inscricao"
                className="bg-[#00FF9B] text-black flex items-center justify-center rounded-[7px] font-medium text-base sm:text-xl hover:bg-[#00e68a] transition-colors whitespace-nowrap w-[180px] h-11 sm:w-[233px] sm:h-[58px]"
              >
                Quero participar
              </a>
            </div>
          </AnimatedSection>

          {/* Lado direito */}
          <AnimatedSection variant="slideRight" delay={0.15} className="flex-1">
            <h3 className="text-[#00FF9B] font-bold italic text-lg sm:text-xl lg:text-2xl mb-4 lg:mb-5">
              O jogo mudou. E as regras também.
            </h3>
            <p className="text-white text-sm sm:text-base lg:text-lg mb-5 lg:mb-8" style={{ lineHeight: '150%' }}>
              Depois de um ciclo de experimentação, em que a Inteligência Artificial e os dados começaram a apoiar decisões operacionais, 2026 marca um novo nível de exigência: entregar alta performance com custos controlados. Cortar gastos já não é suficiente. O diferencial agora está em operar melhor, com inteligência, conectividade e tecnologia.
            </p>
            <p className="text-white text-sm sm:text-base lg:text-lg" style={{ lineHeight: '150%' }}>
              É nesse contexto que nasce o tema da{' '}
              <strong className="text-[#00FF9B] italic">5ª edição do Diel Trends</strong>: Ganhando o Jogo da Eficiência.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
