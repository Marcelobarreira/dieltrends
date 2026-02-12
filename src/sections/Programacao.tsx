
import grayarrow from '../assets/gray-arrow.png'
import greenarrow from '../assets/green-arrow.png'
import arrowdown from '../assets/arrow-down.png'
import AnimatedSection from '../components/animations/AnimatedSection'

export default function Programacao() {
  return (
    <section id="programacao" className="pt-12 sm:pt-16 lg:pt-[89px] scroll-mt-24 lg:scroll-mt-[120px]">

      <div className="container-app-2 relative">

        <div className="w-full rounded-[20px] bg-[linear-gradient(160.71deg,rgba(0,153,93,0)_0.01%,#00FF9B_94.12%)] p-[1.7px] lg:h-full">
          <div className="flex flex-col items-center gap-10 sm:gap-16 lg:gap-40 py-10 sm:py-20 lg:py-40 pb-16 sm:pb-32 lg:pb-90 px-4 sm:px-6 lg:px-10 h-full w-full bg-[#010C28] rounded-[20px]">
              <AnimatedSection variant="scaleIn">
                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white text-center">Programação</h1>
              </AnimatedSection>
              <div className="mini-shadow flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-10 w-full">
                <AnimatedSection variant="slideLeft" className="w-full lg:max-w-[700px] p-4 sm:p-6 lg:p-10 rounded-[20px] bg-[linear-gradient(66.3deg,rgba(2,22,75,0)_-35.26%,#021E69_91.92%)]">
                  <ul>
                    <li className='flex justify-between mb-4 sm:mb-6 lg:mb-10 items-center'>
                       <p className="text-xl sm:text-2xl lg:text-4xl font-bold">Manhã</p>
                       <div className="rectangle border-3 rounded-[4px] p-1.5 sm:p-2 rotate-45 flex items-center w-7 h-7 sm:w-8 sm:h-8 lg:w-[35px] lg:h-[35px]">
                          <img src={arrowdown} alt="" className="arrow-left rotate-[-45deg] m-auto" />
                       </div>
                    </li>
                    <li className='flex gap-3 sm:gap-6 lg:gap-10 items-center py-3 sm:py-6 lg:py-10 border-t border-[#012B98]'>
                       <img src={grayarrow} alt="" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6.25 lg:h-[25px] shrink-0" />
                        <p className="text-sm sm:text-xl lg:text-4xl"><strong className='italic font-thin'>08h -</strong> Credenciamento & Welcome Coffee </p>
                    </li>
                    <li className='flex gap-3 sm:gap-6 lg:gap-10 items-center py-3 sm:py-6 lg:py-10 border-t border-[#012B98]'>
                       <img src={greenarrow} alt="" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[25px] lg:h-[25px] shrink-0" />
                        <p className="text-sm sm:text-xl lg:text-4xl"><strong className='italic font-thin'>09h -</strong> Trends Talk <strong className='text-xs sm:text-base lg:text-xl italic text-gray-400'>Bruno Arcuri - CEO Diel</strong></p>
                    </li>
                    <li className='flex gap-3 sm:gap-6 lg:gap-10 items-center py-3 sm:py-6 lg:py-10 border-t border-[#012B98]'>
                       <img src={grayarrow} alt="" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[25px] lg:h-[25px] shrink-0" />
                        <p className="text-sm sm:text-xl lg:text-4xl"><strong className='italic font-thin'>09h15 </strong>- Case I & II - lorem ipsum</p>
                    </li>
                    <li className='flex gap-3 sm:gap-6 lg:gap-10 items-center py-3 sm:py-6 lg:py-10 border-t border-[#012B98]'>
                       <img src={greenarrow} alt="" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[25px] lg:h-[25px] shrink-0" />
                        <p className="text-sm sm:text-xl lg:text-4xl"><strong className='italic font-thin'>10h10 </strong>- Painel Interativo - Energia <strong className='text-xs sm:text-base lg:text-xl italic text-gray-400'>Bruno Arcuri - CEO Diel </strong></p>
                    </li>
                    <li className='flex gap-3 sm:gap-6 lg:gap-10 items-center py-3 sm:py-6 lg:py-10 border-t border-[#012B98]'>
                       <img src={grayarrow} alt="" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[25px] lg:h-[25px] shrink-0" />
                        <p className="text-sm sm:text-xl lg:text-4xl text-gray-400"><strong className='italic font-thin'>11h05 - </strong>Coffe Break</p>
                    </li>
                    <li className='flex gap-3 sm:gap-6 lg:gap-10 items-center py-3 sm:py-6 lg:py-10 border-t border-[#012B98]'>
                       <img src={greenarrow} alt="" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[25px] lg:h-[25px] shrink-0" />
                        <p className="text-sm sm:text-xl lg:text-4xl">Expansão na prática: Otimizando recursos para escalar operações</p>
                    </li>
                    <li className='flex gap-3 sm:gap-6 lg:gap-10 items-center py-3 sm:py-6 lg:py-10 border-t border-[#012B98]'>
                       <img src={grayarrow} alt="" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[25px] lg:h-[25px] shrink-0" />
                        <p className="text-sm sm:text-xl lg:text-4xl text-gray-400">Intervalo para almoço livre</p>
                    </li>
                  </ul>
                </AnimatedSection>
                 <AnimatedSection variant="slideRight" delay={0.2} className="w-full lg:max-w-[700px] p-4 sm:p-6 lg:p-10 rounded-[20px] bg-[linear-gradient(250.35deg,rgba(2,22,75,0)_-9.78%,#021E69_87.8%)]">
                  <ul>
                    <li className='flex justify-between mb-4 sm:mb-6 lg:mb-10 items-center'>
                       <p className="text-xl sm:text-2xl lg:text-4xl font-bold">Tarde</p>
                        <div className="rectangle border-3 rounded-[4px] p-1.5 sm:p-2 rotate-45 flex items-center w-7 h-7 sm:w-8 sm:h-8 lg:w-[35px] lg:h-[35px]">
                          <img src={arrowdown} alt="" className="arrow-left rotate-[-45deg] m-auto" />
                       </div>
                    </li>
                    <li className='flex gap-3 sm:gap-6 lg:gap-10 items-center py-3 sm:py-6 lg:py-10 border-t border-[#012B98]'>
                       <img src={greenarrow} alt="" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[25px] lg:h-[25px] shrink-0" />
                        <p className="text-sm sm:text-xl lg:text-4xl">Painel Interativo : Manutenção 360</p>
                    </li>
                    <li className='flex gap-3 sm:gap-6 lg:gap-10 items-center py-3 sm:py-6 lg:py-10 border-t border-[#012B98]'>
                       <img src={greenarrow} alt="" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[25px] lg:h-[25px] shrink-0" />
                        <p className="text-sm sm:text-xl lg:text-4xl">Carreira em Facilities: O que as empresas esperam de você</p>
                    </li>
                    <li className='flex gap-3 sm:gap-6 lg:gap-10 items-center py-3 sm:py-6 lg:py-10 border-t border-[#012B98]'>
                       <img src={grayarrow} alt="" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[25px] lg:h-[25px] shrink-0" />
                        <p className="text-sm sm:text-xl lg:text-4xl">Coffe Break</p>
                    </li>
                    <li className='flex gap-3 sm:gap-6 lg:gap-10 items-center py-3 sm:py-6 lg:py-10 border-t border-[#012B98]'>
                       <img src={greenarrow} alt="" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[25px] lg:h-[25px] shrink-0" />
                        <p className="text-sm sm:text-xl lg:text-4xl">Trends tech</p>
                    </li>
                    <li className='flex gap-3 sm:gap-6 lg:gap-10 items-center py-3 sm:py-6 lg:py-10 border-t border-[#012B98]'>
                       <img src={greenarrow} alt="" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[25px] lg:h-[25px] shrink-0" />
                        <p className="text-sm sm:text-xl lg:text-4xl">Gestão em águas turbulentas: estratégias para superar desafios</p>
                    </li>
                    <li className='flex gap-3 sm:gap-6 lg:gap-10 items-center py-3 sm:py-6 lg:py-10 border-t border-[#012B98]'>
                       <img src={greenarrow} alt="" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[25px] lg:h-[25px] shrink-0" />
                        <p className="text-sm sm:text-xl lg:text-4xl">Premiação e encerramento</p>
                    </li>
                    <li className='flex gap-3 sm:gap-6 lg:gap-10 items-center py-3 sm:py-6 lg:py-10 border-t border-[#012B98]'>
                       <img src={greenarrow} alt="" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[25px] lg:h-[25px] shrink-0" />
                        <p className="text-sm sm:text-xl lg:text-4xl">Happy Hour</p>
                    </li>
                  </ul>
                </AnimatedSection>
              </div>

          </div>
        </div>
      </div>
    </section>
  )}
