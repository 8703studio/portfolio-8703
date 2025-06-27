import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import Masonry from "@/components/Masonry";

/**
 * Props for `Works`.
 */
export type WorksProps = SliceComponentProps<Content.WorksSlice>;

/**
 * Component for "Works" Slices.
 */
const Works: FC<WorksProps> = ({ slice }) => {
  return (
    <section className="bg-brand-navy relative overflow-hidden text-white flex flex-col min-h-screen"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Bounded>
          <div className="p-5 mt-4 md:p-5">
           <Masonry />
          </div>
      </Bounded>
    </section>
  );
};

export default Works;
