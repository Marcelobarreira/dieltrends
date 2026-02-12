
export default function Formatos() {
  return (
    <section className="w-full pt-12 sm:pt-16 lg:pt-[89px]">
      <div className="container-app relative">
        {/* Título */}
        <h2
          className="text-white font-bold text-3xl sm:text-4xl lg:text-[52px] mb-6 lg:mb-10"
          style={{
            lineHeight: '100%',
            letterSpacing: '-0.07em',
          }}
        >
          Conheça os formatos
          <br />
          e suas <em className="text-[#00FF9B] italic">temáticas:</em>
        </h2>

        {/* Imagem */}
         <div className="w-full m-auto rounded-[20px] bg-[linear-gradient(150.71deg,rgba(0,153,93,0)_0.01%,#00FF9B_94.12%)] p-[1.7px] lg:h-full">
          <div className="flex h-full w-full flex-col gap-10 rounded-[18px] bg-[linear-gradient(140.71deg,rgba(0,153,93,0)_30%,rgba(0,255,155,0.25)_100%),linear-gradient(#010C28,#010C28)] p-6 sm:p-15">

                 <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold max-w-full sm:max-w-[70%] lg:max-w-[50%] mt-10 sm:mt-20 lg:mt-30">Conheça os formatos e suas <em className="text-[#00FF9B] italic">temáticas:</em></h1>

          </div>
        </div>
          <div
            className="hidden lg:block"
            style={{
              position: 'absolute',
              left: '26%',
              bottom: '-91px',
              transform: 'translateX(-50%)',
              width: '1px',
              height: '91px',
              backgroundColor: '#00FF9B'
            }}
          />

      </div>
    </section>
  )
}
