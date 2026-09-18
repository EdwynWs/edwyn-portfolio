"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percentage =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      setProgress(percentage);
    };

    window.addEventListener("scroll", updateScroll);

    updateScroll();

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <div className="scroll-progress-container">
      <div
        className="scroll-progress-bar"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}