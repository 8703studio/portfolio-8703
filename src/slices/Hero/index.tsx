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
      className="bg-brand-navy relative h-dvh overflow-hidden text-white bg-texture"
    >
      <div className="hero-section">
        <div className="sticky ">
          <div className="header absolute inset-0 mx-auto mt-24 grid grid-rows-[auto,auto] items-center">
         <div className="relative place-self-center w-full"> 
            <div className=" bg-brand-orange whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
              <Heading className="text-center" as="h6">
                <PrismicText field={slice.primary.heading} />
              </Heading>
            </div>
            </div>
               <div className="tracker absolute left-2/4 top-2/4 -translate-x-2/4 translate-y-2/4 w-9/12 h-3/4 px-0 py-[2em]">
              <div className="emoji absolute left-2/4 top-2/4 -translate-x-2/4 translate-y-2/4 w-[21em] h-[21em] ">
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
        <div className="bg-brand-pink flex relative w-full flex-col items-center justify-between ~gap-2/4 lg:flex-row">
          <div className="max-w-[45ch] font-semibold ~text-lg/xl">
            <PrismicRichText field={slice.primary.body} />
          </div>
          <div className="infos max-w-[50ch] font-semibold ">
            bla bla bla
          </div>
          <PrismicNextLink field={slice.primary.button} />
        </div>
          </div>
        </div>
      </div>
    </Bounded>
    );
  }
}
