import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const heroImages = [
    '/images/ash-01.webp',
    '/images/ash-02.webp',
    '/images/ash-03.webp',
    '/images/ash-04.webp',
    '/images/ash-05.webp',
    '/images/ash-06.webp',
];

export default function HeroSection() {
    return (
        <section className="relative h-dvh w-full snap-start overflow-hidden">
            {/* Background Swiper */}
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                className="absolute inset-0 h-full w-full z-0"
            >
                {heroImages.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img src={img} alt={`Hero ${index + 1}`} className="h-full w-full object-cover brightness-75" />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Bottom Shade */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-1 pointer-events-none" />

            {/* Overlay Content */}
            <div className="absolute inset-0 z-10 flex flex-col justify-end lg:justify-between p-6 lg:p-12 pointer-events-none">
                {/* Top Logos */}
                <div className="hidden lg:flex items-start gap-4 lg:gap-8 pt-4 lg:pt-8 pointer-events-auto">
                    <img src="/images/logo-white.webp" alt="ASH Logo" className="w-24 lg:w-32 object-contain" />
                    <img src="/images/nuanu-logo.svg" alt="Nuanu Logo" className="w-20 lg:w-28 object-contain" />
                </div>

                {/* Bottom Content (Title + Tagline) */}
                <div className="flex flex-col items-start pb-12 lg:pb-20 lg:pl-12 pointer-events-auto max-w-4xl">
                    <h1 className="text-[3rem] font-medium tracking-tight leading-tight text-white mb-2">
                        Ash Nuanu: Events & Fusion Dining
                    </h1>
                    <div className="max-w-[585px] drop-shadow-lg">
                        <p className="text-white/90 font-normal text-base lg:text-xl leading-relaxed">
                            A unique space where culture, nature, and innovation thrive together, blending divine inspiration with harmonious living in the heart of Nuanu.
                        </p>
                    </div>
                </div>
            </div>

            {/* Decorative elements - Wings (Optional, adding for fidelity) */}
            <img src="/images/wing-right.webp" alt="" className="absolute top-0 left-0 w-1/2 lg:w-auto -translate-y-1/4 -translate-x-1/4 opacity-80 pointer-events-none z-10 mix-blend-screen" />
        </section>
    );
}
