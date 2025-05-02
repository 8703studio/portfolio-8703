import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
  return (
    <section>
        <h1> A PROPOS </h1>
    <div className="container-fluid bg-slate-500">
-----------------------------------------------
      <div className="mx-auto w-full justify-between overflow-hidden bg-white">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="/img/building.jpg"
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
              Company retreats
            </div>
            <a
              href="#"
              className="mt-1 block text-lg font-medium leading-tight text-black hover:underline"
            >
              Incredible accommodation for your team
            </a>
            <p className="mt-2 text-slate-500">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
          </div>
        </div>
      </div>
      <div className='bg-emerald-500 mx-auto w-full justify-between overflow-hidden'>
      <div className='md:flex'>
<div className='image'>
  img
</div>
<div className="p-8">
            <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
              Company retreats
            </div>
            <a
              href="#"
              className="mt-1 block text-lg font-medium leading-tight text-black hover:underline"
            >
              Incredible accommodation for your team
            </a>
            <p className="mt-2 text-slate-500">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
          </div>
          <div className='contact border-l-green-900'> CONTACT</div>
     </div>
      </div>
      ------------------------------------------------------------
      <div className='container-fluid bg-orange-500'>
        HELLO
      </div>
</div>
</section>
  );
};

export default About;
