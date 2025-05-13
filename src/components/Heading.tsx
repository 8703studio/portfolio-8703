import clsx from "clsx";
import { Share_Tech } from 'next/font/google';


const sharetech = Share_Tech({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-share-tech',
  weight: '400',
});

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm" | "xs" | "custom";
  children: React.ReactNode;
  className?: string;
};

export function Heading({
  as: Comp = "h6",
  className,
  children,
  size = "custom",
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
      "uppercase",
      size === "custom" && `${sharetech.variable} font-sharetech text-[5rem] text-center text-green-800 font-bold uppercase`,
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