import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 *
 */
export default async function Hero({ slice }: HeroProps) {{

  return (
<Bounded>
    <section className="relative w-full"
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
  >
 <div className="p-4">
      <div className="header">
        <h1> <PrismicRichText field={slice.primary.heading} /></h1>
      </div>

      <div className="tracker">
        <div className="emoji">
          <div className="emoji-face">
            <div className="eyes">

            </div>
          </div>
          <div className="mouth-wrapper">
            <div className="mouth"></div>
          </div>
        </div>
      </div>

      <div className="windows-text"></div>
      <div className="windows-password"></div>
      <div className="arrow"></div>
      </div>
  </section>
  </Bounded>
  );
};
}
