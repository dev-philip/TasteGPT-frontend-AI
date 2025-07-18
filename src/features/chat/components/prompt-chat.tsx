// import type { ChatThread } from "../../../types/models";
import type React from "react";
import { ChatBubble } from "./chat-bubble";
import { ChatInput } from "./chat-input";
import { useChatStore } from "@/store/useChatStore";
import { useEffect, useRef } from "react";

// const thread: ChatThread = {
//   files: [],
//   id: "thread-1",
//   userID: "user-1",
//   title: "Chat with AI",
//   messages: [
//     {
//       id: "message-1",
//       content: "What is the role of NAD+ in aging?",
//       createdAt: "2023-10-01T10:00:00Z",
//       isSystem: false,
//     },
//     {
//       id: "message-1",
//       content: "What is your name?",
//       createdAt: "2023-10-01T10:00:00Z",
//       isSystem: false,
//     },
    
//   ],
// };


export const PromptChat: React.FC = () => {
  
   const chatThread = useChatStore((state) => state.chatThread);

     // Ref for scroll container
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatThread.messages]);
  
  return (
    <div className="h-full w-full flex flex-col gap-12">
      <div ref={scrollRef} className="flex-1 w-full overflow-y-auto space-y-4">
        {chatThread.messages.map((message) => (
          <ChatBubble
            key={message.id}
            message={message.content}
            namePosition={message.isSystem ? "left" : "right"}
            senderName={message.isSystem ? "Bio AI" : "You"}
          />
        ))}
      </div>

      <div>
        <ChatInput onSend={() => console.log("Send Message")} sending={false} />
      </div>
    </div>
  );
};
