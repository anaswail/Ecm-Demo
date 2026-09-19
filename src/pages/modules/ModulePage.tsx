import Hero from "../../components/hero/Hero";

interface HeroCta {
  labelKey: string;
  onClick?: () => void;
  href?: string;
}

interface IModulePageProps {
  eyebrow: string;
  title: string;
  desc: string;
  image: string;
  primaryBtn: HeroCta;
  secondaryBtn: HeroCta;
}

const ModulePage = ({
  eyebrow,
  title,
  desc,
  image,
  primaryBtn,
  secondaryBtn,
}: IModulePageProps) => {
  return (
    <div>
      <Hero
        eyebrowKey={eyebrow}
        titleKey={{
          mainTitle: title,
        }}
        descKey={desc}
        primaryCta={{ labelKey: primaryBtn.labelKey, href: primaryBtn.href }}
        secondaryCta={{
          labelKey: secondaryBtn.labelKey,
          href: secondaryBtn.href,
        }}
        backgroundImage={image}
      />
    </div>
  );
};

export default ModulePage;
