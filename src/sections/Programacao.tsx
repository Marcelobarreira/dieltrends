
import grayarrow from '../assets/gray-arrow.png'
import greenarrow from '../assets/green-arrow.png'
import arrowdown from '../assets/arrow-down.png'

export default function Programacao() {
  return (
    <section className="" style={{ paddingTop: '89px' }}>
      {/* Conector */}
     

      <div className="container-app-2 relative">
        
        <div className="w-full rounded-[20px] bg-[linear-gradient(160.71deg,rgba(0,153,93,0)_0.01%,#00FF9B_94.12%)] p-[1.7px] lg:h-full">
          <div className="flex flex-col items-center gap-40  py-40 pb-90 px-10 h-full w-full bg-[#010C28] rounded-[20px]">
              <h1 className="text-7xl font-bold text-white ">Programação</h1>
              <div className="mini-shadow flex gap-10 ">
                <div className="max-w-[700px] p-10 rounded-[20px] bg-[linear-gradient(66.3deg,rgba(2,22,75,0)_-35.26%,#021E69_91.92%)]">
                  <ul>
                    <li className='flex justify-between mb-10 items-center '>
                       <p className="text-4xl font-bold">Manhã</p>
                       <div className="rectangle border-3 rounded-[4px] p-2  rotate-45 flex items-center w-[35px] h-[35px]">
                          <img src={arrowdown} alt="" className="arrow-left rotate-[-45deg] m-auto" />
                       </div>
                        
                    </li>
                    <li className='flex gap-10 items-center py-10 border-t-1 border-[#012B98]'>
                       <img src={grayarrow} alt="" className="w-6.25 h-[25px]" />
                        <p className="text-4xl text-wrap"><strong className='italic font-thin'>08h -</strong> Credenciamento & Welcome Coffee </p>
                    </li>
                    <li className='flex gap-10 items-center py-10 border-t-1 border-[#012B98]'>
                       <img src={greenarrow} alt="" className="w-[25px] h-[25px] " />
                        <p className="text-4xl text-wrap"><strong className='italic font-thin'>09h -</strong> Trends Talk <strong className='text-xl italic text-gray-400'>Bruno Arcuri - CEO Diel</strong></p>
                    </li>
                    <li className='flex gap-10 items-center py-10 border-t-1 border-[#012B98]'>
                       <img src={grayarrow} alt="" className="w-[25px] h-[25px] " />
                        <p className="text-4xl"><strong className='italic font-thin' >09h15 </strong>- Case I & II - lorem ipsum</p>
                    </li>
                    <li className='flex gap-10 items-center py-10 border-t-1 border-[#012B98]'>
                       <img src={greenarrow} alt="" className="w-[25px] h-[25px] " />
                        <p className="text-4xl"><strong className='italic font-thin'>10h10 </strong>- Painel Interativo - Energia <strong className='text-xl italic text-gray-400'>Bruno Arcuri - CEO Diel </strong></p>
                    </li>
                    <li className='flex gap-10 items-center py-10 border-t-1 border-[#012B98]'>
                       <img src={grayarrow} alt="" className="w-[25px] h-[25px] " />
                        <p className="text-4xl text-gray-400" > <strong className='italic font-thin'>11h05 - </strong>Coffe Break</p>
                    </li>
                    <li className='flex gap-10 items-center py-10 border-t-1 border-[#012B98]'>
                       <img src={greenarrow} alt="" className="w-[25px] h-[25px] " />
                        <p className="text-4xl">Expansão na prática: Otimizando recursos para escalar operações</p>
                    </li>
                    <li className='flex gap-10 items-center py-10 border-t-1 border-[#012B98]'>
                       <img src={grayarrow} alt="" className="w-[25px] h-[25px] " />
                        <p className="text-4xl text-gray-400">Intervalo para almoço livre</p>
                    </li>

                    
                  </ul>
                </div>
                 <div className=" max-w-[700px] p-10 rounded-[20px] bg-[linear-gradient(250.35deg,rgba(2,22,75,0)_-9.78%,#021E69_87.8%)]">
                  <ul>
                    <li className='flex justify-between mb-10 items-center '>
                       <p className="text-4xl font-bold">Tarde</p>
                        <div className="rectangle border-3 rounded-[4px] p-2  rotate-45 flex items-center w-[35px] h-[35px]">
                          <img src={arrowdown} alt="" className="arrow-left rotate-[-45deg] m-auto" />
                       </div>
                    </li>
                    <li className='flex gap-10 items-center py-10 border-t border-[#012B98]'>
                       <img src={greenarrow} alt="" className="w-[25px] h-[25px]" />
                        <p className="text-4xl text-wrap">Painel Interativo : Manutenção 360</p>
                    </li>
                    <li className='flex gap-10 items-center py-10 border-t-1 border-[#012B98]'>
                       <img src={greenarrow} alt="" className="w-[25px] h-[25px] " />
                        <p className="text-4xl text-wrap">Carreira em Facilities: O que as empresas esperam de você</p>
                    </li>
                    <li className='flex gap-10 items-center py-10 border-t-1 border-[#012B98]'>
                       <img src={grayarrow} alt="" className="w-[25px] h-[25px] " />
                        <p className="text-4xl">Coffe Break</p>
                    </li>
                    <li className='flex gap-10 items-center py-10 border-t-1 border-[#012B98]'>
                       <img src={greenarrow} alt="" className="w-[25px] h-[25px] " />
                        <p className="text-4xl">Trends tech</p>
                    </li>
                    <li className='flex gap-10 items-center py-10 border-t-1 border-[#012B98]'>
                       <img src={greenarrow} alt="" className="w-[25px] h-[25px] " />
                        <p className="text-4xl">Gestão em águas turbulentas: estratégias para superar desafios</p>
                    </li>
                    <li className='flex gap-10 items-center py-10 border-t-1 border-[#012B98]'>
                       <img src={greenarrow} alt="" className="w-[25px] h-[25px] " />
                        <p className="text-4xl">Premiação e encerramento</p>
                    </li>
                    <li className='flex gap-10 items-center py-10 border-t-1 border-[#012B98]'>
                       <img src={greenarrow} alt="" className="w-[25px] h-[25px] " />
                        <p className="text-4xl">Happy Hour</p>
                    </li>

                    
                  </ul>
                </div>
              </div>
                
          </div>
        </div>
      </div>
    </section>
  )}