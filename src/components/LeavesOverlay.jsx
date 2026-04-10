import { motion } from "framer-motion";
import { useMemo } from "react";

export default function LeavesOverlay() {
  const leaves = useMemo(
    () =>
      Array.from({ length: 10 }, (_, index) => ({
        id: index,
        size: 10 + Math.random() * 16,
        left: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 10 + Math.random() * 6,
        rotate: Math.random() * 180,
        sway: 20 + Math.random() * 30,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 hidden md:block">
      {leaves.map((leaf) => (
        <motion.span
          key={leaf.id}
          className="absolute top-[-10%] rounded-full bg-gradient-to-br from-amber-200/70 to-amber-500/40 blur-[0.5px]"
          style={{
            left: `${leaf.left}%`,
            width: `${leaf.size}px`,
            height: `${leaf.size * 1.3}px`,
            borderRadius: "60% 40% 50% 50%",
          }}
          animate={{
            y: ["-10%", "110%"],
            x: [0, leaf.sway, -leaf.sway],
            rotate: [leaf.rotate, leaf.rotate + 160],
            opacity: [0, 0.6, 0.4, 0],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
