import fotocardslide from "../assets/foto-card-slide.png";
import linkicon from "../assets/icone-likedin.png";


export default function trendscast() {
  return (
    <section className="w-full pt-12 sm:pt-16 lg:pt-[89px]">
      {/* Conector */}

      <div className="container-app relative">
        {/* Wrapper com gradiente de borda */}
        <div
          className="hidden lg:block"
          style={{
            position: "absolute",
            left: "50%",
            top: "-90px",
            transform: "translateX(-50%)",
            width: "1px",
            height: "91px",
            backgroundColor: "#00FF9B",
          }}
        />
        <div className="w-full rounded-[20px] bg-[linear-gradient(337.71deg,rgba(0,153,93,0)_.01%,#00FF9B_90.12%)] p-[2.8px]">
          <div className="flex flex-col gap-8 sm:gap-12 lg:gap-20 w-full px-4 py-10 sm:px-8 sm:py-16 lg:px-10 lg:py-28 rounded-[18px] bg-[linear-gradient(140.71deg,rgba(0,153,93,0)_55%,rgba(0,255,155,0.25)_100%),linear-gradient(#010C28,#010C28)]">
            <div className="flex flex-col sm:flex-row w-full mb-4 sm:mb-10 gap-4 sm:gap-0">
              <div className="sm:w-[60%] flex flex-col sm:items-end">
                <h4 className="text-xl sm:text-2xl lg:text-4xl">TrendsCast</h4>
                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold">Título aqui</h1>
              </div>
              <div>
                <p className="text-base sm:text-xl lg:text-4xl sm:ml-auto max-w-full sm:max-w-[80%]">
                  Um podcast ao vivo, direto no centro do palco do cubo, para falar sobre
                  <strong className="text-[#00FF9B] italic"> "Alta performance em cenários instáveis"</strong>
                </p>
              </div>
            </div>

            <div className="trend-cast slide flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-10 p-0 sm:p-2 lg:p-5">

               <div className="profile-card relative flex flex-col justify-start w-full">
                  <img src={fotocardslide} alt="foto perfil" className="w-full rounded-t-[20px]" />
                  <div className="rounded-tr-[60px] sm:rounded-tr-[90px] lg:rounded-tr-[120px] bottom-0 left-0 absolute bg-[linear-gradient(300.71deg,rgba(0,153,93,0)_0.01%,#00FF9B_94.12%)] p-[1.5px]">
                    <div className="content-wrapper rounded-tr-[60px] sm:rounded-tr-[90px] lg:rounded-tr-[120px] p-4 sm:p-6 lg:p-[45.5px]">
                      <h3 className="text-xl sm:text-3xl lg:text-5xl italic font-bold text-[#00FF9B]">Jaime ribeiro</h3>
                      <strong className="text-base sm:text-xl lg:text-4xl">CEO de tal</strong>
                      <p className="font-thin text-sm sm:text-lg lg:text-3xl max-w-full lg:max-w-[70%] leading-[130%]">
                            A estratégia por trás do maior turnaround do varejo nacional
                      </p>
                      <img src={linkicon} alt="" className="link-icon w-6 h-6 sm:w-8 sm:h-8 lg:w-[50px] lg:h-[50px] self-end" />
                    </div>
                  </div>
              </div>
               <div className="profile-card relative flex flex-col justify-start w-full">
                  <img src={fotocardslide} alt="foto perfil" className="w-full rounded-t-[20px]" />
                  <div className="rounded-tr-[60px] sm:rounded-tr-[90px] lg:rounded-tr-[120px] bottom-0 left-0 absolute bg-[linear-gradient(149.71deg,rgba(0,153,93,0)_0.01%,#00FF9B_94.12%)] p-[1.5px]">
                    <div className="content-wrapper rounded-tr-[60px] sm:rounded-tr-[90px] lg:rounded-tr-[120px] p-4 sm:p-6 lg:p-[45.5px]">
                      <h3 className="text-xl sm:text-3xl lg:text-5xl italic font-bold text-[#00FF9B]">Jaime ribeiro</h3>
                      <strong className="text-base sm:text-xl lg:text-4xl">CEO de tal</strong>
                      <p className="font-thin text-sm sm:text-lg lg:text-3xl max-w-full lg:max-w-[70%] leading-[130%]">
                            A estratégia por trás do maior turnaround do varejo nacional
                      </p>
                      <img src={linkicon} alt="" className="link-icon w-6 h-6 sm:w-8 sm:h-8 lg:w-[50px] lg:h-[50px] self-end" />
                    </div>
                  </div>
              </div>
               <div className="profile-card relative flex flex-col justify-start w-full">
                  <img src={fotocardslide} alt="foto perfil" className="w-full rounded-t-[20px]" />
                  <div className="rounded-tr-[60px] sm:rounded-tr-[90px] lg:rounded-tr-[120px] bottom-0 left-0 absolute bg-[linear-gradient(149.71deg,rgba(0,153,93,0)_0.01%,#00FF9B_94.12%)] p-[1.5px]">
                    <div className="content-wrapper rounded-tr-[60px] sm:rounded-tr-[90px] lg:rounded-tr-[120px] p-4 sm:p-6 lg:p-[45.5px]">
                      <h3 className="text-xl sm:text-3xl lg:text-5xl italic font-bold text-[#00FF9B]">Jaime ribeiro</h3>
                      <strong className="text-base sm:text-xl lg:text-4xl">CEO de tal</strong>
                      <p className="font-thin text-sm sm:text-lg lg:text-3xl max-w-full lg:max-w-[70%] leading-[130%]">
                            A estratégia por trás do maior turnaround do varejo nacional
                      </p>
                      <img src={linkicon} alt="" className="link-icon w-6 h-6 sm:w-8 sm:h-8 lg:w-[50px] lg:h-[50px] self-end" />
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
