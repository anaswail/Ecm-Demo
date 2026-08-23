import dms from "../assets/dms.webp";
import bpm from "../assets/bpm.webp";
import cms from "../assets/cms.webp";
import mms from "../assets/mms.webp";

export const colorStyles = {
  green: {
    border: "border-green",
    bg: "bg-green/10",
    text: "text-green",
    dot: "bg-green",
    glow: "from-green/20",
    ring: "focus-visible:ring-green",
  },
  yellow: {
    border: "border-yellow",
    bg: "bg-yellow/10",
    text: "text-yellow",
    dot: "bg-yellow",
    glow: "from-yellow/20",
    ring: "focus-visible:ring-yellow",
  },
  blue: {
    border: "border-blue",
    bg: "bg-blue/10",
    text: "text-blue",
    dot: "bg-blue",
    glow: "from-blue/20",
    ring: "focus-visible:ring-blue",
  },
  red: {
    border: "border-red",
    bg: "bg-red/10",
    text: "text-red",
    dot: "bg-red",
    glow: "from-red/20",
    ring: "focus-visible:ring-red",
  },
} as const;

type FeatureColor = keyof typeof colorStyles;

export interface Feature {
  featureShortName: string;
  featureName: string;
  featureDesc: string[];
  featureShortDesc?: string;
  color: FeatureColor;
  icon?: string;
  LucidaIcon?: React.ReactNode;
}

export const featuresCards: Feature[] = [
  {
    featureShortName: "DMS",
    featureName: "Document Management System",
    featureDesc: [
      "Document Management: Create, upload, organize, and manage documents",
      "Document Types: Define document types with configurable information and fields",
      "File Management: Upload files, use templates, or create and edit documents within the system",
      "Version Control: Track changes, view previous versions, and restore older versions",
      "Document Sharing: Share documents internally or externally with controlled access",
      "Document Relations: Link documents with related correspondence, meetings, and processes",
      "Email Integration: Add files received through email directly to documents",
      "Search & Filtering: Find documents quickly using metadata, types, keywords, and filters",
      "Notes & Reminders: Add notes, reminders, and follow-up information",
      "Security & Permissions: Protect documents with flexible access controls and permissions",
      "Approval & Archiving: Manage document approvals and archive completed documents",
    ],
    color: "green",
    icon: dms,
  },
  {
    featureShortName: "CMS",
    featureName: "Correspondence Management System",
    featureDesc: [
      "Correspondence Registration: Register incoming, outgoing, internal, and external correspondence",
      "Correspondence Types: Create configurable correspondence types with dynamic fields",
      "Routing & Distribution: Route correspondence to departments, employees, groups, or committees",
      "Response Management: Create, manage, and link responses to related correspondence",
      "Attachments: Add documents, templates, and email attachments to correspondence",
      "Tracking: Track correspondence status, actions, and processing history",
      "Notes & Reminders: Add notes, priorities, deadlines, and follow-up reminders",
      "Search & Filtering: Quickly find correspondence using advanced search and filters",
      "Security & Permissions: Control access based on roles and responsibilities",
      "Reports & Dashboard: Monitor correspondence activity, workload, and performance",
    ],
    color: "red",
    icon: cms,
  },
  {
    featureShortName: "MMS",
    featureName: "Meeting Management System",
    featureDesc: [
      "Meeting Creation: Create new meetings or link them to existing meeting series",
      "Meeting Details: Manage subjects, descriptions, dates, times, formats, and time zones",
      "Room & Online Meetings: Manage physical, online, and hybrid meetings",
      "Attendee Management: Add organizers, employees, groups, committees, and external participants",
      "Agenda Management: Create agendas, assign time slots, and designate minute takers",
      "Attachments: Add and manage meeting-related documents and files",
      "Task Management: Assign tasks, set priorities and deadlines, and track progress",
      "Invitations: Send and manage meeting invitations",
      "Voting: Create polls, voting options, and control eligible voters",
      "Attendance: Record and manage meeting attendance",
      "Meeting Reports: Generate, edit, and export detailed meeting reports",
      "Meeting Chat: Communicate through a dedicated meeting conversation",
      "Meeting Tracking: View, search, filter, and monitor all meetings",
    ],
    color: "yellow",
    icon: mms,
  },
  {
    featureShortName: "BPM",
    featureName: "Business Process Management",
    featureDesc: [
      "Process Design: Design and configure business processes and workflows",
      "Workflow Automation: Automate tasks and process steps based on predefined rules",
      "Task Management: Assign, prioritize, track, and manage workflow tasks",
      "Approvals: Create multi-level review and approval workflows",
      "Business Rules: Define conditions and rules to control process flow",
      "Task Assignment: Assign activities to employees, groups, departments, or roles",
      "Notifications: Send automatic notifications, reminders, and deadline alerts",
      "Document Integration: Connect documents and correspondence to business processes",
      "Process Tracking: Monitor process status and track every workflow activity",
      "Audit Trail: Maintain a complete history of actions, decisions, and approvals",
      "Reports & Analytics: Monitor process performance, workload, delays, and completion rates",
    ],
    color: "blue",
    icon: bpm,
  },
];

// Ambient badges echo the four systems below, orbiting slowly between the
// copy and the card grid — a quieter, smaller-scale cousin of the hero's
// floating icons rather than a repeat of them.
export const decorations: Array<{
  icon: string;
  color: FeatureColor;
  position: string;
  duration: number;
  delay: number;
}> = [
  {
    icon: dms,
    color: "green",
    position: "top-24 left-32 md:left-14",
    duration: 11,
    delay: 0,
  },
  {
    icon: cms,
    color: "red",
    position: "bottom-20 left-4 md:left-28",
    duration: 13,
    delay: 0.8,
  },
  {
    icon: mms,
    color: "yellow",
    position: "top-18 right-12 md:right-16",
    duration: 12,
    delay: 1.6,
  },
  {
    icon: bpm,
    color: "blue",
    position: "bottom-20 right-20 md:right-20",
    duration: 14,
    delay: 2.4,
  },
];
