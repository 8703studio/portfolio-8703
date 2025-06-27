
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import FooterMain from "@/components/FooterMain";

/**
 * Props for `Footer`.
 */
export type FooterProps = SliceComponentProps<Content.FooterSlice>;


/**
 * Component for "Footer" Slices.
 */

export default async function Footer({ slice }: FooterProps) {{

  return (
    <section 
          data-slice-type={slice?.slice_type}
      data-slice-variation={slice.variation}
    >
        <div className="p-5 md:p-5">
        <FooterMain />
        </div>
        {/* Additional content can be added here if needed */}
      </section>
  );
};
};