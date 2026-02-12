import fotocardslide from "../assets/foto-card-slide.png";
import linkicon from "../assets/link-icon-2.png";
import arrowaleft from "../assets/arrow-left.png";
import arrowright from "../assets/arrow-right.png";


export default function Slot() {
  return (
    <section className="w-full" style={{ paddingTop: "89px" }}>
      {/* Conector */}

      <div className="container-app relative">
        {/* Wrapper com gradiente de borda */}
        <div
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
          <div className="flex  h-full w-full p-20 rounded-[18px] bg-[linear-gradient(320.71deg,rgba(0,153,93,0)_60%,rgba(0,255,155,0.25)_100%),linear-gradient(#010C28,#010C28)]  lg:flex-row">
            <div className="trend-cast content mb-10">
              <div className="title">
                <h4>Slot interativo</h4>
                <h1 className="max-w-[75%]">Energia alem do óbvio</h1>
              </div>
              <div className="description">
                <p className="max-w-[73%] ">
                  Em uma palestra inspiradora, César Cielo compartilha como
                  liderar e tomar decisões estratégicas em cenários de alta
                  pressão e constante mudança na palestra{" "}
                  <strong className="text-[#00FF9B] italic">“Alta performance em cenários instáveis”</strong>
                </p>
              </div>
            </div>
            
            <div className="trend-cast slide  flex items-center gap-10 p-5 ">
              <img src={arrowaleft} alt="" className="arrow-left " />
              <div className="profile-card relative flex flex-col justify-start ">
                <img src={fotocardslide} alt="" className="w-full rounded-t-[20px]" />
                <div className="rounded-tl-[120px]  bottom-0 left-0 absolute bg-[linear-gradient(149.71deg,rgba(0,153,93,0)_0.01%,#00FF9B_94.12%)] p-[1.7px] ">
                  <div className="content-wrapper rounded-tl[145px] p-[50.5px] rounded-tl-[120px]">
                    <h3 className="text-7xl font-bold ">César Cielo</h3>
                    <p className="font-light text-2xl leading-9">
                      Competitivo e incansável, Cielo transformou anos de suor em
                      21s30 de glória.
                    </p>
                    <img src={linkicon} alt="" className="link-icon w-[30px] h-[30px] self-end mt-10" />
                  </div>
                </div>
              </div>
              <img src={arrowright} alt="" className="arrow-right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


