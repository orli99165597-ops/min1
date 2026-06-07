import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

export default function ReviewsSection() {
  const reviews = [
    {
      name: "김*현",
      text: "한우 갈비 마블링이 정말 예술입니다. 입에 넣자마자 녹는다는 말이 진짜네요. 부모님 모시고 오기에 딱 좋습니다.",
      rating: 5
    },
    {
      name: "Lee*****",
      text: "안창살 두께가 장난 아니에요. 육즙이 가득해서 씹는 맛이 일품입니다. 직원분들도 다들 친절하셔서 기분 좋게 식사했습니다.",
      rating: 5
    },
    {
      name: "박*아",
      text: "우설 소금구이 꼭 드셔보세요! 아삭한 식감이 독특하고 정말 맛있어요. 매장 분위기도 깔끔해서 데이트 코스로도 추천합니다.",
      rating: 4
    }
  ];

  return (
    <section className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-webtoon text-brand-red mb-4">고객의 소리</h2>
          <p className="text-gray-500">연화가를 방문해주신 고객님들의 솔직한 후기입니다.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-[32px] shadow-sm relative overflow-hidden"
            >
              <Quote className="absolute -top-2 -right-2 text-stone-100 w-24 h-24 z-0" />
              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-brand-red text-brand-red" />
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-6">"{review.text}"</p>
                <p className="font-bold text-brand-dark">— {review.name} 고객님</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
