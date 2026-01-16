import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const menuImages = [
    '/images/menu-1.webp',
    '/images/menu-2.webp',
    '/images/menu-3.webp',
    '/images/menu-4.webp',
];

export default function RestaurantSection() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <section className="relative h-dvh w-full snap-start flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img src="/images/ash-03.webp" alt="Restaurant Background" className="w-full h-full object-cover brightness-50" />
                {/* Note: User request implied extract specific image, assumed generic or from list. 'food-and-drink.webp' was in extracted list? checking... ash-03 looks good for now or extract if critical. */}
                {/* Re-checking extracted list: 'menu-1.webp' etc are menu. 'bg-2.svg' is bg. 'ash-01' etc are hero. 'Controls.js' etc. */}
                {/* The original site had 'https://ashnuanu.com/images/food-and-drink.webp' inline. I might not have extracted it if it wasn't in the dl list. */}
                {/* I will use one of the ash images for now or a solid color if preferred, but ash-03 is nice. */}
            </div>

            <div className="relative z-10 text-center px-6">
                <h2 className="text-6xl lg:text-[10rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-8 leading-none">
                    RESTAURANT
                </h2>
                <p className="text-xl lg:text-3xl font-light mb-12 max-w-2xl mx-auto">
                    Signature fusion dishes by our chef, only at Ash.
                </p>
                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-amber-400 transition-colors text-lg tracking-wide"
                >
                    VIEW MENU
                </button>
            </div>

            {/* Menu Modal */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 lg:p-12"
                    >
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-6 right-6 lg:top-12 lg:right-12 text-white/50 hover:text-white z-50 p-2"
                        >
                            <X size={48} />
                        </button>

                        <div className="w-full max-w-5xl h-[80vh] relative">
                            <Swiper
                                modules={[Navigation]}
                                navigation={{
                                    nextEl: '.menu-next',
                                    prevEl: '.menu-prev',
                                }}
                                spaceBetween={30}
                                slidesPerView={1}
                                breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
                                className="h-full"
                            >
                                {menuImages.map((img, idx) => (
                                    <SwiperSlide key={idx} className="flex items-center justify-center h-full">
                                        <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl bg-white/5">
                                            <img src={img} alt={`Menu Page ${idx + 1}`} className="w-full h-full object-contain" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <button className="menu-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full pr-4 z-20 text-white/50 hover:text-white hidden lg:block">
                                <ChevronLeft size={48} />
                            </button>
                            <button className="menu-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-full pl-4 z-20 text-white/50 hover:text-white hidden lg:block">
                                <ChevronRight size={48} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
