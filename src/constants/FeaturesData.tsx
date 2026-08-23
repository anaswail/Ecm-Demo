import {
  ActivityIcon,
  ArchiveIcon,
  BadgeCheckIcon,
  BellIcon,
  CalendarDaysIcon,
  CalendarIcon,
  ChartNoAxesCombinedIcon,
  Clock3Icon,
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
  Share2Icon,
  ShieldCheckIcon,
  TagsIcon,
  Trash2Icon,
  UserCheckIcon,
  VoteIcon,
  WorkflowIcon,
} from "lucide-react";
import type { Feature } from "./AboutData";

export const DMSData: Feature[] = [
  {
    featureShortName: "DMS",
    featureName: "Archive Documents",
    featureShortDesc: "Manage, search, and securely access archived documents.",
    featureDesc: [
      "Archived Documents: View and manage all archived documents.",
      "Search & Filters: Quickly find documents using advanced search and filtering options.",
      "Document Details: View document information, metadata, and related records.",
      "Preview: Preview documents and their attachments directly within the system.",
      "Version History: View previous versions and restore an earlier version when needed.",
      "Document Relations: Access documents and correspondence related to the archived document.",
      "Workflow & Procedures: Track procedures and workflows associated with the document.",
      "Sharing: Share documents internally or externally based on access permissions.",
      "Download & Export: Download or export documents when permitted.",
      "Notes & Reminders: Add and manage notes and reminders related to documents.",
      "Security & Permissions: Control document access and protect sensitive information.",
      "Restore: Return archived documents to active document management.",
      "Delete: Permanently delete documents according to permissions and retention policies.",
    ],
    color: "green",
    LucidaIcon: <ArchiveIcon />,
  },

  {
    featureShortName: "DMS",
    featureName: "Archived Documents Explorer",
    featureShortDesc: "Browse, organize, and manage documents through folders.",
    featureDesc: [
      "Folder Management: Create, rename, move, and delete folders.",
      "Document Organization: Organize documents within folders and subfolders.",
      "Folder Navigation: Browse folders and access their contents easily.",
      "File Management: Upload, move, copy, and manage files within folders.",
      "Sharing: Share folders and their contents with authorized users.",
      "Access Control: Manage permissions for folders and their contents.",
      "Search: Search for documents and folders within the explorer.",
      "Preview: Preview supported documents and files directly from the explorer.",
    ],
    color: "green",
    LucidaIcon: <FolderOpenIcon />,
  },

  {
    featureShortName: "DMS",
    featureName: "Search",
    featureShortDesc:
      "Find documents quickly using powerful search and filters.",
    featureDesc: [
      "Global Search: Search across documents and archived content.",
      "Keyword Search: Find documents using keywords and phrases.",
      "Advanced Filters: Filter results by type, date, status, classification, and other fields.",
      "Metadata Search: Search using document metadata and custom fields.",
      "Saved Searches: Save frequently used search criteria for quick access.",
      "Search Results: View relevant documents with key information and metadata.",
      "Sorting: Sort results by date, name, type, relevance, and other criteria.",
    ],
    color: "green",
    LucidaIcon: <SearchIcon />,
  },

  {
    featureShortName: "DMS",
    featureName: "Document Types",
    featureShortDesc:
      "Create and configure document types and their required information.",
    featureDesc: [
      "Type Management: Create, edit, and manage document types.",
      "Custom Fields: Define fields and information required for each type.",
      "Type Classification: Organize documents according to predefined categories.",
      "Field Configuration: Configure field types, requirements, and validation.",
      "Templates: Associate document templates with specific document types.",
      "Permissions: Control access to document types and their configurations.",
      "Type Status: Enable or disable document types when needed.",
    ],
    color: "green",
    LucidaIcon: <FileTypeIcon />,
  },

  {
    featureShortName: "DMS",
    featureName: "ACL Policies",
    featureShortDesc:
      "Control document access through flexible permission policies.",
    featureDesc: [
      "Access Policies: Create and manage document access policies.",
      "User Permissions: Grant or restrict access for specific users.",
      "Group Permissions: Assign permissions to groups, departments, or roles.",
      "Permission Levels: Control actions such as viewing, editing, sharing, downloading, and deleting.",
      "Inheritance: Apply permissions across folders and their contents.",
      "Access Restrictions: Restrict sensitive documents to authorized users.",
      "Policy Management: Update and manage access policies as organizational requirements change.",
    ],
    color: "green",
    LucidaIcon: <ShieldCheckIcon />,
  },

  {
    featureShortName: "DMS",
    featureName: "Retention Rules",
    featureShortDesc:
      "Define how long documents are retained and when they are archived or disposed.",
    featureDesc: [
      "Retention Policies: Create and manage document retention rules.",
      "Retention Periods: Define how long documents should be retained.",
      "Document Types: Apply retention rules to specific document types or categories.",
      "Automatic Archiving: Automatically archive documents based on defined rules.",
      "Expiration Management: Identify documents approaching or reaching their retention limit.",
      "Disposal Rules: Define actions for documents after their retention period.",
      "Compliance: Support organizational and regulatory document retention requirements.",
    ],
    color: "green",
    LucidaIcon: <Clock3Icon />,
  },

  {
    featureShortName: "DMS",
    featureName: "Shared Documents",
    featureShortDesc:
      "Access and manage documents shared with users and teams.",
    featureDesc: [
      "Shared Documents: View documents shared with you or your teams.",
      "Document Sharing: Share documents with authorized users and groups.",
      "Access Control: Define permissions for shared documents.",
      "Shared Folders: Share folders and their contents with selected users.",
      "Collaboration: Allow authorized users to work with shared documents.",
      "Activity Tracking: Track sharing and document activities.",
      "Remove Access: Revoke access to previously shared documents.",
    ],
    color: "green",
    LucidaIcon: <Share2Icon />,
  },

  {
    featureShortName: "DMS",
    featureName: "Recycle Bin",
    featureShortDesc: "Manage deleted documents and restore them when needed.",
    featureDesc: [
      "Deleted Documents: View documents and files moved to the recycle bin.",
      "Restore: Restore deleted documents to their original location.",
      "Permanent Delete: Permanently remove documents when authorized.",
      "Search & Filters: Find deleted documents using search and filtering options.",
      "Deletion Details: View information about when and by whom a document was deleted.",
      "Bulk Actions: Restore or permanently delete multiple documents.",
      "Access Control: Restrict recycle bin actions based on user permissions.",
    ],
    color: "green",
    LucidaIcon: <Trash2Icon />,
  },
];

