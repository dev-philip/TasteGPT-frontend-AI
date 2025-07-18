import type React from "react";
import { useRef } from "react";
import { motion } from "motion/react";

import EyeIcon from "@/assets/images/svg/eye.svg";
import AddIcon from "@/assets/images/svg/add-circle.svg";
import AttachIcon from "@/assets/images/svg/attach-circle.svg";
import MicIcon from "@/assets/images/svg/microphone-2.svg";
import { Interaction } from "@/components/interaction";


import { toast } from 'react-toastify';
import { useClaimStore } from "@/store/useClaimStore";
import axios from "axios";
import { useAuthStore } from "@/store/auth";
import { VITE_API_BASE_URL} from "@/utils/constants";

// import { LinearLoader, SpinningLoader } from "@/features/chat/components/loaders";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const buttonGroupVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 200 },
  },
};


declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export const ChatSideBar: React.FC = () => {

  const API_BASE_URL = VITE_API_BASE_URL;

   const setClaim = useClaimStore((state) => state.setClaim);
   const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

     const isListening = useClaimStore((state) => state.isListening);
     const setIsListening = useClaimStore((state) => state.setIsListening);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleEyeBtnClick = () => {
    toast.success("Show/hide bar");
  };

  const handleTextToSpeech = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

      if (SpeechRecognition) {
          const recognition = new SpeechRecognition();
          recognition.interimResults = true;

          recognition.addEventListener("start", () => {
              // When listening starts
              setIsListening(true);
          });

          recognition.addEventListener("end", () => {
              // When listening stops
              setIsListening(false);
          });

          recognition.addEventListener("result", (e:any) => {
              const transcript = Array.from(e.results)
                  .map((result:any) => result[0])
                  .map((result) => result.transcript)
                  .join("");

              // Update the input field with the transcript
              setClaim(transcript);
              console.log(transcript);
          });

          recognition.start();
      } else {
          alert("Your browser does not support Speech Recognition.");
      }
  };

  const handleLinkBtnClick = () => {
    setClaim("James");
    toast.success("Generate Link");
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current?.click(); // Trigger hidden file input
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Olamide", API_BASE_URL);
    const file = event.target.files?.[0];
    if (!file) return;

    console.log("Selected file:", file);

    const formData = new FormData();
    formData.append("file", file); // `file` should match the parameter name in FastAPI

    try {
      const response = await axios.post(
        `${API_BASE_URL}/nlp/extract-text`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Extracted text:", response.data);
      setClaim(response.data.extracted_text);
      // You can also toast or display the response here
    } catch (error) {
      console.error("Upload error:", error);
      toast.success("Failed to upload the file.");
    }
  };

  return (
    <motion.div
      className="flex flex-col justify-between h-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <Interaction>
            <EyeIcon onClick={handleEyeBtnClick}  />
        </Interaction>
      </motion.div>

      <motion.div
        className="bg-surface-light dark:bg-surface-dark py-4 px-2 rounded-[40px] flex flex-col gap-4 overflow-hidden"
        variants={buttonGroupVariants}
      >
        <motion.div variants={itemVariants}>
          <Interaction>
            <AddIcon onClick={handleUploadButtonClick} 
              className="text-black dark:text-[#292D32]" 
              />
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
              />
          </Interaction>
        </motion.div>

        {isAuthenticated ? (
           <motion.div variants={itemVariants}>
              <Interaction>
                <AttachIcon onClick={handleLinkBtnClick} />
              </Interaction>
            </motion.div>
        ) : (
          // <p className="text-red-600">❌ Not authenticated</p>
           <></>
        )}

        <motion.div variants={itemVariants}>
          {isListening ? (
                <div title="Actively Listening">
                  <Interaction>
                      <MicIcon className="animate-pulse" />
                  </Interaction>
                </div>
          ) : (
                <div title="Click to Listen">
                  <Interaction>
                    <MicIcon onClick={handleTextToSpeech} />
                  </Interaction>
                </div>
            )
            }
        </motion.div>
      </motion.div>

      <div></div>
    </motion.div>
  );
};
