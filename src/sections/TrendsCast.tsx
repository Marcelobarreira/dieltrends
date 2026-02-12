import fotocardslide from "../assets/foto-card-slide.png";
import linkicon from "../assets/icone-likedin.png";


export default function trendscast() {
  return (
    <section className="w-full" style={{ paddingTop: "89px" }}>
      {/* Conector */}

      <div className="container-app relative">
        {/* Wrapper com gradiente de borda */}
        <div
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
        <div className="w-full rounded-[20px] bg-[linear-gradient(337.71deg,rgba(0,153,93,0)_.01%,#00FF9B_90.12%)] p-[2.8px] ">
          <div className="flex flex-col gap-20 w-full  px-10 py-28 rounded-[18px] bg-[linear-gradient(140.71deg,rgba(0,153,93,0)_55%,rgba(0,255,155,0.25)_100%),linear-gradient(#010C28,#010C28)] ">
            <div className="flex  w-full mb-10 ">
              <div className="w-[60%] flex flex-col items-end">
                <h4 className="text-4xl">TrendsCast</h4>
                <h1 className="text-7xl font-bold">Título aqui</h1>
              </div>
              <div className="">
                <p className="text-4xl  ml-auto max-w-[80%] ">
                  Um podcast ao vivp, direto no centro do palco do cubo, para falar sobre
                  <strong className="text-[#00FF9B] italic">“Alta performance em cenários instáveis”</strong>
                </p>
              </div>
            </div>
            
            <div className="trend-cast slide  flex items-center gap-10 p-5 ">
          
               <div className="profile-card relative flex flex-col justify-start">
                  <img src={fotocardslide} alt="foto perfil" className="w-full rounded-t-[20px]" />
                  <div className="rounded-tr-[120px] bottom-0 left-0 absolute bg-[linear-gradient(300.71deg,rgba(0,153,93,0)_0.01%,#00FF9B_94.12%)] p-[1.5px] ">
                    <div className="content-wrapper rounded-tr-[120px] p-[45.5px] ">
                      <h3 className="text-5xl  italic font-bold text-[#00FF9B]">Jaime ribeiro</h3>
                      <strong className="text-4xl">CEO de tal</strong>
                      <p className=" font-thin text-3xl max-w-[70%] leading-[130%]">
                            A estratégia por trás do maior turnaround do varejo nacional
                      </p>
                      <img src={linkicon} alt="" className="link-icon w-[50px] h-[50px] self-end " />
                    </div>
                  </div>
              </div>
               <div className="profile-card relative flex flex-col justify-start max-w-[500px]">
                  <img src={fotocardslide} alt="foto perfil" className="w-full rounded-t-[20px]" />
                  <div className="  rounded-tr-[120px] bottom-0 left-0 absolute bg-[linear-gradient(149.71deg,rgba(0,153,93,0)_0.01%,#00FF9B_94.12%)] p-[1.5px] ">
                    <div className="content-wrapper rounded-tr-[120px] p-[45.5px] ">
                      <h3 className="text-5xl  italic font-bold text-[#00FF9B]">Jaime ribeiro</h3>
                      <strong className="text-4xl">CEO de tal</strong>
                      <p className=" font-thin text-3xl max-w-[70%] leading-[130%]">
                            A estratégia por trás do maior turnaround do varejo nacional
                      </p>
                      <img src={linkicon} alt="" className="link-icon w-[50px] h-[50px] self-end " />
                    </div>
                  </div>
              </div>
               <div className="profile-card relative flex flex-col justify-start">
                  <img src={fotocardslide} alt="foto perfil" className="w-full rounded-t-[20px]" />
                  <div className="  rounded-tr-[120px] bottom-0 left-0 absolute bg-[linear-gradient(149.71deg,rgba(0,153,93,0)_0.01%,#00FF9B_94.12%)] p-[1.5px] ">
                    <div className="content-wrapper rounded-tr-[120px] p-[45.5px] ">
                      <h3 className="text-5xl  italic font-bold text-[#00FF9B]">Jaime ribeiro</h3>
                      <strong className="text-4xl">CEO de tal</strong>
                      <p className=" font-thin text-3xl max-w-[70%] leading-[130%]">
                            A estratégia por trás do maior turnaround do varejo nacional
                      </p>
                      <img src={linkicon} alt="" className="link-icon w-[50px] h-[50px] self-end " />
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



