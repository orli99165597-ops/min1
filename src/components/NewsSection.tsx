import { motion } from 'motion/react';
import { Newspaper, BellRing, Tag } from 'lucide-react';

export default function NewsSection() {
  const news = [
    {
      id: 1,
      tag: '신메뉴',
      title: '여름 한정! 열무 비빔국수 출시',
      date: '2026.06.01',
      desc: '고소한 고기와 찰떡궁합, 시원하고 매콤한 열무 비빔국수를 만나보세요.'
    },
    {
      id: 2,
      tag: '이벤트',
      title: '개업 기념 소주 1+1 행사 진행 중',
      date: '2026.05.25',
      desc: '6월 한 달간 평일 방문 고객님께 소주 1병 주문 시 1병을 더 드립니다.'
    },
    {
      id: 3,
      tag: '공지',
      title: '6월 정기 휴무일 안내',
      date: '2026.05.20',
      desc: '매주 월요일 정기 휴무이며, 공휴일 정상 영업합니다.'
    }
  ];

  return (
    <section id="news" className="py-24 bg-stone-50 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-webtoon text-brand-dark">공지사항 & 캠페인</h2>
            <p className="text-gray-500 mt-2">연화가의 새로운 소식을 가장 먼저 확인하세요.</p>
          </div>
          <a href="#" className="hidden md:block text-brand-red font-bold hover:underline">전체보기 +</a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item) => (
            <motion.div 
              key={item.id}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-brand-red/10 text-brand-red text-[10px] font-bold px-2 py-1 rounded uppercase tracking-tighter">
                  {item.tag}
                </span>
                <span className="text-[10px] text-gray-400 font-medium">{item.date}</span>
              </div>
              <h4 className="text-xl font-bold mb-3 line-clamp-1">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
