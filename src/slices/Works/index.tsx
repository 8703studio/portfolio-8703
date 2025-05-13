import { Content } from "@prismicio/client";
import { Bounded } from "@/components/Bounded";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Works`.
 */
export type WorksProps = SliceComponentProps<Content.WorksSlice>;

/**
 * Component for "Works" Slices.
 */
const Works = ({ slice }: WorksProps): JSX.Element => {
  return (

          <Bounded
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className="bg-brand-navy relative h-dvh overflow-hidden text-white bg-texture"
        >
          <h1> Lastest Works</h1>
        </Bounded>
  );
};

export default Works;
