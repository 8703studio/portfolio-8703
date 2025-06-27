
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import Form from "@/components/Form";

/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */
const Contact: FC<ContactProps> = ({ slice }) => {
 return (
    <section className="bg-brand-navy relative overflow-hidden text-white bg-texture"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
          <Bounded>
            <div className="container-main">
                <div className="marqueehero">
                    <div className="track">
                        <a href=""><span className="text -twox">Contact.<span className="-orange">Contact.</span></span><span className="text -twox">Contact.<span className="-orange">Contact.</span></span><span className="text -twox">Contact.<span className="-orange">Contact.</span></span>
                    </a></div>
                </div>
                <div className="contact-section m-5">
                    <div className="square-contact flex flex-wrap gap-1">
                        <div className="contact-details m-5 basis-2/5 col text-center">
                            <h2> hello</h2>
                            <p>Vous avez un projet de création ? Contactez-moi, je suis à votre écoute.</p>
                            <span>contact@87-03.org</span><br /><br /><br />
                            <div className="contact-info">
                                <div className="email item-contact">
                                    <h3>horaires</h3>
                                    <span>du lundi au vendredi - </span> <br />
                                    <span>reponse par mail sous 48H</span>
                                </div>
                                <div className="adress item-contact">
                                    <h3>location</h3>
                                    <span>ville</span>
                                </div>
                                <div className="social-media">
                                    <h3>Suivez moi sur mes reseaux:</h3>
                                    <span> <i className="fa fa-github " aria-hidden="true "></i> <i className="fa-brands fa-square-instagram"></i> <i className="fa-brands fa-linkedin"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form col">
                            <div className="wrapper">
                              <Form />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </Bounded>
    </section>
  );
};

export default Contact;
