import type React from "react";
import type { ReactNode } from "react";
import { ChatSideBar } from "./chat-sidebar";
import { ChatRightPanel } from "./chat-right-panel";

interface IChatLayoutProps {
  children: ReactNode;
}

export const ChatLayout: React.FC<IChatLayoutProps> = ({ children }) => {
  return (
    <main className="relative h-[calc(100vh-73px)] overflow-y-auto flex flex-row">
      {/* Sidebar */}
      <aside className="sticky top-0 h-full px-[40px] py-8">
        <ChatSideBar />
      </aside>

      {/** Content */}
      <section className="flex-1 py-8">{children}</section>

      {/* Right Panel */}
      <aside className="sticky top-0 h-full overflow-y-auto px-[40px] py-8">
        <ChatRightPanel />
      </aside>
    </main>
  );
};