export const CMSData: Feature[] = [
  {
    featureShortName: "CMS",
    featureName: "Correspondence Management",
    featureShortDesc:
      "Manage, track, and organize incoming and outgoing correspondence.",
    featureDesc: [
      "Correspondence Registration: Register and manage incoming and outgoing correspondence.",
      "Correspondence Details: Manage correspondence information, metadata, and related records.",
      "Correspondence Types: Define and manage different correspondence types and their fields.",
      "Routing & Distribution: Route correspondence to departments, employees, groups, or committees.",
      "Response Management: Create, manage, and link responses to related correspondence.",
      "Attachments: Add and manage files, documents, and email attachments.",
      "Tracking: Track correspondence status, actions, and processing history.",
      "Notes & Reminders: Add notes, priorities, deadlines, and follow-up reminders.",
      "Search & Filters: Quickly find correspondence using advanced search and filtering.",
      "Document Relations: Link correspondence with related documents and other records.",
      "Sharing: Share correspondence with authorized internal or external users.",
      "Security & Permissions: Control access and protect sensitive correspondence.",
      "Archive: Archive completed correspondence while keeping it searchable and accessible.",
    ],
    color: "red",
    LucidaIcon: <MailIcon />,
  },

  {
    featureShortName: "CMS",
    featureName: "Incoming Correspondence",
    featureShortDesc: "Register, route, and track incoming correspondence.",
    featureDesc: [
      "Registration: Register incoming correspondence with all required information.",
      "Sender Management: Record and manage sender information.",
      "Classification: Classify correspondence by type, priority, and category.",
      "Routing: Route correspondence to the appropriate department or employee.",
      "Attachments: Add related files and documents.",
      "Tracking: Monitor correspondence status and processing history.",
      "Response: Create and link responses to incoming correspondence.",
      "Follow-up: Add reminders and deadlines for pending actions.",
    ],
    color: "red",
    LucidaIcon: <InboxIcon />,
  },

  {
    featureShortName: "CMS",
    featureName: "Outgoing Correspondence",
    featureShortDesc: "Create, manage, and track outgoing correspondence.",
    featureDesc: [
      "Creation: Create and register outgoing correspondence.",
      "Recipient Management: Add and manage recipient information.",
      "Templates: Create correspondence using predefined templates.",
      "Attachments: Add supporting documents and files.",
      "Approval: Submit correspondence for review and approval.",
      "Distribution: Send correspondence to internal or external recipients.",
      "Tracking: Track delivery, status, and processing history.",
      "Archive: Maintain completed outgoing correspondence for future reference.",
    ],
    color: "red",
    LucidaIcon: <SendIcon />,
  },

  {
    featureShortName: "CMS",
    featureName: "Correspondence Types",
    featureShortDesc:
      "Create and configure correspondence types and their required fields.",
    featureDesc: [
      "Type Management: Create, edit, and manage correspondence types.",
      "Custom Fields: Define information required for each correspondence type.",
      "Classification: Organize correspondence using predefined categories.",
      "Field Configuration: Configure field types, requirements, and validation.",
      "Templates: Associate templates with specific correspondence types.",
      "Permissions: Control access to correspondence type configurations.",
      "Type Status: Enable or disable correspondence types when required.",
    ],
    color: "red",
    LucidaIcon: <TagsIcon />,
  },

  {
    featureShortName: "CMS",
    featureName: "Routing & Distribution",
    featureShortDesc:
      "Route correspondence to the right people and departments.",
    featureDesc: [
      "Assignment: Assign correspondence to employees, departments, or groups.",
      "Distribution: Distribute correspondence to multiple recipients.",
      "Routing Rules: Define rules for automated correspondence routing.",
      "Priority: Set correspondence priority and required action.",
      "Delegation: Delegate correspondence handling when required.",
      "Tracking: Monitor routing history and current responsibility.",
    ],
    color: "red",
    LucidaIcon: <RouteIcon />,
  },

  {
    featureShortName: "CMS",
    featureName: "Correspondence Search",
    featureShortDesc:
      "Find correspondence quickly using advanced search and filters.",
    featureDesc: [
      "Global Search: Search across incoming and outgoing correspondence.",
      "Keyword Search: Find correspondence using keywords and phrases.",
      "Advanced Filters: Filter by type, date, sender, recipient, status, and priority.",
      "Metadata Search: Search using correspondence metadata and custom fields.",
      "Sorting: Sort results by date, relevance, status, and other criteria.",
      "Quick Access: Open correspondence details and related records directly from results.",
    ],
    color: "red",
    LucidaIcon: <SearchIcon />,
  },

  {
    featureShortName: "CMS",
    featureName: "Correspondence Tracking",
    featureShortDesc:
      "Monitor correspondence status, actions, and processing history.",
    featureDesc: [
      "Status Tracking: Monitor the current status of correspondence.",
      "Action History: View actions and activities performed on correspondence.",
      "Routing History: Track where correspondence has been routed.",
      "Processing Time: Monitor processing and response times.",
      "Pending Actions: Identify correspondence requiring further action.",
      "Audit Trail: Maintain a complete history of correspondence activities.",
    ],
    color: "red",
    LucidaIcon: <HistoryIcon />,
  },

  {
    featureShortName: "CMS",
    featureName: "Correspondence Archive",
    featureShortDesc: "Securely store and access completed correspondence.",
    featureDesc: [
      "Archive: Archive completed correspondence for long-term storage.",
      "Search: Find archived correspondence using advanced filters.",
      "Document Access: View correspondence and related attachments.",
      "History: Access the complete correspondence history.",
      "Restore: Restore archived correspondence when authorized.",
      "Security: Protect archived correspondence with access controls.",
    ],
    color: "red",
    LucidaIcon: <ArchiveIcon />,
  },

  {
    featureShortName: "CMS",
    featureName: "Correspondence Security",
    featureShortDesc:
      "Protect correspondence through flexible access controls and permissions.",
    featureDesc: [
      "Access Control: Manage who can access correspondence.",
      "Role Permissions: Define permissions based on user roles.",
      "Confidentiality: Protect sensitive correspondence from unauthorized access.",
      "Sharing Controls: Control internal and external correspondence sharing.",
      "Action Permissions: Control viewing, editing, downloading, and deleting.",
      "Audit Trail: Track user activities and access history.",
    ],
    color: "red",
    LucidaIcon: <ShieldCheckIcon />,
  },

  {
    featureShortName: "CMS",
    featureName: "Correspondence Dashboard",
    featureShortDesc:
      "Monitor correspondence activity, workload, and performance.",
    featureDesc: [
      "Statistics: View incoming, outgoing, pending, and completed correspondence.",
      "Status Overview: Monitor correspondence by current status.",
      "Pending Actions: View correspondence requiring attention.",
      "Recent Correspondence: Access recently registered and processed items.",
      "Performance: Monitor processing and response times.",
      "Reports: Generate correspondence activity and performance reports.",
    ],
    color: "red",
    LucidaIcon: <ChartNoAxesCombinedIcon />,
  },
];

