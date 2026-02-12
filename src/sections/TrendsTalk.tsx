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
    description: "Um espaço dedicado a apresentar o que já está revolucionando o setor.",
    image: fotocardslide,
  },
  {
    name: "Speaker 3",
    description: "Inovações que estão transformando a maneira como operamos no dia a dia.",
    image: fotocardslide,
  },
];

export default function TrendsTalk() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  const slide = slides[current];

  return (
    <section className="w-full pt-12 sm:pt-16 lg:pt-[89px]">
      <div className="container-app relative">
        <div className="w-full rounded-[20px] bg-[linear-gradient(337.71deg,rgba(0,153,93,0)_.01%,#00FF9B_90.12%)] p-[2.8px]">
          <div className="flex flex-col lg:flex-row-reverse h-full w-full p-5 sm:p-8 lg:p-15 rounded-[18px] bg-[linear-gradient(320.71deg,rgba(0,153,93,0)_60%,rgba(0,255,155,0.25)_100%),linear-gradient(#010C28,#010C28)]">

            {/* Conteúdo texto */}
            <div className="trend-cast content mb-6 lg:mb-0 lg:w-1/2 p-2 sm:p-4 lg:p-10 text-right flex flex-col justify-between">
              <div className="title">
                <h4>TrendsTalk</h4>
                <h1>Tendências & Inovações</h1>
              </div>
              <div className="description max-w-full lg:max-w-[73%] ml-auto mt-4 lg:mt-0">
                <p>
                  Um espaço dedicado a apresentar o que já está revolucionando o setor. Em talks de 15 minutos, traremos
                  <strong className="text-[#00FF9B] italic"> as inovações mais atuais do mercado.</strong>
                </p>
              </div>
            </div>

            {/* Carrossel */}
            <div className="trend-cast slide flex items-center gap-3 sm:gap-4 lg:gap-6 lg:w-1/2">
              <button onClick={prev} className="shrink-0 cursor-pointer hover:opacity-70 transition-opacity">
                <img src={arrowaleft} alt="Anterior" className="w-6 sm:w-8 lg:w-12" />
              </button>

              <div className="relative flex flex-col justify-start w-full overflow-hidden rounded-t-[20px]">
                <img
                  src={slide.image}
                  alt={slide.name}
                  className="w-full h-auto rounded-t-[20px] object-cover"
                />
                <div className="rounded-tr-[60px] sm:rounded-tr-[90px] lg:rounded-tr-[120px] bottom-0 left-0 absolute bg-[linear-gradient(230.71deg,rgba(0,153,93,0)_0.01%,#00FF9B_94.12%)] p-[1.7px] overflow-hidden">
                  <div className="content-wrapper rounded-tr-[60px] sm:rounded-tr-[90px] lg:rounded-tr-[120px] px-4 pt-6 pb-4 sm:px-6 sm:pt-10 sm:pb-6 lg:px-10 lg:pt-20 lg:pb-10">
                    <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 lg:mb-6">{slide.name}</h3>
                    <p className="font-thin text-sm sm:text-lg lg:text-xl leading-5 sm:leading-7 lg:leading-8">
                      {slide.description}
                    </p>
                    <img src={linkicon} alt="" className="link-icon w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 self-end mt-3 sm:mt-5 lg:mt-8 mx-2" />
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
