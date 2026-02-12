import losa from '../assets/losa4.png'


export default function Marcas() {
  return (
    <section className="w-full pt-12 sm:pt-16 lg:pt-[89px]">

      <div className="container-app relative">

        <div className="w-full rounded-[20px] lg:h-full">
          <div className="h-full w-full rounded-[18px]">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl text-center font-bold max-w-full sm:max-w-[60%] lg:max-w-[30%] mx-auto">Marcas <strong className="text-[#00FF9B]">Confirmadas</strong></h1>
              <div className="w-full rounded-[20px] bg-[linear-gradient(240.71deg,rgba(0,153,93,0)_0.01%,#00FF9B_94.12%)] p-[2.7px] lg:h-full mt-6 sm:mt-10 lg:mt-15">
                <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-10 h-full w-full rounded-[18px] bg-white p-4 sm:p-8 lg:p-15 justify-center items-center">
                  <img src={losa} alt="Losas" className="w-16 sm:w-24 lg:w-auto h-auto object-contain" />
                  <img src={losa} alt="Losas" className="w-16 sm:w-24 lg:w-auto h-auto object-contain" />
                  <img src={losa} alt="Losas" className="w-16 sm:w-24 lg:w-auto h-auto object-contain" />
                  <img src={losa} alt="Losas" className="w-16 sm:w-24 lg:w-auto h-auto object-contain" />
                  <img src={losa} alt="Losas" className="w-16 sm:w-24 lg:w-auto h-auto object-contain" />
                  <img src={losa} alt="Losas" className="w-16 sm:w-24 lg:w-auto h-auto object-contain" />
                  <img src={losa} alt="Losas" className="w-16 sm:w-24 lg:w-auto h-auto object-contain" />
                  <img src={losa} alt="Losas" className="w-16 sm:w-24 lg:w-auto h-auto object-contain" />
                  <img src={losa} alt="Losas" className="w-16 sm:w-24 lg:w-auto h-auto object-contain" />
                  <img src={losa} alt="Losas" className="w-16 sm:w-24 lg:w-auto h-auto object-contain" />
                  <img src={losa} alt="Losas" className="w-16 sm:w-24 lg:w-auto h-auto object-contain" />
                </div>
          </div>

          </div>
        </div>
      </div>
    </section>
  )}
