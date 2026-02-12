import arrowdown from '../assets/arrow-down-black.png';

export default function Sponsorship() {
  return (
    <section className="w-full" style={{ paddingTop: '89px' }}>
      {/* Conector */}
     

      <div className="container-app  relative">
        {/* Wrapper com gradiente de borda */}
         
      
        <div className="w-[90%] m-auto rounded-[20px] bg-[linear-gradient(150.71deg,rgba(0,153,93,0)_0.01%,#00FF9B_94.12%)] p-[2.7px] lg:h-full">
          <div className="flex h-full w-full flex-col gap-10 rounded-[18px] bg-[linear-gradient(140.71deg,rgba(0,153,93,0)_30%,rgba(0,255,155,0.25)_100%),linear-gradient(#010C28,#010C28)] sm:p-15">
              <div className="flex gap-5">
                 <h1 className="text-7xl font-bold">Sponsorship</h1>
                 <div className="bg-[#00FF9B] rounded flex items-center p-2">
                     <img src={arrowdown} alt="arrow down" className='border-3 border-black m-auto rounded p-2 w-10 h-10'/>
                 </div>
              </div>
              <p className='text-2xl max-w-[45%]'> Conecte <strong className='text-[#00FF9B]'>sua marca aos principais decisores</strong> do setor. Baixe a cartilha de patrocínio e descubra como!</p>
          </div>
        </div>
      </div>
    </section>
  )}