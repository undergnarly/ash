import { Menu } from 'lucide-react';

export default function MobileHeader({ onMenuClick }) {
    return (
        <header className="lg:hidden absolute top-0 left-0 w-full z-50 flex justify-between items-center p-6 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
            <img src="/images/logo-white.webp" alt="ASH" className="w-16 pointer-events-auto" />
            <button
                onClick={onMenuClick}
                className="p-2 text-white bg-black/50 backdrop-blur rounded-full pointer-events-auto active:scale-95 transition-transform"
            >
                <Menu size={28} />
            </button>
        </header>
    );
}
