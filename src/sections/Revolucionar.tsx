export default function Revolucionar() {
  return (
    <section className="w-full" style={{ padding: '80px 0' }}>
      <div className="container-app">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between" style={{ gap: '60px' }}>
          {/* Lado esquerdo */}
          <div className="flex-1">
            <h2
              className="text-white font-bold"
              style={{
                fontSize: '52px',
                lineHeight: '100%',
                letterSpacing: '-0.07em',
                marginBottom: '40px'
              }}
            >
              A edição que vai
              <br />
              <em className="text-[#00FF9B]" style={{ fontStyle: 'italic' }}>revolucionar</em>
              <br />
              o mercado
            </h2>

            {/* Botões */}
            <div className="flex items-center" style={{ gap: '8px' }}>
              {/* Botão ícone */}
              <button className="w-[58px] h-[58px] bg-[#00FF9B] rounded-[7px] flex items-center justify-center hover:bg-[#00e68a] transition-colors shrink-0 cursor-pointer">
                <div className="w-[42px] h-[42px] border-[2.5px] border-black rounded-[7px] flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </button>
              {/* Botão Quero participar */}
              <a
                href="#inscricao"
                className="bg-[#00FF9B] text-black flex items-center justify-center rounded-[7px] font-medium text-xl hover:bg-[#00e68a] transition-colors whitespace-nowrap"
                style={{ width: '233px', height: '58px' }}
              >
                Quero participar
              </a>
            </div>
          </div>

          {/* Lado direito */}
          <div className="flex-1">
            <h3
              className="text-[#00FF9B] font-bold"
              style={{
                fontSize: '24px',
                fontStyle: 'italic',
                marginBottom: '20px'
              }}
            >
              O jogo mudou. E as regras também.
            </h3>
            <p
              className="text-white"
              style={{
                fontSize: '18px',
                lineHeight: '150%',
                marginBottom: '30px'
              }}
            >
              Depois de um ciclo de experimentação, em que a Inteligência Artificial e os dados começaram a apoiar decisões operacionais, 2026 marca um novo nível de exigência: entregar alta performance com custos controlados. Cortar gastos já não é suficiente. O diferencial agora está em operar melhor, com inteligência, conectividade e tecnologia.
            </p>
            <p
              className="text-white"
              style={{
                fontSize: '18px',
                lineHeight: '150%'
              }}
            >
              É nesse contexto que nasce o tema da{' '}
              <strong className="text-[#00FF9B]" style={{ fontStyle: 'italic' }}>5ª edição do Diel Trends</strong>: Ganhando o Jogo da Eficiência.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
