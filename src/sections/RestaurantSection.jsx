import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const menuImages = [
    '/images/menu-1.webp',
    '/images/menu-2.webp',
    '/images/menu-3.webp',
    '/images/menu-4.webp',
];

export default function RestaurantSection() {
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const openLightbox = (index) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

    return (
        <section className="relative h-full w-full flex flex-col items-center justify-center overflow-hidden bg-black/90">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img src="/images/ash-03.webp" alt="Restaurant Background" className="w-full h-full object-cover brightness-[0.3] blur-sm scale-110" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-24 flex flex-col items-center justify-center h-full pt-16 lg:pt-0">
                <div className="text-center mb-8 lg:mb-12">
                    <h2 className="text-5xl lg:text-[8rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-4 lg:mb-8 leading-none">
                        RESTAURANT
                    </h2>
                    <p className="text-lg lg:text-2xl font-light max-w-2xl mx-auto text-white/80">
                        Signature fusion dishes by our chef.
                    </p>
                </div>

                {/* Inline Gallery */}
                <div className="w-full max-w-4xl relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={15}
                        slidesPerView={1.5}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 2.5, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 30, centeredSlides: false }
                        }}
                        className="w-full py-4 px-2"
                    >
                        {menuImages.map((img, idx) => (
                            <SwiperSlide key={idx} className="group cursor-pointer" onClick={() => openLightbox(idx)}>
                                <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg border border-white/10 transition-transform duration-300 group-hover:-translate-y-2">
                                    <img src={img} alt={`Menu ${idx + 1}`} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <ZoomIn className="text-white w-8 h-8" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Fullscreen Lightbox */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-4"
                    >
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 text-white/70 hover:text-white z-50 p-2"
                        >
                            <X size={40} />
                        </button>

                        <div className="w-full h-full flex items-center justify-center">
                            <Swiper
                                modules={[Navigation]}
                                initialSlide={lightboxIndex}
                                navigation={{
                                    nextEl: '.lightbox-next',
                                    prevEl: '.lightbox-prev',
                                }}
                                spaceBetween={40}
                                slidesPerView={1}
                                className="h-full w-full"
                            >
                                {menuImages.map((img, idx) => (
                                    <SwiperSlide key={idx} className="flex items-center justify-center h-full p-4">
                                        <img src={img} alt={`Menu Full ${idx + 1}`} className="max-w-full max-h-full object-contain drop-shadow-2xl" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <button className="lightbox-prev absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 z-50 text-white/50 hover:text-white transition-colors">
                                <ChevronLeft size={48} />
                            </button>
                            <button className="lightbox-next absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 z-50 text-white/50 hover:text-white transition-colors">
                                <ChevronRight size={48} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
