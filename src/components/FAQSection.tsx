import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const faqs = [
    {
      q: "예약 없이도 방문 가능한가요?",
      a: "네, 예약 없이도 방문하실 수 있습니다. 하지만 주말이나 피크 타임(18:30~20:30)에는 대기 시간이 발생할 수 있으므로 가급적 예약을 추천드립니다."
    },
    {
      q: "아이와 함께 가고 싶습니다. 아기 의자가 있나요?",
      a: "네, 유아용 의자와 식기류가 준비되어 있습니다. 룸 예약을 하시면 아이와 함께 더욱 편안하게 식사하실 수 있습니다."
    },
    {
      q: "전체 대관도 가능한가요?",
      a: "네, 회식이나 대규모 파티를 위한 전체 대관을 지원합니다. 최소 인원 및 금액 등 상세한 상담은 전화(02-123-4567)로 문의 부탁드립니다."
    },
    {
      q: "주차 지원은 어떻게 되나요?",
      a: "건물 뒤편 전용 주차장에 발렛 파킹이 가능하며, 2시간 무료 이용 하실 수 있습니다."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <HelpCircle size={40} className="mx-auto text-brand-red opacity-20 mb-4" />
          <h2 className="text-4xl font-webtoon text-brand-dark mb-4 uppercase">FAQ</h2>
          <p className="text-gray-500">자주 묻는 질문들을 모았습니다.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string, a: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-stone-200 rounded-2xl overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-stone-50 transition-colors"
      >
        <span className="font-bold text-lg text-brand-dark">{q}</span>
        <ChevronDown 
          className={`text-stone-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          size={20} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 pt-0 text-gray-600 leading-relaxed bg-white border-t border-stone-100">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
