import arrowdown from '../assets/arrow-down-black.png';

export default function Sponsorship() {
  return (
    <section className="w-full pt-12 sm:pt-16 lg:pt-[89px] pb-12 sm:pb-16 lg:pb-20">

      <div className="container-app relative">

        <div className="w-full sm:w-[90%] m-auto rounded-[20px] bg-[linear-gradient(150.71deg,rgba(0,153,93,0)_0.01%,#00FF9B_94.12%)] p-[2.7px] lg:h-full">
          <div className="flex h-full w-full flex-col gap-4 sm:gap-6 lg:gap-10 rounded-[18px] bg-[linear-gradient(140.71deg,rgba(0,153,93,0)_30%,rgba(0,255,155,0.25)_100%),linear-gradient(#010C28,#010C28)] p-5 sm:p-8 lg:p-15">
              <div className="flex gap-3 sm:gap-5 items-center">
                 <h1 className="text-2xl sm:text-4xl lg:text-7xl font-bold">Sponsorship</h1>
                 <div className="bg-[#00FF9B] rounded flex items-center p-1.5 sm:p-2">
                     <img src={arrowdown} alt="arrow down" className='border-2 sm:border-3 border-black m-auto rounded p-1 sm:p-2 w-7 h-7 sm:w-10 sm:h-10'/>
                 </div>
              </div>
              <p className='text-sm sm:text-lg lg:text-2xl max-w-full sm:max-w-[60%] lg:max-w-[45%]'> Conecte <strong className='text-[#00FF9B]'>sua marca aos principais decisores</strong> do setor. Baixe a cartilha de patrocínio e descubra como!</p>
          </div>
        </div>
      </div>
    </section>
  )}
