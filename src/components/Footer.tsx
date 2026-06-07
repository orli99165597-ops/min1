import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const sitemap = [
    { name: '홈', href: '#home' },
    { name: '메뉴', href: '#menu' },
    { name: '고집', href: '#concept' },
    { name: '점포정보', href: '#shop-info' },
    { name: '공지사항', href: '#news' },
  ];

  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <a href="#home" className="font-webtoon text-3xl text-brand-red tracking-tighter">
              연화가 <span className="text-sm font-sans font-normal opacity-50 block uppercase">Smoke & Fire House</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              진정한 고기의 맛은 정직함에서 옵니다. <br/>
              우리는 오늘도 최상의 육질과 최적의 연기로 기록을 남깁니다.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-brand-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-brand-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-brand-red transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-red uppercase tracking-widest">Sitemap</h4>
            <ul className="space-y-4">
              {sitemap.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-0.5 bg-brand-red group-hover:w-3 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-red uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400 text-sm">
                <Phone size={18} className="shrink-0 text-brand-red" />
                <span>02-123-4567</span>
              </li>
              <li className="flex gap-3 text-gray-400 text-sm">
                <Mail size={18} className="shrink-0 text-brand-red" />
                <span>contact@yeonhwaga.com</span>
              </li>
              <li className="flex gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="shrink-0 text-brand-red" />
                <span>서울시 강남구 고기로 77 연화가 빌딩 1층</span>
              </li>
            </ul>
          </div>

          {/* Opening Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-red uppercase tracking-widest">Hours</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-400 border-b border-white/5 pb-2">
                <span>연중무휴 (월요일 휴무)</span>
                <span className="text-white">17:00 - 23:00</span>
              </div>
              <div className="pt-2 text-gray-500 italic">
                *라스트 오더는 영업 종료 1시간 전입니다.
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs uppercase tracking-tighter">
            © 2026 YEONHWAGA. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] text-gray-600 font-bold uppercase tracking-widest">
             <a href="#" className="hover:text-gray-400">Privacy Policy</a>
             <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
