/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import ConceptSection from './components/ConceptSection';
import ShopInfoSection from './components/ShopInfoSection';
import ReservationSection from './components/ReservationSection';
import NewsSection from './components/NewsSection';
import FAQSection from './components/FAQSection';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <MenuSection />
          <ConceptSection />
          <NewsSection />
          <ShopInfoSection />
          <ReservationSection />
          <ReviewsSection />
          <FAQSection />
        </motion.div>
      </main>

      <Footer />

      {/* Floating Action Button for Mobile Reservation */}
      <div className="md:hidden fixed bottom-6 right-6 z-40">
        <a 
          href="#reservation" 
          className="bg-brand-red text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl animate-bounce"
        >
          <span className="font-webtoon text-lg uppercase tracking-tighter">RESERVE</span>
        </a>
      </div>
    </div>
  );
}