export const MMSData: Feature[] = [
  {
    featureShortName: "MMS",
    featureName: "Meeting Management",
    featureShortDesc: "Plan, manage, document, and track meetings.",
    featureDesc: [
      "Meeting Creation: Create new meetings or link them to existing meeting series.",
      "Meeting Details: Define the subject, description, date, time, format, and time zone.",
      "Location Management: Select available rooms or manage online and hybrid meeting locations.",
      "Online Meetings: Select meeting platforms and create or add meeting links.",
      "Attendee Management: Add organizers, employees, groups, committees, or external participants.",
      "Invitations: Send and manage meeting invitations.",
      "Agenda Management: Create agendas, assign time slots, and designate minute takers.",
      "Attachments: Add and manage meeting documents and files.",
      "Task Management: Assign tasks, set priorities and deadlines, and track progress.",
      "Voting: Create polls, define voting options, and manage eligible voters.",
      "Attendance: Record and manage meeting attendance.",
      "Meeting Chat: Communicate through a dedicated chat linked to the meeting.",
      "Meeting Reports: Generate, edit, and export detailed meeting reports.",
      "Meeting Tracking: Monitor meetings, activities, tasks, and related information.",
    ],
    color: "yellow",
    LucidaIcon: <CalendarDaysIcon />,
  },

  {
    featureShortName: "MMS",
    featureName: "Meeting Dashboard",
    featureShortDesc:
      "Monitor meetings, tasks, schedules, and meeting activity.",
    featureDesc: [
      "Meeting Statistics: View personal and overall meeting statistics.",
      "Meeting Status: Monitor upcoming, completed, draft, cancelled, and rescheduled meetings.",
      "Task Inbox: View pending, in-progress, completed, and overdue tasks.",
      "Weekly Meetings: View meetings scheduled for the current week.",
      "Recent Meetings: Access recently created and completed meetings.",
      "Calendar: Schedule and manage meetings through an interactive calendar.",
    ],
    color: "yellow",
    LucidaIcon: <LayoutDashboardIcon />,
  },

  {
    featureShortName: "MMS",
    featureName: "Meeting Calendar",
    featureShortDesc:
      "Schedule and manage meetings through a centralized calendar.",
    featureDesc: [
      "Calendar View: View meetings by day, week, or month.",
      "Scheduling: Create and schedule meetings directly from the calendar.",
      "Meeting Details: Access meeting information directly from calendar events.",
      "Availability: Check scheduled meetings and available time slots.",
      "Filtering: Filter meetings by status, organizer, or other criteria.",
    ],
    color: "yellow",
    LucidaIcon: <CalendarIcon />,
  },

  {
    featureShortName: "MMS",
    featureName: "Agendas",
    featureShortDesc: "Create and manage meeting agendas and discussion items.",
    featureDesc: [
      "Agenda Creation: Add and manage agenda items for each meeting.",
      "Time Allocation: Define start and end times for each agenda item.",
      "Minute Taker: Assign a responsible person to record each agenda item.",
      "Agenda Order: Organize agenda items according to the meeting flow.",
      "Agenda Tracking: Track agenda items and their discussion status.",
    ],
    color: "yellow",
    LucidaIcon: <ListTodoIcon />,
  },

  {
    featureShortName: "MMS",
    featureName: "Meeting Tasks",
    featureShortDesc: "Assign and track tasks resulting from meetings.",
    featureDesc: [
      "Task Creation: Create tasks and link them to specific meetings.",
      "Task Assignment: Assign tasks to specific users.",
      "Task Details: Define task descriptions and required actions.",
      "Priority: Set task priority levels.",
      "Due Dates: Define deadlines for task completion.",
      "Task Status: Track pending, in-progress, completed, and overdue tasks.",
      "Task Management: Manage assigned and created tasks based on permissions.",
    ],
    color: "yellow",
    LucidaIcon: <ListChecksIcon />,
  },

  {
    featureShortName: "MMS",
    featureName: "Meeting Attendance",
    featureShortDesc: "Record and manage meeting attendance and participation.",
    featureDesc: [
      "Attendee List: View all invited meeting participants.",
      "Attendance Recording: Record participant attendance.",
      "Attendance Confirmation: Confirm attendance for selected participants.",
      "External Attendees: Manage attendance for external participants.",
      "Attendance Report: Include attendance information in meeting reports.",
    ],
    color: "yellow",
    LucidaIcon: <UserCheckIcon />,
  },

  {
    featureShortName: "MMS",
    featureName: "Voting",
    featureShortDesc: "Create and manage polls and voting during meetings.",
    featureDesc: [
      "Poll Creation: Create polls with a name and description.",
      "Voting Options: Define available voting options.",
      "Eligible Voters: Select specific participants who can vote.",
      "Vote Management: Manage and track submitted votes.",
      "Results: View voting results and outcomes.",
    ],
    color: "yellow",
    LucidaIcon: <VoteIcon />,
  },

  {
    featureShortName: "MMS",
    featureName: "Meeting Reports",
    featureShortDesc:
      "Generate and manage detailed reports for completed meetings.",
    featureDesc: [
      "Report Generation: Generate reports containing meeting details and outcomes.",
      "Meeting Details: Include meeting information, attendees, agendas, and activities.",
      "Attendance Confirmation: Add attendance confirmations to the report.",
      "Report Editing: Edit and add additional information to meeting reports.",
      "PDF Export: Export meeting reports as PDF files.",
      "Report History: Maintain reports as part of the meeting record.",
    ],
    color: "yellow",
    LucidaIcon: <FileTextIcon />,
  },

  {
    featureShortName: "MMS",
    featureName: "Meeting Attachments",
    featureShortDesc: "Manage documents and files related to meetings.",
    featureDesc: [
      "File Upload: Upload documents and files to meetings.",
      "Templates: Create or attach files using existing templates.",
      "Document Editing: Create and edit supported documents within the system.",
      "Version Control: Track changes and document versions.",
      "Document Preview: Preview meeting attachments directly within the system.",
      "Access Control: Control access to meeting attachments.",
    ],
    color: "yellow",
    LucidaIcon: <PaperclipIcon />,
  },

  {
    featureShortName: "MMS",
    featureName: "Meeting Chat",
    featureShortDesc: "Communicate and retain discussions within the meeting.",
    featureDesc: [
      "Meeting Chat: Create a dedicated conversation for each meeting.",
      "Participant Access: Allow meeting participants to communicate.",
      "Message History: Maintain the conversation as part of the meeting record.",
      "Meeting Context: Keep discussions linked to the related meeting.",
    ],
    color: "yellow",
    LucidaIcon: <MessagesSquareIcon />,
  },

  {
    featureShortName: "MMS",
    featureName: "Meeting Tracking",
    featureShortDesc:
      "Monitor meetings and follow up on their activities and outcomes.",
    featureDesc: [
      "Meeting List: View all meetings and their details.",
      "Search & Filters: Find meetings using different criteria.",
      "Status Tracking: Track upcoming, completed, cancelled, and rescheduled meetings.",
      "Task Follow-up: Monitor tasks associated with meetings.",
      "Meeting History: Review meeting activities and related records.",
      "Meeting Details: Access agendas, attendees, reports, tasks, and attachments.",
    ],
    color: "yellow",
    LucidaIcon: <HistoryIcon />,
  },
];

