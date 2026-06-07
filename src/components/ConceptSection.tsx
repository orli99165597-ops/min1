import { motion } from 'motion/react';
import { ShieldCheck, Snowflake, Utensils } from 'lucide-react';

export default function ConceptSection() {
  const points = [
    {
      title: "엄선된 산지 매입",
      desc: "매일 아침 경매장에서 가장 상태가 좋은 국내산 소고기만을 선별하여 들여옵니다. 타협 없는 선도가 우리의 고집입니다.",
      icon: ShieldCheck
    },
    {
      title: "장인의 커팅 기술",
      desc: "고기 결에 따른 정교한 칼질로 육질의 부드러움을 극대화합니다. 부위별 최적의 두께와 크기를 연구하여 제공합니다.",
      icon: Utensils
    },
    {
      title: "전용 숙성실 운영",
      desc: "온도와 습도가 철저히 관리되는 숙성실에서 고기 본연의 감칠맛이 살아날 때까지 기다립니다. 시간이 완성하는 풍미를 즐겨보세요.",
      icon: Snowflake
    }
  ];

  return (
    <section id="concept" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-webtoon text-brand-red mb-8">연화가의 고집</h2>
              <p className="text-xl text-brand-dark font-medium mb-12 leading-relaxed">
                "진짜 고기는 연기로 말한다"는 신념 아래, <br/>
                저희는 한 조각의 고기에도 진심을 담습니다.
              </p>

              <div className="space-y-10">
                {points.map((point) => (
                  <div key={point.title} className="flex gap-6">
                    <div className="mt-1 bg-brand-red/5 p-4 rounded-xl text-brand-red shrink-0">
                      <point.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{point.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[40px] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1544022613-e87ec75a754d?q=80&w=1000&auto=format&fit=crop" 
                alt="Chef cutting meat" 
                className="w-full aspect-[4/5] object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-bottom p-10">
                <p className="text-white text-2xl font-webtoon mt-auto">최상의 맛을 향한 장인의 손길</p>
              </div>
            </motion.div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-red opacity-10 rounded-full blur-3xl z-0" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-red-600 opacity-5 rounded-full blur-3xl z-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
