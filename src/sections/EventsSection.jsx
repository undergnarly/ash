import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const events = [
    {
        title: "Eat & Drink at ASH · Enter Nuanu Free",
        image: "/images/01K5DVG7R539N442B5MR7FCS55.webp",
        link: "https://megatix.co.id/events/ash-nuanu-pass?aid=WEBSITE"
    },
    {
        title: "Friday Jazz Nights at ASH Nuanu",
        image: "/images/01KBD1TN1TKGVZ5ZDFDHWA14Z6.webp",
        link: "https://megatix.co.id/events/jazz-at-ash?aid=WEBSITE"
    },
    {
        title: "MIA BOYKA Music Meet",
        image: "/images/01KEWFHDYB7GZRTY7X93A5S814.webp",
        link: "https://megatix.co.id/events/mia-boyka-music-meet?aid=ASHNUANU"
    },
    {
        title: "Hidden World Fairytales",
        image: "/images/01KEPP7YTKHP4YADAQNNDERM1E.webp",
        link: "https://megatix.co.id/events/hidden-world-fairytales-ash?aid=WEBSITE"
    },
    {
        title: "Antoxa MS at Bali",
        image: "/images/01KEWFQ8TZT4EXHE5X2608BVCC.webp",
        link: "https://megatix.in.th/events/antoxa-ms-na-bali?aid=ASH"
    }
];

export default function EventsSection() {
    return (
        <section className="h-dvh w-full snap-start flex flex-col justify-center bg-black relative px-6 lg:px-24">
            <div className="absolute inset-x-0 bottom-0 -z-10 opacity-30">
                <img src="/images/bg-1.svg" alt="" className="w-full h-auto object-cover" />
            </div>

            <div className="space-y-6 lg:space-y-10 w-full max-w-7xl mx-auto">
                <div>
                    <h2 className="text-3xl lg:text-5xl font-bold mb-4">Featured Events</h2>
                    <p className="text-white/70 text-sm lg:text-lg max-w-xl">
                        Big shows, concerts, cabaret and special nights at ASH.<br />
                        Book your tickets below.
                    </p>
                </div>

                <div className="relative group">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={1.2}
                        breakpoints={{
                            640: { slidesPerView: 2.2 },
                            1024: { slidesPerView: 3.5, spaceBetween: 30 }
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        className="overflow-visible"
                        style={{ overflow: 'visible' }}
                    >
                        {events.map((event, index) => (
                            <SwiperSlide key={index} className="transition-transform duration-300 hover:scale-105">
                                <a href={event.link} target="_blank" rel="noopener noreferrer" className="block relative aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-900 shadow-xl border border-white/10 group/card">
                                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <span className="text-sm font-medium">{event.title}</span>
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full pr-4 z-20 text-white/50 hover:text-white hidden lg:block transition-colors">
                        <ChevronLeft size={48} />
                    </button>
                    <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-full pl-4 z-20 text-white/50 hover:text-white hidden lg:block transition-colors">
                        <ChevronRight size={48} />
                    </button>
                </div>
            </div>
        </section>
    );
}
