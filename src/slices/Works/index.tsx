import { Content, isFilled } from "@prismicio/client";
import { Bounded } from "@/components/Bounded";
import { PrismicRichText } from "@prismicio/react";
import { SliceComponentProps } from "@prismicio/react";
import { Heading } from "@/components/Heading";
import { WorksList } from "./WorksList";

/**
 * Props for `Works`.
 */
export type WorksProps = SliceComponentProps<Content.WorksSlice>;

/**
 * Component for "Works" Slices.
 */
const Works = ({ slice }: WorksProps): JSX.Element => {
  return (

          <Bounded
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className="bg-brand-navy relative h-dvh overflow-hidden text-white bg-texture"
        >
          <div>
            <Heading className="text-left">
              <PrismicRichText field={slice.primary.heading} />
              </Heading>
            <div>
              <PrismicRichText field={slice.primary.body} />
            </div>

            <div>{slice.primary.works.map(({projects}) => (
              isFilled.contentRelationship(projects) && (
                <WorksList key={projects.id} id={projects.id} />
              )
            ))}
            </div>
          </div>
          
        </Bounded>
  );
};

export default Works;
