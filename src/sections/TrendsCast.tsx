import { motion } from "framer-motion";
import fotocardslide from "../assets/foto-card-slide.png";
import AnimatedSection from '../components/animations/AnimatedSection'
import StaggerContainer, { staggerItem } from '../components/animations/StaggerContainer'

const cards = [
  { name: "Jaime ribeiro", role: "CEO de tal", desc: "A estratégia por trás do maior turnaround do varejo nacional" },
  { name: "Jaime ribeiro", role: "CEO de tal", desc: "A estratégia por trás do maior turnaround do varejo nacional" },
  { name: "Jaime ribeiro", role: "CEO de tal", desc: "A estratégia por trás do maior turnaround do varejo nacional" },
];

export default function trendscast() {
  return (
    <section className="w-full pt-12 sm:pt-16 lg:pt-[89px]">
      <div className="container-app relative">
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
            <AnimatedSection variant="slideUp">
              <div className="flex flex-col sm:flex-row w-full mb-4 sm:mb-10 gap-4 sm:gap-0">
                <div className="sm:w-[60%] flex flex-col sm:items-end">
                  <h4 className="text-xl sm:text-2xl lg:text-2xl xl:text-4xl">TrendsCast</h4>
                  <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-7xl font-bold">Título aqui</h1>
                </div>
                <div>
                  <p className="text-base sm:text-xl lg:text-2xl xl:text-4xl sm:ml-auto max-w-full sm:max-w-[80%]">
                    Um podcast ao vivo, direto no centro do palco do cubo, para falar sobre
                    <strong className="text-[#00FF9B] italic"> "Alta performance em cenários instáveis"</strong>
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <StaggerContainer staggerDelay={0.15} delayChildren={0.2} className="trend-cast slide flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-4 xl:gap-6 2xl:gap-10 p-0 sm:p-2 lg:p-2 xl:p-5">
              {cards.map((card, i) => (
                <motion.div key={i} variants={staggerItem} className="profile-card relative flex flex-col justify-start w-full">
                  <img src={fotocardslide} alt="foto perfil" className="w-full rounded-t-[20px]" />
                  <div className="rounded-tr-[60px] sm:rounded-tr-[90px] lg:rounded-tr-[80px] xl:rounded-tr-[120px] bottom-0 left-0 absolute bg-[linear-gradient(149.71deg,rgba(0,153,93,0)_0.01%,#00FF9B_94.12%)] p-[1.5px]">
                    <div className="content-wrapper rounded-tr-[60px] sm:rounded-tr-[90px] lg:rounded-tr-[80px] xl:rounded-tr-[120px] p-4 sm:p-6 lg:p-5 xl:p-8 2xl:p-[45.5px]">
                      <h3 className="text-xl sm:text-3xl lg:text-xl xl:text-3xl 2xl:text-5xl italic font-bold text-[#00FF9B]">{card.name}</h3>
                      <strong className="text-base sm:text-xl lg:text-base xl:text-xl 2xl:text-4xl">{card.role}</strong>
                      <p className="font-thin text-sm sm:text-lg lg:text-sm xl:text-base 2xl:text-3xl max-w-full lg:max-w-[70%] leading-[130%]">{card.desc}</p>
                      <span className="self-end cursor-pointer border border-[#005CFC] rounded-[10px] px-2 py-0 text-xl sm:text-3xl lg:text-xl xl:text-3xl 2xl:text-[50.14px] font-normal leading-[103%] text-white">in</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
