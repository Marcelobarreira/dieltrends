
export default function Formatos() {
  return (
    <section className="w-full" style={{ paddingTop: '89px' }}>
      <div className="container-app relative">
        {/* Título */}
        <h2
          className="text-white font-bold"
          style={{
            fontSize: '52px',
            lineHeight: '100%',
            letterSpacing: '-0.07em',
            marginBottom: '40px'
          }}
        >
          Conheça os formatos
          <br />
          e suas <em className="text-[#00FF9B]" style={{ fontStyle: 'italic' }}>temáticas:</em>
        </h2>

        {/* Imagem */}
         <div className="w-full m-auto rounded-[20px] bg-[linear-gradient(150.71deg,rgba(0,153,93,0)_0.01%,#00FF9B_94.12%)] p-[1.7px] lg:h-full">
          <div className="flex h-full w-full flex-col gap-10 rounded-[18px] bg-[linear-gradient(140.71deg,rgba(0,153,93,0)_30%,rgba(0,255,155,0.25)_100%),linear-gradient(#010C28,#010C28)] sm:p-15">
             
                 <h1 className="text-7xl font-bold max-w-[50%] mt-30">Conheça os formatos e suas <em className="text-[#00FF9B]" style={{ fontStyle: 'italic' }}>temáticas:</em></h1> 
              
          </div>
        </div>
          <div
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

      {/* Conector - linha vertical */}
    
    </section>
  )
}
