import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 *
 */
export default async function Hero({ slice }: HeroProps) {
  {
    return (
      <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-brand-green relative h-dvh overflow-hidden text-white bg-texture"
    >

      <div className="hero-section">
        <div className="sticky">
          <div className="header absolute inset-0 mx-auto mt-24 grid max-w-6xl grid-rows-[1fr,auto] place-items-end px-6 ~py-10/16">
          <Heading size="custom" className="relative max-w-2xl place-self-center">
          <PrismicText field={slice.primary.heading} />
        </Heading>
        <div className="flex relative w-full flex-col items-center justify-between ~gap-2/4 lg:flex-row">
          <div className="max-w-[45ch] font-semibold ~text-lg/xl">
            <PrismicRichText field={slice.primary.body} />
          </div>
          <div className="infos max-w-[50ch] font-semibold ">
            bla bla bla
          </div>
          <PrismicNextLink field={slice.primary.button} />
        </div>
          </div>
          <div className="tracker">
              <div className="emoji">
                <div className="emoji-face">
                  <div className="eyes">
                    <img src="" alt="" />
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="mouth-wrapper">
                  <div className="mouth"></div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </Bounded>
    );
  }
}
