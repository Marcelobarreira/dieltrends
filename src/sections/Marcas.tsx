import losa from '../assets/losa4.png'
import AnimatedSection from '../components/animations/AnimatedSection'
import StaggerContainer, { staggerItemScale } from '../components/animations/StaggerContainer'
import { motion } from 'framer-motion'


export default function Marcas() {
  const logos = Array.from({ length: 11 });

  return (
    <section className="w-full pt-12 sm:pt-16 lg:pt-[89px]">

      <div className="container-app relative">

        <div className="w-full rounded-[20px] lg:h-full">
          <div className="h-full w-full rounded-[18px]">
              <AnimatedSection variant="slideUp">
                <h1 className="text-3xl sm:text-5xl lg:text-7xl text-center font-bold max-w-full sm:max-w-[60%] lg:max-w-[30%] mx-auto">Marcas <strong className="text-[#00FF9B]">Confirmadas</strong></h1>
              </AnimatedSection>
              <div className="w-full rounded-[20px] bg-[linear-gradient(240.71deg,rgba(0,153,93,0)_0.01%,#00FF9B_94.12%)] p-[2.7px] lg:h-full mt-6 sm:mt-10 lg:mt-15">
                <StaggerContainer staggerDelay={0.08} delayChildren={0.2} className="flex flex-wrap gap-4 sm:gap-6 lg:gap-10 h-full w-full rounded-[18px] bg-white p-4 sm:p-8 lg:p-15 justify-center items-center">
                  {logos.map((_, i) => (
                    <motion.img key={i} variants={staggerItemScale} src={losa} alt="Losas" className="w-16 sm:w-24 lg:w-auto h-auto object-contain" />
                  ))}
                </StaggerContainer>
              </div>

          </div>
        </div>
      </div>
    </section>
  )}
