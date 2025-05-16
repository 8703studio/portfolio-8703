import { Bounded } from "@/components/Bounded";
import BottomLabel from "@/components/BottomLabel";
import { createClient } from "@/prismicio";
import type { SliceComponentProps } from "@prismicio/react";
import type { Content } from "@prismicio/client";
import { asText } from "@prismicio/helpers";

// dans ta fonction Hero

type HeroProps = SliceComponentProps<Content.HeroSlice>;



export default async function Hero({ slice }: HeroProps) {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const labelText = asText(settings.data.bottom_label_text);

  return (
<Bounded
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
    className="bg-brand-navy relative h-dvh overflow-hidden text-white bg-texture"
  >
    {labelText && <BottomLabel text={labelText} />}
    <div className="absolute bottom-0 right-0 px-6 py-4">
      <div className="text-sm font-light text-black opacity-70 mt-1 select-none">
        hello 
      </div>
    </div>
  </Bounded>
  );
}
