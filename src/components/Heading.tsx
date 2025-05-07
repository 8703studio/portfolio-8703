import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm" | "xs" | "custom";
  children: React.ReactNode;
  className?: string;
};

export function Heading({
  as: Comp = "h1",
  className,
  children,
  size = "lg",
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
      "font-roboto uppercase",
      size === "custom" && "text[45vw] text-white font-bold",
      size === "xl" && "~text-6xl/9xl", 
      size === "lg" && "~text-5xl/8xl", 
      size === "md" && "~text-4xl/6xl", 
      size === "sm" && "~text-3xl/5xl", 
      size === "xs" && "~text-xl/2xl", 
      className,
      )}
    >
      {children}
    </Comp>
  );
}