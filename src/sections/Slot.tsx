import fotocardslide from "../assets/foto-card-slide.png";
import linkicon from "../assets/link-icon-2.png";
import arrowaleft from "../assets/arrow-left.png";
import arrowright from "../assets/arrow-right.png";


export default function Slot() {
  return (
    <section className="w-full pt-12 sm:pt-16 lg:pt-[89px]">
      {/* Conector */}

      <div className="container-app relative">
        {/* Wrapper com gradiente de borda */}
        <div
          className="hidden lg:block"
          style={{
            position: "absolute",
            left: "26%",
            top: "-91px",
            transform: "translateX(-50%)",
            width: "1px",
            height: "91px",
            backgroundColor: "#00FF9B",
          }}
        />
        <div className="w-full rounded-[20px] bg-[linear-gradient(337.71deg,rgba(0,153,93,0)_.01%,#00FF9B_90.12%)] p-[2.8px] lg:h-full">
          <div className="flex flex-col h-full w-full p-5 sm:p-8 lg:p-20 rounded-[18px] bg-[linear-gradient(320.71deg,rgba(0,153,93,0)_60%,rgba(0,255,155,0.25)_100%),linear-gradient(#010C28,#010C28)] lg:flex-row">
            <div className="trend-cast content mb-6 lg:mb-10">
              <div className="title">
                <h4>Slot interativo</h4>
                <h1 className="max-w-full lg:max-w-[75%]">Energia alem do óbvio</h1>
              </div>
              <div className="description">
                <p className="max-w-full lg:max-w-[73%]">
                  Em uma palestra inspiradora, César Cielo compartilha como
                  liderar e tomar decisões estratégicas em cenários de alta
                  pressão e constante mudança na palestra{" "}
                  <strong className="text-[#00FF9B] italic">"Alta performance em cenários instáveis"</strong>
                </p>
              </div>
            </div>

            <div className="trend-cast slide flex items-center gap-4 lg:gap-10 p-2 lg:p-5">
              <img src={arrowaleft} alt="" className="arrow-left w-6 sm:w-8 lg:w-auto hidden sm:block" />
              <div className="profile-card relative flex flex-col justify-start w-full">
                <img src={fotocardslide} alt="" className="w-full rounded-t-[20px]" />
                <div className="rounded-tl-[60px] sm:rounded-tl-[90px] lg:rounded-tl-[120px] bottom-0 left-0 absolute bg-[linear-gradient(149.71deg,rgba(0,153,93,0)_0.01%,#00FF9B_94.12%)] p-[1.7px]">
                  <div className="content-wrapper p-4 sm:p-8 lg:p-[50.5px] rounded-tl-[60px] sm:rounded-tl-[90px] lg:rounded-tl-[120px]">
                    <h3 className="text-2xl sm:text-4xl lg:text-7xl font-bold">César Cielo</h3>
                    <p className="font-light text-sm sm:text-lg lg:text-2xl leading-5 sm:leading-7 lg:leading-9">
                      Competitivo e incansável, Cielo transformou anos de suor em
                      21s30 de glória.
                    </p>
                    <img src={linkicon} alt="" className="link-icon w-5 h-5 sm:w-6 sm:h-6 lg:w-[30px] lg:h-[30px] self-end mt-4 lg:mt-10" />
                  </div>
                </div>
              </div>
              <img src={arrowright} alt="" className="arrow-right w-6 sm:w-8 lg:w-auto hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
