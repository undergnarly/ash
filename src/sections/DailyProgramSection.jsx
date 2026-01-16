const schedule = [
    { day: "Monday", title: "Epic Movie Night", description: "Watch blockbuster movies on the big screen" },
    { day: "Tuesday", title: "Epic Movie Night", description: "Watch blockbuster movies on the big screen" },
    { day: "Wednesday", title: "Drop Your Deck – DJ Karaoke Night", description: "Sing your heart out with DJ beats" },
    { day: "Thursday", title: "Karaoke Night", description: "Show off your vocal skills" },
    { day: "Friday", title: "Jazz Night", description: "Smooth jazz vibes and live music" },
    { day: "Saturday", title: "DJ Vibes", description: "Dance to the best beats and music" },
    { day: "Sunday", title: "Epic Movie Night", description: "Watch blockbuster movies on the big screen" }
];

export default function DailyProgramSection() {
    return (
        <section className="h-full w-full flex items-center justify-center bg-zinc-950 px-4 lg:px-24 py-12 lg:py-0 overflow-hidden relative">
            {/* Mobile Navbar Spacer */}
            <div className="absolute top-0 left-0 w-full h-20 lg:hidden pointer-events-none" />

            <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-6 lg:gap-24 h-full lg:h-auto items-center justify-center pt-8 lg:pt-0">

                {/* Visual Side (Left on Desktop) */}
                <div className="hidden lg:flex flex-col gap-6 w-1/2">
                    <img src="/images/daily-base.webp" alt="Happy Hour" className="rounded-3xl shadow-2xl w-full max-w-md ml-auto rotate-1 hover:rotate-0 transition-transform duration-500" />
                    <img src="/images/daily-base-2.webp" alt="Jazz Night" className="rounded-3xl shadow-2xl w-full max-w-md mr-auto -rotate-1 hover:rotate-0 transition-transform duration-500" />
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center h-full max-h-[85vh] lg:max-h-none">
                    <div className="mb-2 lg:mb-8 text-center lg:text-left shrink-0">
                        <h2 className="text-2xl lg:text-6xl font-bold mb-2 lg:mb-4">Daily Program</h2>
                        <p className="text-white/60 text-xs lg:text-sm">
                            Starts at 7 PM. Free entry.
                        </p>
                    </div>

                    <div className="flex-1 overflow-y-auto lg:overflow-visible pr-1 custom-scrollbar space-y-2 lg:space-y-2">
                        {schedule.map((item, index) => (
                            <div key={index} className="flex flex-col lg:flex-row lg:items-center py-2 lg:py-3 border-b border-white/10 hover:border-white/30 transition-colors group">
                                <span className="text-amber-500 font-semibold text-sm lg:text-base w-32 shrink-0">{item.day}</span>
                                <div>
                                    <h3 className="text-base lg:text-lg font-bold group-hover:text-amber-500 transition-colors">{item.title}</h3>
                                    <p className="text-white/50 text-xs lg:text-sm leading-tight">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
