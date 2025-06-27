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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-brand-navy relative overflow-hidden text-white bg-texture"
    >
      <Bounded>
        <div className="p-5 md:p-5">
            {/* Grille asymétrique inspirée de jamarea.com */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 bg-white/10 rounded-lg p-6 flex items-end">
              <span className="text-3xl font-bold">JE SUIS FATIGUEE</span>
            </div>
            <div className="col-span-1 row-span-1 bg-white/20 rounded-lg p-4"></div>
            <div className="col-span-1 row-span-2 bg-white/30 rounded-lg p-4"></div>
            <div className="col-span-1 row-span-1 bg-white/10 rounded-lg p-4"></div>
            <div className="col-span-1 row-span-1 bg-white/20 rounded-lg p-4"></div>
            </div>
          {/* Ton contenu principal ici */}
        </div>
      </Bounded>
      <div className="fixed min-h-10 bottom-0 right-0 text-white px-6 py-4 flex justify-between items-center shadow-lg select-none">
        <div className="text-sm font-light text-black bottom-10 opacity-70 mt-1 select-none">hello</div>
        {labelText && <BottomLabel text={labelText} />}
      </div>
    </section>
  );
}
