import React from "react";
import Gallery from "@/components/Gallery";
import { Bounded } from "@/components/Bounded";

const Works = () => {
  return (
    <Bounded
      className="bg-brand-navy relative h-dvh overflow-hidden text-white bg-texture"
    >
      <div>
        <div className="mt-16 p-5 md:p-18">
          <div>
            <Gallery />
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Works;
