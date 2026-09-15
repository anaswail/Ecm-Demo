import vodafoneQatarLogo from "../../assets/customer24.webp";
import arabGulfLogo from "../../assets/customer1.webp";

export interface Testimonial {
  quoteKey: string;
  name: string;
  roleKey: string;
  /** Path to the client's logo asset — swap in the real files once available. */
  logoSrc: string;
  logoAlt: string;
}

// Pulled from the current live site's "What client's say?" section.
// Only two testimonials exist there today — add more here as they come in;
// the slider and layout don't need any changes to support a longer list.
export const testimonials: Testimonial[] = [
  {
    quoteKey: "testimonials.items.itDirector.quote",
    name: "",
    roleKey: "testimonials.items.itDirector.role",
    logoSrc: arabGulfLogo,
    logoAlt: "Client logo",
  },
  {
    quoteKey: "testimonials.items.vodafoneQatar.quote",
    name: "",
    roleKey: "testimonials.items.vodafoneQatar.role",
    logoSrc: vodafoneQatarLogo,
    logoAlt: "Vodafone Qatar",
  },
];
