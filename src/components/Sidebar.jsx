import { Home, Calendar, Coffee, Mic2, Mail } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
    { label: 'Home', icon: Home, index: 0 },
    { label: 'Events', icon: Calendar, index: 1 },
    { label: 'Program', icon: Coffee, index: 2 },
    { label: 'Restaurant', icon: Mic2, index: 3 }, // Icon choice: Mic2 as placeholder or Utensils, but let's stick to existing lucide icons.
    { label: 'Contact', icon: Mail, index: 4 },
];

export default function Sidebar({ activeIndex, onNavigate }) {
    return (
        <aside className="hidden lg:flex flex-col w-36 h-full bg-black/50 backdrop-blur-md border-r border-white/10 z-50 items-center py-8">
            {/* Logo */}
            <div className="mb-12">
                <img src="/images/logo-white.webp" alt="ASH" className="w-16 h-auto" />
            </div>

            {/* Nav Items */}
            <nav className="flex-1 flex flex-col gap-10 justify-center">
                {navItems.map((item) => (
                    <button
                        key={item.label}
                        onClick={() => onNavigate(item.index)}
                        className={clsx(
                            "flex flex-col items-center gap-2 group transition-all duration-300 relative",
                            activeIndex === item.index ? "text-white" : "text-white/40 hover:text-white"
                        )}
                    >
                        <div className={clsx(
                            "p-4 rounded-full transition-all duration-300",
                            activeIndex === item.index ? "bg-white/10" : "bg-transparent group-hover:bg-white/5"
                        )}>
                            <item.icon size={28} strokeWidth={1.5} />
                        </div>
                        <span className={clsx(
                            "text-[10px] font-medium tracking-widest transition-opacity absolute translate-y-12 pointer-events-none uppercase",
                            activeIndex === item.index ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        )}>
                            {item.label}
                        </span>
                    </button>
                ))}
            </nav>

            {/* Bottom Element (optional) */}
            <div className="mt-auto opacity-30">
                <div className="w-[1px] h-12 bg-white"></div>
            </div>
        </aside>
    );
}
