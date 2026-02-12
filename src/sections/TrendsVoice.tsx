import arrowaleft from "../assets/arrow-left.png";
import arrowright from "../assets/arrow-right.png";
import cielo from  "../assets/cesar-cielo.png";

export default function TrendsVoice() {
  return (
    <section className="w-full" style={{ paddingTop: "89px" }}>
      {/* Conector */}

      <div className="container-app relative">
        {/* Wrapper com gradiente de borda */}
       
        <div className="w-full rounded-[20px] bg-[linear-gradient(337.71deg,rgba(0,153,93,0)_.01%,#00FF9B_90.12%)] p-[2.8px] lg:h-full">
          <div className="flex h-full w-full p-15 rounded-[18px] bg-[linear-gradient(320.71deg,rgba(0,153,93,0)_60%,rgba(0,255,155,0.25)_100%),linear-gradient(#010C28,#010C28)]  lg:flex-row">
            <div className="flex flex-col justify-between text-left mb-10 ">
              <div className="title">
                
                <h1 className="text-5xl font-normal max-w-[30%]">Trends <strong className="text-8xl">Voice</strong></h1>
              </div>
              
                <p className=" font-light text-4xl max-w-[70%] mr-auto ">
                  Em uma palestra inspiradora, César Cielo compartilha como liderar e tomar decisões estratégicas em cenários de alta pressão e constante mudança na palestra 
                  <strong className="text-[#00FF9B] italic"> “Alta performance em cenários instáveis”</strong>
                </p>
              
            </div>
            
            <div className="trend-cast slide  flex items-center gap-10">
              <img src={arrowaleft} alt="arrow left" className="arrow-left " />
              <div className="relative flex flex-col justify-start rounded-2xl overflow-hidden">
                <div className="rounded-tr-[268px] rounded-2xl bottom-0 left-0 absolute bg-[linear-gradient(200.71deg,rgba(0,153,93,0)_9.01%,#00FF9B_94.12%)] p-[1.3px] ">
                  <div className="content-wrapper  px-10 pt-10 pb-10 rounded-tr-[268px] rounded-2xl">
                    <h3 className="text-7xl font-bold mb-5">César Cielo</h3>
                    <p className="font-thin text-2xl leading-8 mb-5">Competitivo e incansável, Cielo transformou anos de suor em 21s30 de glória.</p>
                    <p className="font-thin text-2xl leading-8">Sem respirar por 34 braçadas, garantiu o primeiro ouro da natação brasileira. Poucos segundos na água que resumem uma vida inteira de motivação e trabalho duro.
                    </p>
                  </div>
                </div>
                <img src={cielo} alt="César Cielo" className="max-w-[700px] h-full  object-cover" />

              </div>
              <img src={arrowright} alt="" className="arrow-right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )}
