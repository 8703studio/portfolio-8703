import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Nav`.
 */
export type NavProps = SliceComponentProps<Content.NavSlice>;

/**
 * Component for "Nav" Slices.
 */
const Nav = ({ slice }: NavProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for nav (variation: {slice.variation}) Slices
    </section>
  );
};

export default Nav;
