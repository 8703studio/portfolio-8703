import { FC } from "react";
import { Content } from "@prismicio/client";
import { Bounded } from "@/components/Bounded";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About: FC<AboutProps> = ({ slice }) => {
  return (

          <Bounded
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className="bg-brand-navy relative h-dvh overflow-hidden text-white bg-texture"
        >
          <div> Test</div>
        </Bounded>
  );
};

export default About;
