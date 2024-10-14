import { Content } from "@prismicio/client";
import Image from "next/image";
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
    <section>
      <h1> LASTEST WORKS </h1>

    </section>
  );
};

export default Works;
