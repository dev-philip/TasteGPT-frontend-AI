import type React from "react";

type ChatBubbleProps = {
  senderName: string;
  namePosition: "left" | "right";
  message: string;
};

export const ChatBubble: React.FC<ChatBubbleProps> = ({
  message,
  namePosition,
  senderName,
}) => {
  return (
    <div className="w-full">
      {namePosition === "left" ? (
        <LeftTextContainer name={senderName} />
      ) : (
        <RightTextContainer name={senderName} />
      )}

      <div className="bg-surface-light dark:bg-surface-dark py-[10px] px-[12px] rounded-[12px] animate__animated animate__fadeInDown">
        <p className="text-text-light dark:text-text-dark text-base mb-2 text-sm">
          {message}
        </p>
      </div>
    </div>
  );
};

type TextContainerProps = {
  name: string;
};

const LeftTextContainer: React.FC<TextContainerProps> = ({ name }) => {
  return <p className="text-[#25147B] text-base mr-auto w-fit">{name}</p>;
};

const RightTextContainer: React.FC<TextContainerProps> = ({ name }) => {
  return <p className="text-[#3CC3DF] text-base ml-auto w-fit">{name}</p>;
};
