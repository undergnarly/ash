import { Instagram, Grip, Mail, MapPin } from 'lucide-react';

const socials = [
    { icon: <Instagram size={24} />, href: "https://instagram.com/ash_nuanu", label: "Instagram" },
    { icon: <Mail size={24} />, href: "mailto:ashmarketing@nuanu.com", label: "Email" },
    { icon: <Grip size={24} />, href: "https://linktr.ee/ash_nuanu", label: "Linktree" },
];

export default function FooterSection() {
    return (
        <section className="h-dvh w-full snap-start flex flex-col bg-zinc-900">
            {/* Map Section - Takes mostly upper part */}
            <div className="flex-grow w-full relative">
                <iframe
                    title="ASH Nuanu Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15779.317508688842!2d115.0977871!3d-8.6121406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2390145880001%3A0xe5493b808200f68d!2sASH%20at%20Nuanu!5e0!3m2!1sen!2sid!4v1701777000000!5m2!1sen!2sid"
                    className="w-full h-full grayscale invert hover:grayscale-0 hover:invert-0 transition-all duration-500"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                {/* Floating Info Card */}
                <div className="absolute top-6 left-6 lg:left-12 bg-black/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 max-w-sm">
                    <h3 className="text-xl font-bold mb-4">Getting to Ash</h3>
                    <ul className="space-y-4 text-sm text-white/70">
                        <li className="flex gap-3">
                            <MapPin className="shrink-0 text-amber-500" />
                            <div>
                                <strong className="text-white block">1. Park at Nuanu Guest Parking</strong>
                                Show your Megatix ticket to enter Nuanu
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <div className="w-6 h-6 rounded-full border-2 border-amber-500 flex items-center justify-center text-[10px] shrink-0 font-bold text-amber-500">2</div>
                            <div>
                                <strong className="text-white block">2. Take Electric Shuttle to Ash</strong>
                                Shuttle run every few minutes or walk 5 minutes
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="bg-black py-12 px-6 border-t border-white/5">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                        {socials.map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white hover:text-black transition-all duration-300"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    <div className="text-center lg:text-right text-white/30 text-xs">
                        <p>© 2024 Ash Nuanu. All rights reserved.</p>
                        <p className="mt-1">Designed by Muvs.dev</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
