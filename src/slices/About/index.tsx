import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About: FC<AboutProps> = ({ slice }) => {
 return (
    <section className="bg-brand-navy relative pt-16 overflow-hidden text-white bg-texture"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
          <Bounded
    >
       <div className="p-5 md:p-5">
          <div>
            test
          </div>
        </div>
    </Bounded>
    </section>
  );
};

export default About;