import Hero from "../../components/hero/Hero";

import type {
  ModuleChallenges as ModuleChallengesData,
  ModuleLifecycle as ModuleLifecycleData,
  ModuleFeaturesSection,
  ModuleBenefitsSection,
  IModulesConnection,
  ModuleId,
} from "../../data";
import ModuleChallenges from "./components/challanges/ModuleChallenges";
import ModuleBenefits from "./components/moduleBenefites/ModuleBenefits";
import ModuleFeatures from "./components/moduleFeatures/ModuleFeatures";
import ModuleLifecycle from "./components/modulesLifeCycle/ModuleLifeCycle";
import ModuleConnections from "./components/modulesConnections/ModuleConnections";
import ModulesNav from "./components/modulesConnections/ModulesNav";

interface HeroCta {
  labelKey: string;
  onClick?: () => void;
  href?: string;
}

interface IModulePageProps {
  moduleId: ModuleId;
  eyebrow: string;
  title: string;
  desc: string;
  image: string;
  primaryBtn: HeroCta;
  secondaryBtn: HeroCta;
  /** Centralized per-module data — see data/index.ts and data/modules/* */
  challenges: ModuleChallengesData;
  lifecycle: ModuleLifecycleData;
  features: ModuleFeaturesSection;
  benefits: ModuleBenefitsSection;
  connections: IModulesConnection;
}

const ModulePage = ({
  moduleId,
  eyebrow,
  title,
  desc,
  image,
  primaryBtn,
  secondaryBtn,
  challenges,
  lifecycle,
  features,
  benefits,
  connections,
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
        visual={image}
      />
      <ModuleChallenges {...challenges} />
      <ModuleLifecycle {...lifecycle} />
      <ModuleFeatures {...features} fallbackImage={image} />
      <ModuleBenefits {...benefits} />
      <ModuleConnections {...connections} moduleId={moduleId} />
      <ModulesNav currentId={moduleId} />
    </div>
  );
};

export default ModulePage;