export const BPMData: Feature[] = [
  {
    featureShortName: "BPM",
    featureName: "Process Management",
    featureShortDesc: "Design, automate, and manage business processes.",
    featureDesc: [
      "Process Creation: Create and configure business processes and workflows.",
      "Process Design: Build processes using stages, tasks, decisions, and transitions.",
      "Process Configuration: Define process rules, settings, and required information.",
      "Process Assignment: Assign processes to users, groups, departments, or roles.",
      "Process Tracking: Monitor the progress and current status of each process.",
      "Process History: View activities, actions, and changes throughout the process.",
      "Process Control: Manage and update processes based on organizational requirements.",
    ],
    color: "blue",
    LucidaIcon: <WorkflowIcon />,
  },

  {
    featureShortName: "BPM",
    featureName: "Workflow Designer",
    featureShortDesc:
      "Build and configure workflows using a visual process designer.",
    featureDesc: [
      "Visual Designer: Create workflows using a visual drag-and-drop interface.",
      "Workflow Steps: Add tasks, approvals, decisions, and process stages.",
      "Connections: Define transitions and relationships between workflow steps.",
      "Conditions: Configure conditions that control workflow paths.",
      "Business Rules: Define rules that determine process behavior.",
      "Workflow Validation: Validate workflows before publishing them.",
      "Workflow Versions: Manage and maintain different workflow versions.",
    ],
    color: "blue",
    LucidaIcon: <GitBranchIcon />,
  },

  {
    featureShortName: "BPM",
    featureName: "Tasks",
    featureShortDesc: "Manage and track tasks generated by business processes.",
    featureDesc: [
      "Task Assignment: Assign tasks to users, groups, departments, or roles.",
      "Task Details: Define task descriptions, instructions, and required actions.",
      "Priority: Set task priority levels.",
      "Due Dates: Define deadlines for task completion.",
      "Task Status: Track pending, in-progress, completed, and overdue tasks.",
      "Task Actions: Complete, approve, reject, return, or forward tasks based on permissions.",
      "Task History: View the history of actions performed on each task.",
    ],
    color: "blue",
    LucidaIcon: <ListChecksIcon />,
  },

  {
    featureShortName: "BPM",
    featureName: "Approvals",
    featureShortDesc:
      "Manage review and approval steps within business processes.",
    featureDesc: [
      "Approval Steps: Add approval stages to business processes.",
      "Approver Assignment: Assign approvals to specific users, groups, or roles.",
      "Multi-Level Approval: Configure multiple approval levels.",
      "Approve & Reject: Allow authorized users to approve or reject requests.",
      "Return & Revision: Return items for correction or additional information.",
      "Approval History: Track approval decisions and responsible users.",
    ],
    color: "blue",
    LucidaIcon: <BadgeCheckIcon />,
  },

  {
    featureShortName: "BPM",
    featureName: "Business Rules",
    featureShortDesc:
      "Define rules and conditions that control process behavior.",
    featureDesc: [
      "Rule Creation: Create and manage business rules.",
      "Conditions: Define conditions based on process data.",
      "Conditional Routing: Automatically route processes based on defined conditions.",
      "Actions: Trigger specific actions when conditions are met.",
      "Rule Management: Enable, disable, and update business rules.",
      "Rule Validation: Validate rules before applying them to active processes.",
    ],
    color: "blue",
    LucidaIcon: <GitForkIcon />,
  },

  {
    featureShortName: "BPM",
    featureName: "Notifications",
    featureShortDesc:
      "Keep users informed about process activities and required actions.",
    featureDesc: [
      "Task Notifications: Notify users when tasks are assigned.",
      "Status Notifications: Notify users when process status changes.",
      "Approval Notifications: Notify users about pending approvals and decisions.",
      "Reminders: Send reminders for upcoming or pending deadlines.",
      "Overdue Alerts: Notify users about overdue tasks and activities.",
      "Notification Rules: Configure when and how notifications are triggered.",
    ],
    color: "blue",
    LucidaIcon: <BellIcon />,
  },

  {
    featureShortName: "BPM",
    featureName: "Process Documents",
    featureShortDesc:
      "Manage documents and records associated with business processes.",
    featureDesc: [
      "Document Attachment: Attach documents and files to process activities.",
      "Document Access: Access related documents directly from the process.",
      "Document Creation: Create documents as part of a workflow.",
      "Document Integration: Connect processes with DMS and CMS records.",
      "Document Tracking: Track document activities throughout the process.",
      "Access Control: Control access to process-related documents.",
    ],
    color: "blue",
    LucidaIcon: <FileStackIcon />,
  },

  {
    featureShortName: "BPM",
    featureName: "Process Monitoring",
    featureShortDesc:
      "Monitor active processes, tasks, and workflow performance.",
    featureDesc: [
      "Active Processes: View currently running processes.",
      "Process Status: Monitor the current status of each process.",
      "Task Monitoring: Track pending and completed workflow tasks.",
      "Progress Tracking: Monitor process progress across different stages.",
      "Bottleneck Detection: Identify delayed or blocked process activities.",
      "Process Timeline: View the complete process timeline and activities.",
    ],
    color: "blue",
    LucidaIcon: <ActivityIcon />,
  },

  {
    featureShortName: "BPM",
    featureName: "Audit Trail",
    featureShortDesc:
      "Maintain a complete history of process activities and decisions.",
    featureDesc: [
      "Activity History: Record all actions performed during a process.",
      "User Actions: Track actions performed by users and roles.",
      "Status Changes: Record process and task status changes.",
      "Approvals & Decisions: Track approvals, rejections, and decisions.",
      "Timestamps: Record when each activity occurred.",
      "Process History: Maintain a complete process activity history.",
    ],
    color: "blue",
    LucidaIcon: <HistoryIcon />,
  },

  {
    featureShortName: "BPM",
    featureName: "Process Dashboard",
    featureShortDesc:
      "Monitor process performance, workload, and operational activity.",
    featureDesc: [
      "Process Statistics: View overall process activity and statistics.",
      "Active Processes: Monitor currently running processes.",
      "Task Overview: View pending, completed, and overdue tasks.",
      "Performance Metrics: Monitor process completion and processing times.",
      "Workload: Analyze task distribution across users and departments.",
      "Reports & Analytics: Generate reports and analyze process performance.",
    ],
    color: "blue",
    LucidaIcon: <ChartNoAxesCombinedIcon />,
  },
];
