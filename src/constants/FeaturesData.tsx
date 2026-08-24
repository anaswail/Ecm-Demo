import {
  ActivityIcon,
  ArchiveIcon,
  BadgeCheckIcon,
  BellIcon,
  CalendarDaysIcon,
  CalendarIcon,
  ChartNoAxesCombinedIcon,
  Clock3Icon,
  FilePlus2Icon,
  FileStackIcon,
  FileTextIcon,
  FileTypeIcon,
  FolderOpenIcon,
  GitBranchIcon,
  GitForkIcon,
  HistoryIcon,
  InboxIcon,
  LayoutDashboardIcon,
  ListChecksIcon,
  ListTodoIcon,
  MailIcon,
  MessagesSquareIcon,
  PaperclipIcon,
  RouteIcon,
  SearchIcon,
  SendIcon,
  SettingsIcon,
  Share2Icon,
  ShieldCheckIcon,
  TagsIcon,
  Trash2Icon,
  UserCheckIcon,
  UsersIcon,
  VoteIcon,
  WorkflowIcon,
} from "lucide-react";
import type { Feature } from "./AboutData";

export const DMSData: Feature[] = [
  {
    featureShortName: "DMS",
    featureName: "features.dms.archiveDocuments.featureName",
    featureShortDesc: "features.dms.archiveDocuments.featureShortDesc",
    featureDesc: "features.dms.archiveDocuments.featureDesc",
    color: "green",
    LucidaIcon: <ArchiveIcon />,
  },

  {
    featureShortName: "DMS",
    featureName: "features.dms.archivedDocumentsExplorer.featureName",
    featureShortDesc: "features.dms.archivedDocumentsExplorer.featureShortDesc",
    featureDesc: "features.dms.archivedDocumentsExplorer.featureDesc",
    color: "green",
    LucidaIcon: <FolderOpenIcon />,
  },

  {
    featureShortName: "DMS",
    featureName: "features.dms.search.featureName",
    featureShortDesc: "features.dms.search.featureShortDesc",
    featureDesc: "features.dms.search.featureDesc",
    color: "green",
    LucidaIcon: <SearchIcon />,
  },

  {
    featureShortName: "DMS",
    featureName: "features.dms.documentTypes.featureName",
    featureShortDesc: "features.dms.documentTypes.featureShortDesc",
    featureDesc: "features.dms.documentTypes.featureDesc",
    color: "green",
    LucidaIcon: <FileTypeIcon />,
  },

  {
    featureShortName: "DMS",
    featureName: "features.dms.aclPolicies.featureName",
    featureShortDesc: "features.dms.aclPolicies.featureShortDesc",
    featureDesc: "features.dms.aclPolicies.featureDesc",
    color: "green",
    LucidaIcon: <ShieldCheckIcon />,
  },

  {
    featureShortName: "DMS",
    featureName: "features.dms.retentionRules.featureName",
    featureShortDesc: "features.dms.retentionRules.featureShortDesc",
    featureDesc: "features.dms.retentionRules.featureDesc",
    color: "green",
    LucidaIcon: <Clock3Icon />,
  },

  {
    featureShortName: "DMS",
    featureName: "features.dms.sharedDocuments.featureName",
    featureShortDesc: "features.dms.sharedDocuments.featureShortDesc",
    featureDesc: "features.dms.sharedDocuments.featureDesc",
    color: "green",
    LucidaIcon: <Share2Icon />,
  },

  {
    featureShortName: "DMS",
    featureName: "features.dms.recycleBin.featureName",
    featureShortDesc: "features.dms.recycleBin.featureShortDesc",
    featureDesc: "features.dms.recycleBin.featureDesc",
    color: "green",
    LucidaIcon: <Trash2Icon />,
  },
];

export const CMSData: Feature[] = [
  {
    featureShortName: "CMS",
    featureName: "features.cms.settings.featureName",
    featureShortDesc: "features.cms.settings.featureShortDesc",
    featureDesc: "features.cms.settings.featureDesc",
    color: "red",
    LucidaIcon: <SettingsIcon />,
  },

  {
    featureShortName: "CMS",
    featureName: "features.cms.externalEntities.featureName",
    featureShortDesc: "features.cms.externalEntities.featureShortDesc",
    featureDesc: "features.cms.externalEntities.featureDesc",
    color: "red",
    LucidaIcon: <UsersIcon />,
  },

  {
    featureShortName: "CMS",
    featureName: "features.cms.correspondenceInbox.featureName",
    featureShortDesc: "features.cms.correspondenceInbox.featureShortDesc",
    featureDesc: "features.cms.correspondenceInbox.featureDesc",
    color: "red",
    LucidaIcon: <InboxIcon />,
  },

  {
    featureShortName: "CMS",
    featureName: "features.cms.addCorrespondence.featureName",
    featureShortDesc: "features.cms.addCorrespondence.featureShortDesc",
    featureDesc: "features.cms.addCorrespondence.featureDesc",
    color: "red",
    LucidaIcon: <FilePlus2Icon />,
  },
];

