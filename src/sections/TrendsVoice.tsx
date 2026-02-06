import cieloImg from '../assets/cielo.png'

export default function TrendsVoice() {
  return (
    <section className="w-full" style={{ padding: '89px 0' }}>
      <div className="container-app">
        <div className="w-full">
          <img
            src={cieloImg}
            alt="César Cielo - Trends Voice"
            className="w-full h-auto object-contain"
            style={{ maxWidth: '100%' }}
          />
        </div>
      </div>
    </section>
  )
}
