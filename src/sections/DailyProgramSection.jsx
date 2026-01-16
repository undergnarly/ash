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
        <section className="h-dvh w-full snap-start flex items-center justify-center bg-zinc-950 px-6 lg:px-24 py-12">
            <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-24 h-full lg:h-auto items-center">

                {/* Visual Side (Left on Desktop) */}
                <div className="hidden lg:flex flex-col gap-6 w-1/2">
                    <img src="/images/daily-base.webp" alt="Happy Hour" className="rounded-3xl shadow-2xl w-full max-w-md ml-auto rotate-1 hover:rotate-0 transition-transform duration-500" />
                    <img src="/images/daily-base-2.webp" alt="Jazz Night" className="rounded-3xl shadow-2xl w-full max-w-md mr-auto -rotate-1 hover:rotate-0 transition-transform duration-500" />
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center h-full">
                    <div className="mb-8">
                        <h2 className="text-4xl lg:text-6xl font-bold mb-4">Daily Program</h2>
                        <p className="text-white/60 text-sm">
                            All regular events start at 7 PM.<br />
                            Free entry. Entry to Nuanu with deposit.
                        </p>
                    </div>

                    <div className="space-y-4 lg:space-y-2 overflow-y-auto lg:overflow-visible pr-2 custom-scrollbar">
                        {schedule.map((item, index) => (
                            <div key={index} className="flex flex-col lg:flex-row lg:items-center py-3 border-b border-white/10 hover:border-white/30 transition-colors group">
                                <span className="text-amber-500 font-semibold w-32 shrink-0">{item.day}</span>
                                <div>
                                    <h3 className="text-lg font-bold group-hover:text-amber-500 transition-colors">{item.title}</h3>
                                    <p className="text-white/50 text-sm">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