export const MMSData: Feature[] = [
  {
    featureShortName: "MMS",
    featureName: "features.mms.performanceIndicators.featureName",
    featureShortDesc: "features.mms.performanceIndicators.featureShortDesc",
    featureDesc: "features.mms.performanceIndicators.featureDesc",
    color: "yellow",
    LucidaIcon: <LayoutDashboardIcon />,
  },

  {
    featureShortName: "MMS",
    featureName: "features.mms.settings.featureName",
    featureShortDesc: "features.mms.settings.featureShortDesc",
    featureDesc: "features.mms.settings.featureDesc",
    color: "yellow",
    LucidaIcon: <SettingsIcon />,
  },

  {
    featureShortName: "MMS",
    featureName: "features.mms.committees.featureName",
    featureShortDesc: "features.mms.committees.featureShortDesc",
    featureDesc: "features.mms.committees.featureDesc",
    color: "yellow",
    LucidaIcon: <UsersIcon />,
  },

  {
    featureShortName: "MMS",
    featureName: "features.mms.meetings.featureName",
    featureShortDesc: "features.mms.meetings.featureShortDesc",
    featureDesc: "features.mms.meetings.featureDesc",
    color: "yellow",
    LucidaIcon: <CalendarDaysIcon />,
  },

  {
    featureShortName: "MMS",
    featureName: "features.mms.taskInbox.featureName",
    featureShortDesc: "features.mms.taskInbox.featureShortDesc",
    featureDesc: "features.mms.taskInbox.featureDesc",
    color: "yellow",
    LucidaIcon: <ListChecksIcon />,
  },
];

export const BPMData: Feature[] = [
  {
    featureShortName: "BPM",
    featureName: "features.bpm.processManagement.featureName",
    featureShortDesc: "features.bpm.processManagement.featureShortDesc",
    featureDesc: "features.bpm.processManagement.featureDesc",
    color: "blue",
    LucidaIcon: <WorkflowIcon />,
  },

  {
    featureShortName: "BPM",
    featureName: "features.bpm.workflowDesigner.featureName",
    featureShortDesc: "features.bpm.workflowDesigner.featureShortDesc",
    featureDesc: "features.bpm.workflowDesigner.featureDesc",
    color: "blue",
    LucidaIcon: <GitBranchIcon />,
  },

  {
    featureShortName: "BPM",
    featureName: "features.bpm.tasks.featureName",
    featureShortDesc: "features.bpm.tasks.featureShortDesc",
    featureDesc: "features.bpm.tasks.featureDesc",
    color: "blue",
    LucidaIcon: <ListChecksIcon />,
  },

  {
    featureShortName: "BPM",
    featureName: "features.bpm.approvals.featureName",
    featureShortDesc: "features.bpm.approvals.featureShortDesc",
    featureDesc: "features.bpm.approvals.featureDesc",
    color: "blue",
    LucidaIcon: <BadgeCheckIcon />,
  },

  {
    featureShortName: "BPM",
    featureName: "features.bpm.businessRules.featureName",
    featureShortDesc: "features.bpm.businessRules.featureShortDesc",
    featureDesc: "features.bpm.businessRules.featureDesc",
    color: "blue",
    LucidaIcon: <GitForkIcon />,
  },

  {
    featureShortName: "BPM",
    featureName: "features.bpm.notifications.featureName",
    featureShortDesc: "features.bpm.notifications.featureShortDesc",
    featureDesc: "features.bpm.notifications.featureDesc",
    color: "blue",
    LucidaIcon: <BellIcon />,
  },

  {
    featureShortName: "BPM",
    featureName: "features.bpm.processDocuments.featureName",
    featureShortDesc: "features.bpm.processDocuments.featureShortDesc",
    featureDesc: "features.bpm.processDocuments.featureDesc",
    color: "blue",
    LucidaIcon: <FileStackIcon />,
  },

  {
    featureShortName: "BPM",
    featureName: "features.bpm.processMonitoring.featureName",
    featureShortDesc: "features.bpm.processMonitoring.featureShortDesc",
    featureDesc: "features.bpm.processMonitoring.featureDesc",
    color: "blue",
    LucidaIcon: <ActivityIcon />,
  },

  {
    featureShortName: "BPM",
    featureName: "features.bpm.auditTrail.featureName",
    featureShortDesc: "features.bpm.auditTrail.featureShortDesc",
    featureDesc: "features.bpm.auditTrail.featureDesc",
    color: "blue",
    LucidaIcon: <HistoryIcon />,
  },

  {
    featureShortName: "BPM",
    featureName: "features.bpm.processDashboard.featureName",
    featureShortDesc: "features.bpm.processDashboard.featureShortDesc",
    featureDesc: "features.bpm.processDashboard.featureDesc",
    color: "blue",
    LucidaIcon: <ChartNoAxesCombinedIcon />,
  },
];
