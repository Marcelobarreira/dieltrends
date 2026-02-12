import fotoex from '../assets/fotoex.png'
import fotodir from '../assets/foto-dire.png'
import iconlikedin from '../assets/icone-likedin.png'

export default function CaseDoMercado() {
  return (
    <section className="relative w-full " style={{ paddingTop: "89px" }}>
      {/* Conector */}
    

      <div className="container-app relative">
        <div
        style={{
          position: 'absolute',
          left: '69%',
          top: '-91px',
          transform: 'translateX(-50%)',
          width: '1px',
          height: '91px',
          backgroundColor: '#00FF9B'
        }}
      />
        {/* Wrapper com gradiente de borda */}
        <div className="w-full rounded-2xl bg-[linear-gradient(140.71deg,rgba(0,153,93,0)_0.01%,#00FF9B_94.12%)] p-1 lg:h-full">
          <div className="flex h-full w-full flex-col gap-15 rounded-2xl bg-[linear-gradient(140.71deg,rgba(0,153,93,0)_60%,rgba(0,255,155,0.25)_100%),linear-gradient(#010C28,#010C28)] p-6 sm:p-10 lg:flex-row lg:p-12">
            <div className="mt-8 flex w-full flex-col justify-between gap-12 py-12">
              <div className="relative flex h-[260px] w-full items-center justify-end sm:h-[305px]">
                <img
                  src={fotoex}
                  alt="foto exemplo"
                  className="absolute left-0 top-0 z-0 h-full w-auto object-contain"
                />
                <div className="relative z-10 h-full w-full max-w-full rounded-tl-[140px] bg-[linear-gradient(100.29deg,#00FF9B_-6.47%,#010C28_101.93%)] p-0.5 sm:max-w-[70%]">
                  <div className="flex h-full flex-col justify-center rounded-tl-[140px] bg-[#010C28] p-6 text-white sm:px-6">
                    <img className="h-12 w-12 self-end" src={iconlikedin} alt="icon-likedin" />

                    <strong className="block text-2xl italic leading-[110%] text-[#00FF9B] sm:text-4xl">Jaime Ribeiro</strong>
                    <strong className="block text-2xl italic sm:text-3xl">Diretor de operações da LASA</strong>
                    <p className="font-light max-w-[85%] text-xl sm:text-3xl">
                      A estratégia por trás do maior turnaround do varejo nacional
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex h-65 w-full flex-row-reverse rounded-2xl rounded-tl-none bg-[linear-gradient(100.29deg,#00FF9B_-6.47%,#010C28_101.93%)] p-0.5 sm:h-[305px]">
                <img src={fotodir} alt="foto perfil" className="ml-auto h-full" />

                <div className="absolute left-0 top-0 z-10 h-full w-full max-w-full rounded-tl-[140px] p-0.5 sm:max-w-[78%]">
                  <div className="h-full rounded-tr-[140px] rounded-bl-2xl bg-[#010C28] p-6 text-white">
                    <img className="h-12 w-12 self-end" src={iconlikedin} alt="icon-likedin" />

                    <p className="font-light mt-2 max-w-[85%] text-xl sm:text-3xl">
                      Um espaço dedicado ao debate de 5 referencias do setor que trarão uma
                      visão ampla e inovadora sobre tema x. Conheça os painelistas:
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex h-[260px] w-full items-center justify-end overflow-hidden rounded-tl-2xl rounded-bl-2xl sm:h-[305px]">
                <img
                  src={fotoex}
                  alt=""
                  className="absolute left-0 top-0 z-0 h-full w-auto object-contain"
                />
                <div className="pointer-events-none absolute inset-0 z-10 backdrop-blur-sm" />
                <div className="relative z-20 h-full w-full max-w-full rounded-tl-[140px] bg-[linear-gradient(58.29deg,#00FF9B_-6.47%,#010C28_101.93%)] p-0.5 sm:max-w-[75%]">
                  <div className="flex h-full flex-col items-end rounded-tl-[140px] bg-[#010C28] p-6 text-white">
                    <img className="h-12 w-12 self-end" src={iconlikedin} alt="icon-likedin" />

                    <p className="font-light mt-2  text-right text-xl text-[#FFFFFF] sm:text-3xl">
                      Um espaço dedicado ao debate de 5 referencias do setor que trarão uma
                      visão ampla e inovadora sobre tema x. Conheça os painelistas:
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex w-full flex-col items-end gap-16 text-left sm:gap-24 lg:max-w-[40%] lg:gap-90 lg:text-right">
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-normal sm:text-5xl">Na prática</p>
                <h2 className="text-3xl font-bold leading-[103%] sm:text-4xl lg:text-7xl">
                  Case do <br />
                  mercado
                </h2>
              </div>

              <p className="text-5xl  max-w-[85%]">
                Três especialistas das maiores empresas do país compartilham, na prática,como estão
                <strong className="text-[#00FF9B] italic">
                  tornando suas operações mais eficientes.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}





