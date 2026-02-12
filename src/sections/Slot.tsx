import { useState } from "react";
import fotocardslide from "../assets/foto-card-slide.png";
import linkicon from "../assets/link-icon-2.png";
import arrowaleft from "../assets/arrow-left.png";
import arrowright from "../assets/arrow-right.png";

const slides = [
  {
    name: "César Cielo",
    description: "Competitivo e incansável, Cielo transformou anos de suor em 21s30 de glória.",
    image: fotocardslide,
  },
  {
    name: "Speaker 2",
    description: "Decisões estratégicas em cenários de alta pressão e constante mudança.",
    image: fotocardslide,
  },
  {
    name: "Speaker 3",
    description: "Alta performance em cenários instáveis: lições para líderes.",
    image: fotocardslide,
  },
];

export default function Slot() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  const slide = slides[current];

  return (
    <section className="w-full pt-12 sm:pt-16 lg:pt-[89px]">
      <div className="container-app relative">
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
        <div className="w-full rounded-[20px] bg-[linear-gradient(337.71deg,rgba(0,153,93,0)_.01%,#00FF9B_90.12%)] p-[2.8px]">
          <div className="flex flex-col lg:flex-row h-full w-full p-5 sm:p-8 lg:p-20 rounded-[18px] bg-[linear-gradient(320.71deg,rgba(0,153,93,0)_60%,rgba(0,255,155,0.25)_100%),linear-gradient(#010C28,#010C28)]">

            {/* Conteúdo texto */}
            <div className="trend-cast content mb-6 lg:mb-0 lg:w-1/2 flex flex-col justify-between">
              <div className="title">
                <h4>Slot interativo</h4>
                <h1 className="max-w-full lg:max-w-[75%]">Energia alem do óbvio</h1>
              </div>
              <div className="description mt-4 lg:mt-0">
                <p className="max-w-full lg:max-w-[73%]">
                  Em uma palestra inspiradora, César Cielo compartilha como
                  liderar e tomar decisões estratégicas em cenários de alta
                  pressão e constante mudança na palestra{" "}
                  <strong className="text-[#00FF9B] italic">"Alta performance em cenários instáveis"</strong>
                </p>
              </div>
            </div>

            {/* Carrossel */}
            <div className="trend-cast slide flex items-center gap-3 sm:gap-4 lg:gap-6 lg:w-1/2">
              <button onClick={prev} className="shrink-0 cursor-pointer hover:opacity-70 transition-opacity">
                <img src={arrowaleft} alt="Anterior" className="w-6 sm:w-8 lg:w-12" />
              </button>

              <div className="profile-card relative flex flex-col justify-start w-full overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.name}
                  className="w-full h-auto rounded-t-[20px] object-cover"
                />
                <div className="rounded-tl-[60px] sm:rounded-tl-[90px] lg:rounded-tl-[120px] bottom-0 left-0 absolute bg-[linear-gradient(149.71deg,rgba(0,153,93,0)_0.01%,#00FF9B_94.12%)] p-[1.7px]">
                  <div className="content-wrapper p-4 sm:p-8 lg:p-[50.5px] rounded-tl-[60px] sm:rounded-tl-[90px] lg:rounded-tl-[120px]">
                    <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold">{slide.name}</h3>
                    <p className="font-light text-sm sm:text-lg lg:text-xl leading-5 sm:leading-7 lg:leading-8">
                      {slide.description}
                    </p>
                    <img src={linkicon} alt="" className="link-icon w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 self-end mt-3 lg:mt-8" />
                  </div>
                </div>
              </div>

              <button onClick={next} className="shrink-0 cursor-pointer hover:opacity-70 transition-opacity">
                <img src={arrowright} alt="Próximo" className="w-6 sm:w-8 lg:w-12" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
