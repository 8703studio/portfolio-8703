import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FooterHero`.
 */
export type FooterHeroProps = SliceComponentProps<Content.FooterHeroSlice>;

/**
 * Component for "FooterHero" Slices.
 */
const FooterHero = ({ slice }: FooterHeroProps): JSX.Element => {
  return (
    <section>
<div> test</div>
    </section>
  );
};

export default FooterHero;
