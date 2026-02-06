import { useState } from 'react'
import logo from '../assets/logo.png'

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Programação', href: '#programacao' },
  { label: 'Local', href: '#local' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#010C28]/90 backdrop-blur-sm">
      <div className="container-app">
        <div className="flex items-center justify-between h-24 lg:h-[120px]">
          {/* Logo */}
          <a href="#" className="flex items-center shrink-0 self-end pb-2">
            <img
              src={logo}
              alt="Diel Trends"
              className="h-10 sm:h-12 lg:w-[270px] lg:h-[88px] object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-gray-300 transition-colors text-[22px] font-medium whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Botão ícone */}
            <button className="w-[58px] h-[58px] bg-[#00FF9B] rounded-[7px] flex items-center justify-center hover:bg-[#00e68a] transition-colors shrink-0 cursor-pointer">
              <div className="w-[42px] h-[42px] border-[2.5px] border-black rounded-[7px] flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </button>
            {/* Botão Garantir ingresso */}
            <a
              href="#inscricao"
              className="bg-[#00FF9B] text-black w-[233px] h-[58px] flex items-center justify-center rounded-[7px] font-medium text-xl hover:bg-[#00e68a] transition-colors whitespace-nowrap"
            >
              Garantir ingresso
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-white/10 pt-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors text-base font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-2 mt-4">
                <button className="w-12 h-12 bg-[#00FF9B] rounded-[7px] flex items-center justify-center hover:bg-[#00e68a] transition-colors shrink-0 cursor-pointer">
                  <div className="w-9 h-9 border-[2.5px] border-black rounded-[7px] flex items-center justify-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="black"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </button>
                <a
                  href="#inscricao"
                  className="flex-1 bg-[#00FF9B] text-black px-6 py-3 rounded-[7px] font-medium text-center hover:bg-[#00e68a] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Garantir ingresso
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
