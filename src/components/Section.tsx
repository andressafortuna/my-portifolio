import { useState } from "react";
import { motion } from "framer-motion";

interface SectionProps {
    children: React.ReactNode;
    refValue?: React.RefObject<HTMLDivElement | null>;
}

export const Section = ({ children, refValue }: SectionProps) => {
    const [isVisible, setIsVisible] = useState(false);

    const variants = {
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        hidden: { opacity: 0, y: 50, transition: { duration: 0.6 } },
    };

    return (
        <motion.div
            ref={refValue}
            variants={variants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            onViewportEnter={() => setIsVisible(true)}
            onViewportLeave={() => setIsVisible(false)}
            viewport={{ amount: 0.3 }}
        >
            {children}
        </motion.div>
    );
};
