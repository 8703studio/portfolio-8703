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
      className="bg-brand-navy relative overflow-hidden h-dvh text-white bg-texture pt-32"
    >
      <Bounded>
        <div className="p-5 md:p-5">
          <div>
            <div> JE SUIS FATIGUEE</div>
            {labelText && <BottomLabel text={labelText} />}
            <div className="absolute bottom-0 right-0 px-6 py-4">
              <div className="text-sm font-light text-black bottom-10 opacity-70 mt-1 select-none">
                hello 
              </div>
            </div>
          </div>
        </div>
      </Bounded>
    </section>
  );
}
