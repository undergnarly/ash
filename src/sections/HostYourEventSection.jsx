export default function HostYourEventSection() {
    return (
        <section className="relative h-dvh w-full snap-start overflow-hidden flex items-center justify-center">
            {/* Background Video or Image */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover brightness-[0.4]"
                >
                    <source src="https://ashnuanu.com/videos/host-event.mp4" type="video/mp4" />
                    {/* Fallback image if video fails or while loading */}
                    <img src="/images/01JHVNCX9XRZJTMGG0E9N2G41G.webp" alt="Host Event" className="w-full h-full object-cover" />
                </video>
            </div>

            <div className="relative z-10 container mx-auto px-6 lg:px-24 flex flex-col lg:flex-row items-center gap-12 h-full justify-center">
                <div className="text-center lg:text-left lg:w-1/2 space-y-8">
                    <h2 className="text-5xl lg:text-[7rem] font-bold leading-[0.9] text-white">
                        HOST YOUR <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">EVENT</span>
                    </h2>
                    <p className="text-lg lg:text-2xl text-white/80 font-light max-w-xl">
                        Private dinners to corporate events and large parties.
                        Seating for 250+, space for 500+ standing, and premium sound & lighting.
                    </p>
                    <a
                        href="mailto:ashmarketing@nuanu.com"
                        className="inline-block px-8 py-4 bg-white/10 hover:bg-white text-white hover:text-black border border-white/30 backdrop-blur-sm rounded-full transition-all duration-300 font-bold tracking-widest"
                    >
                        CONTACT US
                    </a>
                </div>
            </div>
        </section>
    );
}
