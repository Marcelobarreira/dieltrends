import fotocardslide from "../assets/foto-card-slide.png";
import linkicon from "../assets/link-icon-2.png";
import arrowaleft from "../assets/arrow-left.png";
import arrowright from "../assets/arrow-right.png";



export default function TrendsTalk() {
  return (
    <section className="w-full pt-12 sm:pt-16 lg:pt-[89px]">
      {/* Conector */}

      <div className="container-app relative">
        {/* Wrapper com gradiente de borda */}

        <div className="w-full rounded-[20px] bg-[linear-gradient(337.71deg,rgba(0,153,93,0)_.01%,#00FF9B_90.12%)] p-[2.8px] lg:h-full">
          <div className="flex flex-col h-full w-full p-5 sm:p-8 lg:p-15 rounded-[18px] bg-[linear-gradient(320.71deg,rgba(0,153,93,0)_60%,rgba(0,255,155,0.25)_100%),linear-gradient(#010C28,#010C28)] lg:flex-row-reverse">
            <div className="trend-cast content mb-6 lg:mb-10 p-2 sm:p-4 lg:p-10 text-right">
              <div className="title">
                <h4>TrendsTalk </h4>
                <h1>Tendências & Inovações</h1>
              </div>
              <div className="description max-w-full lg:max-w-[73%] ml-auto">
                <p>
                  Um espaço dedicado a apresentar o que já está revolucionando o setor. Em talks de 15 minutos, traremos
                  <strong className="text-[#00FF9B] italic"> as inovações mais atuais do mercado.</strong>
                </p>
              </div>
            </div>

            <div className="trend-cast slide flex items-center gap-4 lg:gap-10 p-0 sm:p-2 lg:p-5">
              <img src={arrowaleft} alt="arrow left" className="arrow-left w-6 sm:w-8 lg:w-auto hidden sm:block" />
              <div className="relative flex flex-col justify-start w-full">
                <img src={fotocardslide} alt="" className="w-full lg:max-w-[700px] h-full rounded-t-[20px] object-cover" />
                <div className="rounded-tr-[60px] sm:rounded-tr-[90px] lg:rounded-tr-[120px] bottom-0 left-0 absolute bg-[linear-gradient(230.71deg,rgba(0,153,93,0)_0.01%,#00FF9B_94.12%)] p-[1.7px] overflow-hidden">
                  <div className="content-wrapper rounded-tr-[60px] sm:rounded-tr-[90px] lg:rounded-tr-[120px] px-4 pt-6 pb-4 sm:px-6 sm:pt-10 sm:pb-6 lg:px-10 lg:pt-20 lg:pb-10">
                    <h3 className="text-2xl sm:text-4xl lg:text-7xl font-bold mb-3 sm:mb-5 lg:mb-10">César Cielo</h3>
                    <p className="font-thin text-sm sm:text-xl lg:text-[31px] leading-5 sm:leading-7 lg:leading-9">
                      Competitivo e incansável, Cielo transformou anos de suor em 21s30 de glória.
                    </p>
                    <img src={linkicon} alt="" className="link-icon w-5 h-5 sm:w-6 sm:h-6 lg:w-7.5 lg:h-7.5 self-end mt-4 sm:mt-6 lg:mt-10 mx-2 lg:mx-5" />
                  </div>
                </div>
              </div>
              <img src={arrowright} alt="arrow right" className="arrow-right w-6 sm:w-8 lg:w-auto hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )}
