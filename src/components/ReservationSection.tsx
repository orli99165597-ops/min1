import { motion } from 'motion/react';
import { Send, PhoneCall, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function ReservationSection() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <section id="reservation" className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-red opacity-10 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1 lg:max-w-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-webtoon text-brand-red mb-6 uppercase">Reservation</h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
                소중한 사람과 함께하는 <br/>
                최고의 고기 파티를 준비해 드립니다.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-4 text-white">
                  <div className="bg-white/10 p-4 rounded-2xl">
                    <PhoneCall size={24} className="text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">전화 예약</h4>
                    <p className="text-gray-400">02-123-4567</p>
                    <p className="text-xs text-brand-red italic mt-1">*당일 예약은 전화를 주시는 것이 빠릅니다.</p>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <div className="flex items-start gap-4 mb-4">
                    <AlertCircle size={20} className="text-brand-red shrink-0 mt-1" />
                    <h4 className="font-bold text-white uppercase tracking-wider">Cancellation Policy</h4>
                  </div>
                  <ul className="text-sm text-gray-400 space-y-2 font-light">
                    <li>• 예약 시간 30분 초과 시 자동 취소될 수 있습니다.</li>
                    <li>• 단체 예약 취소는 최소 1일 전까지 부탁드립니다.</li>
                    <li>• 외부 음식 반입은 정중히 거절하고 있습니다.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex-1">
            <div className="bg-white rounded-[40px] p-8 md:p-12 text-brand-dark shadow-2xl relative">
              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="h-full flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <Send size={40} />
                  </div>
                  <h3 className="text-3xl font-webtoon mb-4">예약 신청 완료!</h3>
                  <p className="text-gray-600">담당자가 확인 후 순차적으로 안내 문자를 발송해 드립니다.</p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="mt-8 text-brand-red font-bold hover:underline"
                  >
                    새로 예약하기
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">예약자 성함</label>
                      <input 
                        required
                        type="text" 
                        placeholder="성함" 
                        className="w-full px-5 py-4 bg-stone-100 border-none rounded-2xl focus:ring-2 focus:ring-brand-red outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">연락처</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="010-0000-0000" 
                        className="w-full px-5 py-4 bg-stone-100 border-none rounded-2xl focus:ring-2 focus:ring-brand-red outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">방문 날짜</label>
                      <input 
                        required
                        type="date" 
                        className="w-full px-5 py-4 bg-stone-100 border-none rounded-2xl focus:ring-2 focus:ring-brand-red outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">인원수</label>
                      <select className="w-full px-5 py-4 bg-stone-100 border-none rounded-2xl focus:ring-2 focus:ring-brand-red outline-none transition-all">
                        <option>1~2명</option>
                        <option>3~4명</option>
                        <option>5~8명 (룸 권장)</option>
                        <option>9명 이상 (전화 문의)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">기타 요청사항</label>
                    <textarea 
                      rows={4}
                      placeholder="알레르기 정보나 특별한 요청사항이 있다면 적어주세요." 
                      className="w-full px-5 py-4 bg-stone-100 border-none rounded-2xl focus:ring-2 focus:ring-brand-red outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <button 
                    disabled={formState === 'submitting'}
                    className="w-full bg-brand-red text-white py-5 rounded-[20px] font-bold text-xl hover:bg-red-700 transition-all shadow-xl shadow-red-500/20 disabled:opacity-50"
                  >
                    {formState === 'submitting' ? '신청 중...' : '온라인 예약 신청하기'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
