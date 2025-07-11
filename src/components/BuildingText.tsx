import { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimate } from "motion/react";

const buildingWhat = ["fun", "coolness", "magic", "needings"];

// Funzione helper per misurare il testo
const measureTextWidth = (text: string) => {
  const measureSpan = document.createElement("span");
  measureSpan.style.position = "absolute";
  measureSpan.style.visibility = "hidden";
  measureSpan.style.height = "auto";
  measureSpan.style.width = "auto";
  measureSpan.style.whiteSpace = "nowrap";
  measureSpan.style.fontSize = "1em"; // Assumendo la stessa dimensione del font
  measureSpan.style.fontWeight = "500"; // font-medium
  measureSpan.innerText = text;
  document.body.appendChild(measureSpan);
  const width = measureSpan.offsetWidth;
  document.body.removeChild(measureSpan);
  return width;
};

export default function BuildingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scope, animate] = useAnimate();

  // Imposta la larghezza iniziale
  useEffect(() => {
    if (scope.current) {
      scope.current.style.width = `${measureTextWidth(buildingWhat[0])}px`;
    }
  }, [scope]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % buildingWhat.length;
      const newWidth = measureTextWidth(buildingWhat[nextIndex]);

      // Anima la larghezza del contenitore
      animate(
        scope.current,
        { width: newWidth },
        { duration: 0.4, ease: "easeInOut" }
      );

      // Aggiorna l'indice per cambiare la parola
      setCurrentIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, animate, scope]);

  return (
    <motion.span
      ref={scope}
      style={{
        display: "inline-block",
        verticalAlign: "text-bottom", // Modificato da "bottom"
        height: "21.5px",
        position: "relative",
        zIndex: 0,
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{
            y: { duration: 0.4, ease: "easeInOut" },
            opacity: { duration: 0.3, ease: "easeInOut" },
          }}
          style={{
            display: "inline-block",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {buildingWhat[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}
