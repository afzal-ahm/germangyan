import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@assets/GERMAN_LOGO_1780803337341.png";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
          <motion.img
            src={logo}
            alt="German Gyan"
            className="h-20 w-auto object-contain mb-10"
            initial={{ opacity: 0, y: 16, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          />

          <div className="w-52 h-[3px] bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: "hsl(38 92% 50%)" }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.9, ease: "easeInOut" }}
            />
          </div>

          <motion.p
            className="mt-5 text-xs tracking-[0.18em] uppercase font-semibold"
            style={{ color: "#102c3d", opacity: 0.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Loading…
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
