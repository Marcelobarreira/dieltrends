import imgFormatos from '../assets/img-01.png'

export default function Formatos() {
  return (
    <section className="w-full relative" style={{ paddingTop: '80px' }}>
      <div className="container-app">
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
        <div className="w-full">
          <img
            src={imgFormatos}
            alt="Formatos e temáticas"
            className="w-full h-auto object-contain"
            style={{ maxWidth: '100%' }}
          />
        </div>

      </div>

      {/* Conector - linha vertical */}
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
    </section>
  )
}
