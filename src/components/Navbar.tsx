import { motion } from 'motion/react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '홈', href: '#home' },
    { name: '메뉴', href: '#menu' },
    { name: '고집', href: '#concept' },
    { name: '점포정보', href: '#shop-info' },
    { name: '문의', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <a href="#home" className={`font-webtoon text-2xl tracking-tighter transition-colors ${scrolled ? 'text-brand-red' : 'text-white'}`}>
          연화가 <span className="text-sm font-sans font-normal opacity-70">煙火家</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium transition-colors hover:text-brand-red ${scrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#reservation" 
            className="bg-brand-red text-white px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-red-700 transition-colors shadow-lg"
          >
            <Calendar size={16} />
            예약하기
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 ${scrolled ? 'text-gray-900' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-gray-100 p-4 absolute top-full left-0 w-full shadow-xl"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-800 text-lg font-medium hover:text-brand-red py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#reservation" 
              className="bg-brand-red text-white py-3 rounded-xl text-center font-bold flex justify-center items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <Calendar size={20} />
              온라인 예약
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
