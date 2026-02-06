import fotoEsquerda from '../assets/foto-esquerda.png'
import fotoDireita from '../assets/foto-direita.png'

export default function PerfilPublico() {
  return (
    <section className="w-full" style={{ padding: '80px 0' }}>
      <div className="container-app">
        {/* Container flex para alinhar retângulo e fotos */}
        <div className="hidden lg:flex" style={{ gap: '20px' }}>
          {/* Retângulo com gradiente - apenas texto */}
          <div
            className="perfil-box"
            style={{
              background: 'linear-gradient(241.72deg, #02164B 15.02%, #021E69 84.98%)',
              borderRadius: '23px',
              padding: '40px 50px',
              flex: '1',
              minHeight: '350px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '30px'
            }}
          >
            <h2
              className="text-white font-bold text-3xl xl:text-5xl"
              style={{
                lineHeight: '90%',
                letterSpacing: '-0.07em',
                marginBottom: '40px'
              }}
            >
              Perfil do público
            </h2>
            <p
              className="text-white text-base xl:text-xl"
              style={{
                lineHeight: '125%'
              }}
            >
              O público do Diel Trends reúne cerca de 400 profissionais das maiores empresas do país, incluindo C-levels, diretores, gestores e líderes das áreas de facilities, energia, manutenção e utilities. São{' '}
              <strong className="text-[#00FF9B] font-bold">decisores com impacto direto em grandes operações</strong>, orientados por inovação, eficiência operacional e soluções estratégicas.
            </p>
          </div>

          {/* Fotos */}
          <div style={{ display: 'flex', gap: '15px', flexShrink: 0 }}>
            <img
              src={fotoEsquerda}
              alt="Profissional"
              className="w-[200px] xl:w-[280px]"
              style={{
                height: '350px',
                objectFit: 'cover',
                borderRadius: '23px'
              }}
            />
            <img
              src={fotoDireita}
              alt="Público do evento"
              className="w-[200px] xl:w-[280px]"
              style={{
                height: '350px',
                objectFit: 'cover',
                borderRadius: '23px'
              }}
            />
          </div>
        </div>

        {/* Versão mobile */}
        <div className="lg:hidden">
          <div
            style={{
              background: 'linear-gradient(241.72deg, #02164B 15.02%, #021E69 84.98%)',
              borderRadius: '23px',
              padding: '30px'
            }}
          >
            <h2
              className="text-white font-bold"
              style={{
                fontSize: '32px',
                lineHeight: '90%',
                letterSpacing: '-0.07em',
                marginBottom: '20px'
              }}
            >
              Perfil do público
            </h2>
            <p className="text-white" style={{ fontSize: '16px', lineHeight: '125%' }}>
              O público do Diel Trends reúne cerca de 400 profissionais das maiores empresas do país, incluindo C-levels, diretores, gestores e líderes das áreas de facilities, energia, manutenção e utilities. São{' '}
              <strong className="text-[#00FF9B] font-bold">decisores com impacto direto em grandes operações</strong>, orientados por inovação, eficiência operacional e soluções estratégicas.
            </p>
          </div>
          <div className="flex justify-center" style={{ gap: '15px', marginTop: '30px' }}>
            <img
              src={fotoEsquerda}
              alt="Profissional"
              style={{
                width: '160px',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '12px'
              }}
            />
            <img
              src={fotoDireita}
              alt="Público do evento"
              style={{
                width: '160px',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '12px'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
