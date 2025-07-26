import { ChatLayout, PromptChat, PromptResult } from "../components";

export const ChatPage = () => {
  return (
    <ChatLayout>
      <div className="flex flex-row gap-12 h-full w-full">
        {/* <div className="h-full flex-1 max-w-[252px]">
          <PromptChat />
        </div> */}

        <div className="h-full flex-1 mt-auto">
          <PromptResult />
        </div>
      </div>
    </ChatLayout>
  );
};
