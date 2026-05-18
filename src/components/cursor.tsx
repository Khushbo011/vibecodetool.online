import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [variant, setVariant] = useState<"default" | "hover" | "text">("default");
  const [hidden, setHidden] = useState(true);
  const [label, setLabel] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    let mx = 0, my = 0, rx = 0, ry = 0;
    let raf = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      if (hidden) setHidden(false);
    };
    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t || !t.closest) return;
      const link = t.closest("a, button, [role='button'], [data-cursor]") as HTMLElement | null;
      if (link) {
        const tag = link.getAttribute("data-cursor");
        setLabel(tag ?? "");
        setVariant(tag === "view" || tag === "play" ? "hover" : "hover");
      } else if (t.closest("input, textarea, [contenteditable='true']")) {
        setVariant("text");
        setLabel("");
      } else {
        setVariant("default");
        setLabel("");
      }
    };

    const leave = () => setHidden(true);
    const enter = () => setHidden(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    document.documentElement.classList.add("cursor-none-root");

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
      document.documentElement.classList.remove("cursor-none-root");
    };
  }, [hidden]);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-primary transition-opacity duration-200 ${hidden ? "opacity-0" : "opacity-100"}`}
        style={{ mixBlendMode: "difference" }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full border border-primary/60 backdrop-blur-sm transition-[width,height,background-color,border-radius,opacity] duration-200 ease-out ${hidden ? "opacity-0" : "opacity-100"}`}
        style={{
          width: variant === "hover" ? 56 : variant === "text" ? 6 : 32,
          height: variant === "hover" ? 56 : variant === "text" ? 28 : 32,
          background:
            variant === "hover"
              ? "color-mix(in oklab, var(--primary) 20%, transparent)"
              : variant === "text"
              ? "var(--primary)"
              : "transparent",
          borderRadius: variant === "text" ? 2 : 9999,
        }}
      >
        {variant === "hover" && label && (
          <span className="text-[10px] font-bold uppercase tracking-wider text-foreground">{label}</span>
        )}
      </div>
    </>
  );
}
