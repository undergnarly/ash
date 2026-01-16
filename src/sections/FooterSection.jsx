import { Instagram, Grip, Mail, MapPin, Send, MessageCircle } from 'lucide-react';

const socials = [
    { icon: <MessageCircle size={24} />, href: "https://wa.me/yourwa", label: "WhatsApp" },
    { icon: <Instagram size={24} />, href: "https://instagram.com/ash_nuanu", label: "Instagram" },
    { icon: <Grip size={24} />, href: "https://linktr.ee/ash_nuanu", label: "Linktree" },
    { icon: <Send size={24} />, href: "https://t.me/yourtelegram", label: "Telegram" },
    { icon: <Mail size={24} />, href: "mailto:ashmarketing@nuanu.com", label: "Email" },
];

export default function FooterSection() {
    return (
export default function FooterSection() {
        return (
            <section className="h-full w-full flex flex-col items-center justify-center bg-[#eae4dd] text-black relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                    <img src="/images/visionarium-ornament.webp" alt="" className="w-full h-full object-cover" />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center py-12 lg:py-24">
                    {/* Logo & Wings Section */}
                    <div className="relative mb-12 flex flex-col items-center">
                        <div className="relative">
                            <img src="/images/egg-ash.webp" alt="ASH Egg" className="w-48 lg:w-64 z-10 relative" />
                            <img src="/images/v-wing-right.webp" alt="" className="absolute -top-10 -left-20 w-40 lg:w-56 opacity-80 mix-blend-multiply rotate-[15deg]" />
                            <img src="/images/v-wing-right.webp" alt="" className="absolute -top-10 -right-20 w-40 lg:w-56 opacity-80 mix-blend-multiply rotate-[-15deg] scale-x-[-1]" />
                        </div>
                    </div>

                    {/* Social Card */}
                    <div className="bg-black/5 backdrop-blur-sm p-8 rounded-[2.5rem] border border-black/10 w-full max-w-md text-center shadow-xl">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-6">Connect With Us</h3>
                        <div className="grid grid-cols-4 gap-4 mb-6">
                            {socials.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full aspect-square flex items-center justify-center rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <div className="text-black/70">
                                        {social.icon}
                                    </div>
                                </a>
                            ))}
                        </div>
                        <p className="text-sm text-black/60 font-medium">
                            Reach out through any platform or email us directly!
                        </p>
                    </div>

                    {/* Smaller Map Section */}
                    <div className="mt-16 w-full max-w-4xl grid lg:grid-cols-2 gap-8 items-center">
                        <div className="h-64 rounded-3xl overflow-hidden border border-black/10 shadow-lg">
                            <iframe
                                title="ASH Nuanu Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15779.317508688842!2d115.0977871!3d-8.6121406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2390145880001%3A0xe5493b808200f68d!2sASH%20at%20Nuanu!5e0!3m2!1sen!2sid!4v1701777000000!5m2!1sen!2sid"
                                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-xl font-bold">Find Us</h4>
                            <p className="text-sm text-black/70 leading-relaxed font-medium">
                                Located within Nuanu Creative City.<br />
                                Take the electric shuttle from the guest parking direct to our door.
                            </p>
                            <a
                                href="https://maps.app.goo.gl/YourMapLink"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-bold border-b-2 border-black/20 pb-1 hover:border-black transition-all"
                            >
                                Open in Google Maps <MapPin size={16} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-full py-8 px-6 text-center text-black/30 text-xs font-bold relative z-10 border-t border-black/5">
                    <p>© 2024 Ash Nuanu. Made with heart in Bali.</p>
                </div>
            </section>
        );
    }
    );
}
