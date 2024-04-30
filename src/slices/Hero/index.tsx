import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section className="h-lvh">
    <PrismicRichText field={slice.primary.heading} />
    <PrismicRichText field={slice.primary.body} />
    </section>
  );
};

export default Hero;
