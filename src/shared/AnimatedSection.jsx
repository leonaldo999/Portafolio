import useInView from "./hooks/useInView";

const animations = {
  up: "animate-fade-in-up",
  down: "animate-fade-in-down",
  left: "animate-fade-in-left",
  right: "animate-fade-in-right",
  scale: "animate-scale-in",
  fade: "animate-fade-in",
};

export default function AnimatedSection({
  children,
  animation = "up",
  delay = 0,
  className = "",
  id,
}) {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id={id}
      ref={ref}
      className={`${className} ${inView ? animations[animation] : "opacity-0"}`}
      style={inView ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </section>
  );
}
