import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `DownloadSection`.
 */
export type DownloadSectionProps =
  SliceComponentProps<Content.DownloadSectionSlice>;

/**
 * Component for "DownloadSection" Slices.
 */
const DownloadSection = ({ slice }: DownloadSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for download_section (variation: {slice.variation})
      Slices
    </section>
  );
};

export default DownloadSection;
