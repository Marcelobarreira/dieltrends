import UltimoEvent from '../assets/ultimo-evento.png'

export default function UltimoEvento() {
  return (
    <section className="w-full" style={{ paddingTop: '89px' }}>
      {/* Conector */}
     

      <div className="container-app relative">
        {/* Wrapper com gradiente de borda */}
        
        <div className="w-full rounded-[20px] bg-[linear-gradient(240.71deg,rgba(0,153,93,0)_0.01%,#00FF9B_94.12%)] p-[2.7px] lg:h-full">
          <div className="flex h-full w-full flex-col items-center gap-20 overflow-visible rounded-[18px] bg-[linear-gradient(#010C28,#010C28)] sm:p-40 ">
               <h1 className="text-8xl font-bold max-w-[70%] text-center">O que foi o último evento</h1>
               <div className="relative w-full">
                 <img src={UltimoEvent} alt="Ultimo evento" className="w-full h-full object-cover drop-shadow-[0_0px_190px_rgba(0,255,155,0.25)]" />
               </div>
          </div>
        </div>
      </div>
    </section>
  )}



