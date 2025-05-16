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
          <div className="grid w-full grid-cols gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Gallery />
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Works;
