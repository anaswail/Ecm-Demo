// Modules
import {
  moduleChallenges,
  type ChallengeItem,
  type ModuleChallenges,
} from "./modules/ModulesChallengesData";
import {
  moduleFeatureSections,
  type ModuleFeatureItem,
  type ModuleFeaturesSection,
} from "./modules/ModulesFeaturesData";
import {
  type ModuleLifecycle,
  type LifecycleItem,
  moduleLifecycle,
} from "./modules/ModulesLifeCycleData";
import {
  moduleBenefits,
  type BenefitItem,
  type ModuleBenefitsSection,
} from "./modules/ModulesBenefitsData";
import {
  moduleConnections,
  type IModuleConnectionItem,
  type IModulesConnection,
} from "./modules/ModulesConnectionsData";
import {
  moduleOrder,
  moduleNavItems,
  type ModuleNavItem,
} from "./modules/ModuleNavData";

export type ModuleId = "dms" | "cms" | "mms" | "bpm";

export {
  // modules
  moduleChallenges,
  type ChallengeItem,
  type ModuleChallenges,
  moduleFeatureSections,
  type ModuleFeatureItem,
  type ModuleFeaturesSection,
  moduleLifecycle,
  type ModuleLifecycle,
  type LifecycleItem,
  moduleBenefits,
  type BenefitItem,
  type ModuleBenefitsSection,
  moduleConnections,
  type IModuleConnectionItem,
  type IModulesConnection,
  moduleOrder,
  moduleNavItems,
  type ModuleNavItem,
};
