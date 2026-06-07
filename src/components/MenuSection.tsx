import { motion } from 'motion/react';
import { MENU_DATA, MenuItem } from '../types';
import { Flame, Star, Coffee, Wine } from 'lucide-react';

export default function MenuSection() {
  const meatItems = MENU_DATA.filter(item => item.category === 'meat');
  const hormoneItems = MENU_DATA.filter(item => item.category === 'hormone');

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }
  };

  return (
    <section id="menu" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-webtoon text-brand-red mb-4">메뉴 안내</h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mb-6"></div>
          <p className="text-gray-500 max-w-lg mx-auto">엄선된 부위만을 고집하여 가장 맛있는 굽기 방법으로 제안합니다.</p>
        </div>

        {/* Meat Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-4">
            <Flame className="text-brand-red" size={28} />
            <h3 className="text-2xl font-bold text-gray-800">우설·안창살·갈비</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {meatItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Hormone Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-4">
            <Star className="text-orange-500" size={28} />
            <h3 className="text-2xl font-bold text-gray-800">호르몬 (내장)</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hormoneItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Side & Drink Placeholder */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-6">
            <div className="bg-stone-100 p-4 rounded-xl text-brand-red">
               <Coffee size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">사이드 메뉴</h4>
              <ul className="text-gray-600 space-y-1">
                <li>냉면 (물/비빔) ····· 7,000원</li>
                <li>된장찌개와 쌀밥 ····· 5,000원</li>
                <li>계란찜 ····· 4,000원</li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-6">
            <div className="bg-stone-100 p-4 rounded-xl text-brand-red">
               <Wine size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">드링크</h4>
              <ul className="text-gray-600 space-y-1">
                <li>생맥주 ····· 5,000원</li>
                <li>소주/막걸리 ····· 4,500원</li>
                <li>에이드/탄산음료 ····· 3,000원</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <motion.div 
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        offscreen: { y: 20, opacity: 0 },
        onscreen: { y: 0, opacity: 1, transition: { duration: 0.5 } }
      }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col group"
    >
      <div className="h-48 bg-stone-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-red opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        {/* Actual images would go here */}
        <div className="flex items-center justify-center h-full text-stone-400 font-webtoon text-xl italic uppercase tracking-wider">
           Premium {item.name}
        </div>
        <div className="absolute top-4 right-4 bg-brand-red text-white py-1 px-3 rounded-full text-sm font-bold shadow-lg">
          {item.price.toLocaleString()}원
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-xl font-bold text-gray-900">{item.name}</h4>
          <span className="text-xs text-gray-400 font-medium">{item.weight} / {item.ingredients}</span>
        </div>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {item.features}
        </p>
        <div className="mt-auto pt-4 border-t border-dashed border-gray-200">
          <p className="text-xs font-bold text-brand-red uppercase tracking-wider mb-1">Recommended Grill</p>
          <p className="text-sm text-brand-dark italic font-medium">"{item.recommendation}"</p>
        </div>
      </div>
    </motion.div>
  );
}
