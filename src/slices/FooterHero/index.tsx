import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FooterHero`.
 */
export type FooterHeroProps = SliceComponentProps<Content.FooterHeroSlice>;

/**
 * Component for "FooterHero" Slices.
 */
const FooterHero: FC<FooterHeroProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
    <div className="footer">
      test test
    </div>
    </section>
  );
};

export default FooterHero;
