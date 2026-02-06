export default function CaseDoMercado() {
  return (
    <section className="w-full relative">
      {/* Conector */}
      <div
        style={{
          position: 'absolute',
          left: '69%',
          top: '-91px',
          transform: 'translateX(-50%)',
          width: '1px',
          height: '91px',
          backgroundColor: '#00FF9B'
        }}
      />

      <div className="container-app">
        {/* Wrapper com gradiente de borda */}
        <div
          className="w-full h-[600px] lg:h-[900px] rounded-[20px] p-[2.53px]"
          style={{
            background: 'linear-gradient(117.29deg, rgba(0, 153, 93, 0) 1.48%, #00FF9B 94.12%)'
          }}
        >
          {/* Container interno */}
          <div
            className="w-full h-full rounded-[18px]"
            style={{ backgroundColor: '#010C28' }}
          >
            {/* Conteúdo será adicionado depois */}
          </div>
        </div>
      </div>
    </section>
  )
}
