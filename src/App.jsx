import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Components
import Sidebar from './components/Sidebar';
import MobileHeader from './components/MobileHeader';

// Sections
import HeroSection from './sections/HeroSection';
import EventsSection from './sections/EventsSection';
import DailyProgramSection from './sections/DailyProgramSection';
import RestaurantSection from './sections/RestaurantSection';
import HostYourEventSection from './sections/HostYourEventSection';
// Footer is usually the last slide or distinct. In full page vertical swiper, it's often the last slide.
import FooterSection from './sections/FooterSection';

function App() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavigate = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div className="flex h-dvh w-screen bg-black overflow-hidden font-sans selection:bg-accent selection:text-black">

      {/* Desktop Sidebar */}
      <Sidebar activeIndex={activeIndex} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1 relative h-full w-full">

        {/* Mobile Header */}
        <MobileHeader onMenuClick={() => { /* Toggle mobile menu drawer if needed later */ }} />

        {/* Vertical Swiper */}
        <Swiper
          ref={swiperRef}
          direction={'vertical'}
          slidesPerView={1}
          mousewheel={{
            thresholdDelta: 50,
            sensitivity: 1,
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-custom', // If we want custom dots, or use default
          }}
          modules={[Mousewheel, Pagination]}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="h-full w-full"
          speed={800}
        >
          <SwiperSlide className="h-full w-full overflow-hidden relative">
            <HeroSection />
          </SwiperSlide>

          <SwiperSlide className="h-full w-full overflow-hidden relative">
            <EventsSection />
          </SwiperSlide>

          <SwiperSlide className="h-full w-full overflow-hidden relative">
            <DailyProgramSection />
          </SwiperSlide>

          <SwiperSlide className="h-full w-full overflow-hidden relative">
            <RestaurantSection />
          </SwiperSlide>

          <SwiperSlide className="h-full w-full overflow-hidden relative">
            <HostYourEventSection />
          </SwiperSlide>

          <SwiperSlide className="h-full w-full overflow-hidden relative">
            <FooterSection />
          </SwiperSlide>
        </Swiper>
      </main>
    </div>
  )
}

export default App
