import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Image Placeholder with Overlay */}
      <div 
        className="absolute inset-0 z-0 scale-105"
        style={{
          backgroundImage: `url('/src/assets/images/korean_bbq_hero_1780836956156.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.5) contrast(1.1)'
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-brand-red text-white px-4 py-1 rounded-sm font-bold text-sm mb-6 tracking-widest uppercase">
            New Opening
          </span>
          <h1 className="text-5xl md:text-8xl font-webtoon text-white mb-6 leading-tight drop-shadow-2xl">
            진짜 고기는 <br/>
            <span className="text-brand-red">연기로 말한다.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            한 점의 고기가 입안에서 펼쳐지는 완벽한 하모니. <br/>
            연화가(煙火家)에서만 만날 수 있는 최상급 한우의 감동을 전합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#menu" 
              className="group bg-white text-brand-dark px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-gray-100 transition-all hover:scale-105"
            >
              메뉴 둘러보기
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#reservation" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              지금 바로 예약
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-white opacity-50"
      >
        <ChevronDown size={32} />
      </motion.div>

      {/* Decorative Texture Overlays */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-stone-50 to-transparent z-10" />
    </section>
  );
}
