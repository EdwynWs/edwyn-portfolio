"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const coordsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const label = labelRef.current;
    const coords = coordsRef.current;

    if (!cursor || !label || !coords) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let cursorX = mouseX;
    let cursorY = mouseY;

    let animationFrame: number;

    const mouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      coords.innerHTML = `
        X ${String(Math.round(mouseX)).padStart(4, "0")}<br>
        Y ${String(Math.round(mouseY)).padStart(4, "0")}
      `;

      cursor.classList.add("cursor-visible");
    };

    const mouseLeave = () => {
      cursor.classList.remove("cursor-visible");
    };

    const mouseEnter = () => {
      cursor.classList.add("cursor-visible");
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.22;
      cursorY += (mouseY - cursorY) * 0.22;

      cursor.style.transform = `
        translate3d(${cursorX}px, ${cursorY}px, 0)
        translate(-50%, -50%)
      `;

      animationFrame = requestAnimationFrame(animate);
    };

    const interactiveElements = document.querySelectorAll<HTMLElement>(
      "a, button, [data-cursor]"
    );

    const handleInteractiveEnter = (event: Event) => {
      const element = event.currentTarget as HTMLElement;

      cursor.classList.add("cursor-active");

      const customLabel = element.dataset.cursor;

      if (customLabel) {
        label.textContent = customLabel;
      } else if (element.tagName === "A") {
        label.textContent = "OPEN ↗";
      } else {
        label.textContent = "SELECT";
      }
    };

    const handleInteractiveLeave = () => {
      cursor.classList.remove("cursor-active");
      label.textContent = "";
    };

    const handleMouseDown = () => {
      cursor.classList.add("cursor-click");
    };

    const handleMouseUp = () => {
      cursor.classList.remove("cursor-click");
    };

    interactiveElements.forEach((element) => {
      element.addEventListener(
        "mouseenter",
        handleInteractiveEnter
      );

      element.addEventListener(
        "mouseleave",
        handleInteractiveLeave
      );
    });

    window.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseleave", mouseLeave);
    document.addEventListener("mouseenter", mouseEnter);

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseleave", mouseLeave);
      document.removeEventListener("mouseenter", mouseEnter);

      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);

      interactiveElements.forEach((element) => {
        element.removeEventListener(
          "mouseenter",
          handleInteractiveEnter
        );

        element.removeEventListener(
          "mouseleave",
          handleInteractiveLeave
        );
      });
    };
  }, []);

  return (
    <div ref={cursorRef} className="tech-cursor">
      <span className="cursor-corner corner-tl" />
      <span className="cursor-corner corner-tr" />
      <span className="cursor-corner corner-bl" />
      <span className="cursor-corner corner-br" />

      <span className="cursor-cross cross-horizontal" />
      <span className="cursor-cross cross-vertical" />

      <span className="cursor-center" />

      <span ref={labelRef} className="cursor-label" />

      <div ref={coordsRef} className="cursor-coordinates">
        X 0000
        <br />
        Y 0000
      </div>
    </div>
  );
}