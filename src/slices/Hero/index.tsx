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
    <section className="flex h-dvh bg-blue-600">
      <div className="container max-w-7xl">
        <div className="py-4 px-8">
          <div>
          <PrismicRichText field={slice.primary.heading}  />
          <PrismicRichText field={slice.primary.body} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
