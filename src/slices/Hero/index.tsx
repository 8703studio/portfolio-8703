import { Content } from "@prismicio/client";
import Image from "next/image";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section className="relative w-full">
      <div className="header">
        <h1> 8703 STUDIO</h1>
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

      <div className="windows-text"></div>
      <div className="windows-password"></div>
      <div className="arrow"></div>
    </section>
  );
};

export default Hero;
