import vodafoneQatarLogo from "../../assets/customer24.webp";
import arabGulfLogo from "../../assets/customer1.webp";
import qatarCanerSociety from "../../assets/customer5.webp";
import arabPetroleumPipelines from "../../assets/customer21.webp";
import alDawaaPharmacies from "../../assets/customer2.webp";
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
    quoteKey: "home.testimonials.items.itDirector.quote",
    name: "",
    roleKey: "home.testimonials.items.itDirector.role",
    logoSrc: arabGulfLogo,
    logoAlt: "Client logo",
  },
  {
    quoteKey: "home.testimonials.items.vodafoneQatar.quote",
    name: "",
    roleKey: "home.testimonials.items.vodafoneQatar.role",
    logoSrc: vodafoneQatarLogo,
    logoAlt: "Vodafone Qatar",
  },
  {
    quoteKey: "home.testimonials.items.qatarCancerSociety.quote",
    name: "",
    roleKey: "home.testimonials.items.qatarCancerSociety.role",
    logoSrc: qatarCanerSociety,
    logoAlt: "Qatar Cancer Society",
  },
  {
    quoteKey: "home.testimonials.items.arabPetroleumPipelines.quote",
    name: "",
    roleKey: "home.testimonials.items.arabPetroleumPipelines.role",
    logoSrc: arabPetroleumPipelines,
    logoAlt: "arab petroleum pipelines",
  },
  {
    quoteKey: "home.testimonials.items.alDawaaPharmacies.quote",
    name: "",
    roleKey: "home.testimonials.items.alDawaaPharmacies.role",
    logoSrc: alDawaaPharmacies,
    logoAlt: "Al-dawaa pharmacies",
  },
];
