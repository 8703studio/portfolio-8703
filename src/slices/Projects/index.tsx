import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
/**
 * Props for `Projects`.
 */
export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

/**
 * Component for "Projects" Slices.
 */
const Projects = ({ slice }: ProjectsProps): JSX.Element => {
  return (
    <section className="flex h-dvh bg-blue-600">
      <div className="container max-w-full">
        <div className="flex flex-wrap items-start vh-100">
          <div className="flex-grow max-w-full flex-1 px-4">
            MAIN IMAGE
          </div>
          <div className="flex-grow max-w-full flex-1 m-8 p-6">
          <>{slice.primary.title}</>
          <PrismicRichText field={slice.primary.subtitle} />
            <p>Branding Design + Magento Development + Mobile Website + eNewsletter</p>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <p>Client:Jason Richardson </p>
            <p>Industry:Adventure / Travel </p>
            <p>Services:Design, Art Direction</p>
            <p>Date:January 16th, 2017 </p>
            <p>Website:www.spiceblends.com</p>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" my-7 />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
              passages.
            </p>
          </div>
        </div>
        <div className="info-project">
          blabla
        </div>
      </div>
    </section>

  );
};

export default Projects;
