import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Biography`.
 */
export type BiographyProps = SliceComponentProps<Content.BiographySlice>;

/**
 * Component for "Biography" Slices.
 */
// eslint-disable-next-line no-empty-pattern
const Biography = ({ slice }: BiographyProps): JSX.Element => {
  return (
    <section>
      <div className="max-w mx-auto overflow-hidden bg-green-400">
        <div className="flew-row flex">
<div>
  <ul>
    {slice.primary.skills.map((item) => (
      <li key={item.listofskills}>{item.listofskills}</li>
    ))}
  </ul>
</div>
          <div className="w-full bg-fuchsia-700">
            <h3>Ce que je fais</h3>
            <ul>
              <li>Identité visuelle</li>
              <li>Charte graphique</li>
              <li>PAO, Print et Edition</li>
              <li>Packaging</li>
              <li>Developpement web</li>
              <li>Webdesign</li>
            </ul>

          </div>
          <div className="p-8">
            <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
              Hey! moi cest Emilie, Designer Graphique & developpeuse web.
            </div>
            Skills & Softwares Photoshop Illustrator Indesign Figma HTML 5 / CSS
            3 RUBY
          </div>
          <div className='bg-teal-950'>contact</div>
        </div>
      </div>


      
        <div className="flex flew-row">
          <div>
            <img className="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture" />
          </div>
         <div className="p-8">
         <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Hey! moi cest Emilie, Designer Graphique & developpeuse web.</div>
<p>👩🏻‍🦰 Originaire de Marseille, je viens juste de finir une formation de développement web au Wagon Diplômée dun BTS Communication, passionnée de graphisme et de développement depuis mon adolescence, je me suis spécialisée dans ce domaine du design graphique et web. Mon parcours diversifié ma permis de développer mes compétences et de mettre ma créativité au service de multiples projets</p>
            <p>🚀 Ma mission est dapporter une réponse personnalisée aux problématiques rencontrées. Je souhaite apporté mon expertise au client en le conseillant dans la transmission de son message au travers de diverses prestations de communication visuelle (print, illustration, identité visuelle) et web (webdesign, développement de sites statiques et dynamiques). J’accorde une grande importance à la création de visuels grâce à une esthétique originale.</p>
            <p>🎨 Je me tiens à votre disposition pour tous projets ou collaborations artistiques, je peux travailler en remote ou me déplacer dans vos locaux si necessaire (jaime bien decouvrir de nouveaux endroits)</p>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
          </div>
        </div>
    </section>
  );
};

export default Biography;
