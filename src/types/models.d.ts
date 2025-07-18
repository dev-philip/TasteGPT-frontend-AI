export type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
};

// Represents messages in a thread
export type Message = {
  id: string;
  content: string; // In what format would this come In? Markdown? Html?
  isSystem: boolean; // true for message sent by AI
  createdAt: string; // ISO Date String
};

export type ChatFile = {
  id: string;
  fileUrl: string;
  threadID: string;
  name: string;
  type: "audio" | "pdf" | "docx" | "image";
  isSystem: boolean; // true for message sent by AI
};

// AGG for messages, files and result for particular thread(or session)
export type ChatThread = {
  id: string;
  title: string;
  userID: string;
  messages: Message[];
  files: ChatFile[];
};
