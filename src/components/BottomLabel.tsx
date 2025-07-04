import React from "react";

type BottomLabelProps = {
  text?: string; // optionnel, si tu mets un fallback
};

const BottomLabel = ({ text = "" }: BottomLabelProps): JSX.Element => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-[14vh] overflow-hidden pointer-events-none z-10  sm:bottom-0 sm:left-0">
      <div className="text-[18vw] font-black leading-[0.85] text-black whitespace-nowrap select-none opacity-10 pl-4">
        {text}
      </div>
    </div>
  );
};

export default BottomLabel;

