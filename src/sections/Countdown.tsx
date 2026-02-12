import { useState, useEffect } from 'react'
import losaImg from '../assets/losa.png'
import losa2Img from '../assets/losa2.png'
import losa4Img from '../assets/losa4.png'

// Data do evento: 14 de maio de 2026, 08h
const EVENT_DATE = new Date('2026-05-14T08:00:00').getTime()

interface TimeLeft {
  dias: number
  horas: number
  minutos: number
  segundos: number
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = EVENT_DATE - now

      if (difference > 0) {
        setTimeLeft({
          dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
          horas: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutos: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          segundos: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    // calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatNumber = (num: number) => num.toString().padStart(2, '0')

  const countdownItems = [
    { value: timeLeft.dias, label: 'dias', img: losaImg },
    { value: timeLeft.horas, label: 'horas', img: losa2Img },
    { value: timeLeft.minutos, label: 'minutos', img: losaImg },
    { value: timeLeft.segundos, label: 'segundos', img: losa4Img },
  ]

  return (
    <section className="w-full py-12 sm:py-16 lg:py-24">
      <div className="container-app">
        {/* Título */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-white mt-6 mb-8 sm:mt-8 sm:mb-10 lg:mt-[50px] lg:mb-[60px]">
          Estamos contando os <em className="italic text-[#00FF9B]">minutos!</em>
        </h2>

        {/* Losangos do contador */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 lg:gap-[100px]">
          {countdownItems.map((item, index) => (
            <div key={index} className="relative w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[220px] lg:h-[220px]">
              <img src={item.img} alt="" className="w-full h-full object-contain" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white">
                  {formatNumber(item.value)}
                </span>
                <span className="text-xs sm:text-sm lg:text-lg text-white mt-1">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
