import losa from '../assets/losa4.png'


export default function Marcas() {
  return (
    <section className="w-full" style={{ paddingTop: '89px' }}>
      {/* Conector */}
     

      <div className="container-app relative">
        {/* Wrapper com gradiente de borda */}
         
        <div className="w-full rounded-[20px]  lg:h-full">
          <div className="h-full w-full rounded-[18px]">
              <h1 className="text-7xl text-center font-bold max-w-[30%] mx-auto">Marcas <strong className="text-[#00FF9B]">Confirmadas</strong></h1>
              <div className="w-full rounded-[20px] bg-[linear-gradient(240.71deg,rgba(0,153,93,0)_0.01%,#00FF9B_94.12%)] p-[2.7px] lg:h-full mt-15">
                <div className="flex flex-wrap gap-10 h-full w-full flex-col  rounded-[18px] bg-white sm:p-15 lg:flex-row">
                  <img src={losa} alt="Losas" />
                  <img src={losa} alt="Losas" />
                  <img src={losa} alt="Losas" />
                  <img src={losa} alt="Losas" />
                  <img src={losa} alt="Losas" />
                  <img src={losa} alt="Losas" />
                  <img src={losa} alt="Losas" />
                  <img src={losa} alt="Losas" />
                  <img src={losa} alt="Losas" />
                  <img src={losa} alt="Losas" />
                  <img src={losa} alt="Losas" />
                </div>
          </div>
              
          </div>
        </div>
      </div>
    </section>
  )}