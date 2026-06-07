import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Calendar, CreditCard, Users, CheckCircle2 } from 'lucide-react';

export default function ShopInfoSection() {
  const details = [
    { icon: MapPin, label: "주소", text: "서울시 강남구 고기로 77 연화가 빌딩 1층" },
    { icon: Phone, label: "전화번호", text: "02-123-4567 (클릭 시 발신)", href: "tel:021234567" },
    { icon: Clock, label: "영업시간", text: "17:00 - 23:00 (마지막 주문 22:00)" },
    { icon: Calendar, label: "정기휴일", text: "매주 월요일" },
    { icon: Users, label: "좌석", text: "총 60석 (4인실·8인실 단독 룸 완비)" },
    { icon: CreditCard, label: "결제", text: "제로페이·지역화폐·신용카드 가능" },
  ];

  return (
    <section id="shop-info" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-webtoon text-brand-red mb-4">매장 정보</h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mb-6"></div>
          <p className="text-gray-500">도심 속에서 즐기는 정통 바비큐의 매력을 느껴보세요.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100">
            <h3 className="text-3xl font-webtoon mb-8 text-brand-dark">연화가 <span className="text-brand-red">본점</span></h3>
            
            <div className="space-y-6">
              {details.map((item) => (
                <div key={item.label} className="flex gap-4 items-start group">
                  <div className="mt-1 bg-brand-red/5 p-3 rounded-lg text-brand-red shrink-0 transition-colors group-hover:bg-brand-red group-hover:text-white">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-lg font-medium text-gray-800 hover:text-brand-red transition-colors underline decoration-brand-red/30">{item.text}</a>
                    ) : (
                      <p className="text-lg font-medium text-gray-800">{item.text}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-red-50 rounded-2xl border border-red-100">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 className="text-brand-red" size={20} />
                <span className="font-bold text-brand-red">주차 안내</span>
              </div>
              <p className="text-sm text-red-800/80 leading-relaxed">
                매장 전용 주차장을 무료로 이용하실 수 있습니다 (발렛 서비스 제공). <br/>
                만차 시 인근 공영주차장 이용권을 드립니다.
              </p>
            </div>
          </div>

          <div className="h-full min-h-[500px] bg-stone-200 rounded-[32px] overflow-hidden shadow-inner relative">
            {/* Google Map Mockup */}
            <div className="absolute inset-0 bg-stone-300 animate-pulse flex items-center justify-center">
               <span className="text-stone-500 font-webtoon text-lg uppercase tracking-widest">Map Loading...</span>
            </div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.7537651030!2d127.0276!3d37.4979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15980!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDqsJXfsqU!5e0!3m2!1sko!2skr!4v1" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              className="relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
