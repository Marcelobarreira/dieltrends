import lopalpic1 from '../assets/local-pic-1.png'
import lopalpic2 from '../assets/local-pic-2.png'


export default function Local() {
  return (
    <section className="w-full pt-12 sm:pt-16 lg:pt-[89px]">

      <div className="container-app relative">

          <div className="w-full rounded-[20px] bg-[linear-gradient(240.71deg,rgba(0,153,93,0)_0.01%,#00FF9B_94.12%)] p-[2.7px] lg:h-full">
            <div className="flex h-full w-full flex-col rounded-[18px] bg-[linear-gradient(260.71deg,rgba(0,153,93,0)_60%,rgba(0,255,155,0.25)_100%),linear-gradient(#010C28,#010C28)] px-4 sm:px-6 lg:px-10 py-10 sm:py-16 lg:py-30 text-center">

                <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white">Local do evento</h3>
                <div className="flex justify-center my-3 sm:my-5">
                   <h1 className="text-2xl sm:text-4xl lg:text-7xl font-bold">CUBO - 2° Andar</h1>
                </div>
                <p className="text-sm sm:text-lg lg:text-2xl text-white font-light max-w-[450px] m-auto">CUBO - Alameda Vicente Pinzon, 54 Vila Olímpia, São Paulo SP</p>
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-10 mt-8 sm:mt-12 lg:mt-20">
                    <div className="relative w-full overflow-hidden rounded-[18px] min-h-[200px] sm:min-h-[300px] lg:min-h-0">
                      <iframe
                        title="Mapa do evento"
                        className="absolute left-0 top-0 h-full w-full"
                        frameBorder={0}
                        scrolling="no"
                        marginHeight={0}
                        marginWidth={0}
                        src="https://maps.google.com/maps?width=800&height=0&hl=en&q=CUBO%20-%20Alameda%20Vicente%20Pinzon%2C%2054%20Vila%20Ol%C3%ADmpia%2C%20S%C3%A3o%20Paulo%20SP&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                      />
                    </div>
                    <div className="flex gap-4 sm:gap-6 lg:gap-10">
                      <img src={lopalpic2} alt="Local do evento" className="w-1/2 lg:w-auto h-48 sm:h-64 lg:h-full object-cover rounded-[18px] lg:max-w-[380px]" />
                      <img src={lopalpic1} alt="Local do evento" className="w-1/2 lg:w-auto h-48 sm:h-64 lg:h-full object-cover rounded-[18px] lg:max-w-[380px]" />
                    </div>
                </div>
            </div>

          </div>
      </div>
    </section>
  )}
