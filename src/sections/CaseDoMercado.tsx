import fotoex from '../assets/fotoex.png'
import fotodir from '../assets/foto-dire.png'
import AnimatedSection from '../components/animations/AnimatedSection'
import StaggerContainer, { staggerItem } from '../components/animations/StaggerContainer'
import { motion } from 'framer-motion'

export default function CaseDoMercado() {
  return (
    <section className="relative w-full pt-12 sm:pt-16 lg:pt-[89px]">
      <div className="container-app relative">
        <div
          className="hidden lg:block"
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
        <div className="w-full rounded-2xl bg-[linear-gradient(140.71deg,rgba(0,153,93,0)_0.01%,#00FF9B_94.12%)] p-1 lg:h-full">
          <div className="flex h-full w-full flex-col gap-6 sm:gap-10 lg:gap-15 rounded-2xl bg-[linear-gradient(140.71deg,rgba(0,153,93,0)_60%,rgba(0,255,155,0.25)_100%),linear-gradient(#010C28,#010C28)] p-4 sm:p-6 lg:flex-row lg:p-12">
            <StaggerContainer staggerDelay={0.2} delayChildren={0.1} className="mt-4 sm:mt-8 flex w-full flex-col justify-between gap-6 sm:gap-12 py-4 sm:py-12">
              <motion.div variants={staggerItem} className="relative flex h-[180px] sm:h-[260px] w-full items-center justify-end lg:h-[305px]">
                <img src={fotoex} alt="foto exemplo" className="absolute left-0 top-0 z-0 h-full w-auto object-contain" />
                <div className="relative z-10 h-full w-full max-w-[85%] sm:max-w-[70%] rounded-tl-[60px] sm:rounded-tl-[100px] lg:rounded-tl-[140px] bg-[linear-gradient(100.29deg,#00FF9B_-6.47%,#010C28_101.93%)] p-0.5">
                  <div className="flex h-full flex-col justify-center rounded-tl-[60px] sm:rounded-tl-[100px] lg:rounded-tl-[140px] bg-[#010C28] p-4 sm:p-6 text-white">
                    <span className="self-end cursor-pointer border border-[#005CFC] rounded-[10px] px-2 py-0.5 text-xs sm:text-sm lg:text-base font-bold text-white">in</span>
                    <strong className="block text-lg sm:text-2xl lg:text-4xl italic leading-[110%] text-[#00FF9B]">Jaime Ribeiro</strong>
                    <strong className="block text-base sm:text-xl lg:text-3xl italic">Diretor de operações da LASA</strong>
                    <p className="font-light max-w-[85%] text-sm sm:text-lg lg:text-3xl">
                      A estratégia por trás do maior turnaround do varejo nacional
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={staggerItem} className="relative flex h-[180px] sm:h-[260px] lg:h-[305px] w-full flex-row-reverse rounded-2xl rounded-tl-none bg-[linear-gradient(100.29deg,#00FF9B_-6.47%,#010C28_101.93%)] p-0.5">
                <img src={fotodir} alt="foto perfil" className="ml-auto h-full" />
                <div className="absolute left-0 top-0 z-10 h-full w-full max-w-[85%] sm:max-w-[78%] rounded-tl-[60px] sm:rounded-tl-[100px] lg:rounded-tl-[140px] p-0.5">
                  <div className="h-full rounded-tr-[60px] sm:rounded-tr-[100px] lg:rounded-tr-[140px] rounded-bl-2xl bg-[#010C28] p-4 sm:p-6 text-white">
                    <span className="self-end cursor-pointer border border-[#005CFC] rounded-[10px] px-2 py-0.5 text-xs sm:text-sm lg:text-base font-bold text-white">in</span>
                    <p className="font-light mt-2 max-w-[85%] text-sm sm:text-lg lg:text-3xl">
                      Um espaço dedicado ao debate de 5 referencias do setor que trarão uma
                      visão ampla e inovadora sobre tema x. Conheça os painelistas:
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={staggerItem} className="relative flex h-[180px] sm:h-[260px] lg:h-[305px] w-full items-center justify-end overflow-hidden rounded-tl-2xl rounded-bl-2xl">
                <img src={fotoex} alt="" className="absolute left-0 top-0 z-0 h-full w-auto object-contain" />
                <div className="pointer-events-none absolute inset-0 z-10 backdrop-blur-sm" />
                <div className="relative z-20 h-full w-full max-w-[85%] sm:max-w-[75%] rounded-tl-[60px] sm:rounded-tl-[100px] lg:rounded-tl-[140px] bg-[linear-gradient(58.29deg,#00FF9B_-6.47%,#010C28_101.93%)] p-0.5">
                  <div className="flex h-full flex-col items-end rounded-tl-[60px] sm:rounded-tl-[100px] lg:rounded-tl-[140px] bg-[#010C28] p-4 sm:p-6 text-white">
                    <span className="self-end cursor-pointer border border-[#005CFC] rounded-[10px] px-2 py-0.5 text-xs sm:text-sm lg:text-base font-bold text-white">in</span>
                    <p className="font-light mt-2 text-right text-sm sm:text-lg lg:text-3xl text-[#FFFFFF]">
                      Um espaço dedicado ao debate de 5 referencias do setor que trarão uma
                      visão ampla e inovadora sobre tema x. Conheça os painelistas:
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerContainer>

            <AnimatedSection variant="slideRight" delay={0.2} className="mt-4 sm:mt-8 flex w-full flex-col items-end gap-8 sm:gap-16 text-left lg:max-w-[40%] lg:gap-90 lg:text-right">
              <div className="flex flex-col gap-2">
                <p className="text-xl sm:text-3xl lg:text-5xl font-normal">Na prática</p>
                <h2 className="text-2xl sm:text-3xl lg:text-7xl font-bold leading-[103%]">
                  Case do <br />
                  mercado
                </h2>
              </div>
              <p className="text-lg sm:text-2xl lg:text-5xl max-w-full lg:max-w-[85%]">
                Três especialistas das maiores empresas do país compartilham, na prática, como estão
                <strong className="text-[#00FF9B] italic">
                  {' '}tornando suas operações mais eficientes.
                </strong>
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
