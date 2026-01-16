import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ScrollIndicator() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-none text-white/50"
        >
            <ChevronDown size={32} strokeWidth={1} />
        </motion.div>
    );
}
