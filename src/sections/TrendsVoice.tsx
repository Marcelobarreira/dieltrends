import cielo from  "../assets/cesar-cielo.png";
import AnimatedSection from '../components/animations/AnimatedSection'

export default function TrendsVoice() {
  return (
    <section id="speakers" className="w-full pt-12 sm:pt-16 lg:pt-[89px] scroll-mt-24 lg:scroll-mt-[120px]">
      <div className="container-app relative">
        <div className="w-full rounded-[20px] bg-[linear-gradient(337.71deg,rgba(0,153,93,0)_.01%,#00FF9B_90.12%)] p-[2.8px] lg:h-full">
          <div className="flex flex-col h-full w-full p-5 sm:p-8 lg:p-15 rounded-[18px] bg-[linear-gradient(320.71deg,rgba(0,153,93,0)_60%,rgba(0,255,155,0.25)_100%),linear-gradient(#010C28,#010C28)] lg:flex-row">
            <AnimatedSection variant="slideLeft" className="flex flex-col justify-between text-left mb-6 lg:mb-0 lg:w-1/2">
              <div className="title">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-normal max-w-full lg:max-w-[30%]">Trends <strong className="text-4xl sm:text-6xl lg:text-8xl">Voice</strong></h1>
              </div>
              <p className="font-light text-base sm:text-xl lg:text-4xl max-w-full lg:max-w-[70%] mr-auto mt-4 lg:mt-0">
                Em uma palestra inspiradora, César Cielo compartilha como liderar e tomar decisões estratégicas em cenários de alta pressão e constante mudança na palestra
                <strong className="text-[#00FF9B] italic"> "Alta performance em cenários instáveis"</strong>
              </p>
            </AnimatedSection>

            <AnimatedSection variant="slideRight" delay={0.2} className="trend-cast slide flex items-center lg:w-1/2">
              <div className="relative flex flex-col justify-start rounded-2xl overflow-hidden w-full">
                <div className="rounded-tr-[120px] sm:rounded-tr-[200px] lg:rounded-tr-[268px] rounded-2xl bottom-0 left-0 absolute bg-[linear-gradient(200.71deg,rgba(0,153,93,0)_9.01%,#00FF9B_94.12%)] p-[1.3px]">
                  <div className="content-wrapper px-4 pt-4 pb-4 sm:px-6 sm:pt-8 sm:pb-6 lg:px-10 lg:pt-14 lg:pb-8 rounded-tr-[120px] sm:rounded-tr-[200px] lg:rounded-tr-[268px] rounded-2xl">
                    <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">César Cielo</h3>
                    <p className="font-thin text-sm sm:text-lg lg:text-xl leading-5 sm:leading-7 lg:leading-8 mb-2 sm:mb-3">Competitivo e incansável, Cielo transformou anos de suor em 21s30 de glória.</p>
                    <p className="font-thin text-sm sm:text-base lg:text-lg leading-5 sm:leading-7 lg:leading-8 hidden sm:block">Sem respirar por 34 braçadas, garantiu o primeiro ouro da natação brasileira. Poucos segundos na água que resumem uma vida inteira de motivação e trabalho duro.</p>
                  </div>
                </div>
                <img src={cielo} alt="César Cielo" className="w-full h-auto object-cover rounded-t-[20px]" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )}
