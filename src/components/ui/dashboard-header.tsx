import { useRef, useState } from "react";
import { motion } from "motion/react";
import { CircleAvatar } from "./circle-avatar";
import { Popover } from "./popover";
import defaultAvatar from "@/assets/images/png/default_avatar.png";
import SearchIcon from "@/assets/images/svg/search.svg";
import { useAuthStore } from "@/store/auth";
import { ProfileMenu } from "./profile-menu";
import { Interaction } from "../interaction";
import { FullLogo } from "./full-logo";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useNavigate } from "react-router-dom";

import { useClaimStore } from "@/store/useClaimStore";

import { LinearLoader } from "@/features/chat/components/loaders";

// Animation variants
const headerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const DashboardHeader = () => {
   const isClaimLoading = useClaimStore((state) => state.isClaimLoading);
  const avatarRef = useRef<HTMLButtonElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuthStore();
   const navigate = useNavigate();

  const { logOut } = useAuth();

  return (
    <>
      <motion.div
        className="bg-surface-light dark:bg-surface-dark w-full"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[73px]">
          <motion.div className="flex justify-between items-center h-full">
            {/* Logo/Brand */}
            <motion.div variants={itemVariants}>
              <FullLogo />
            </motion.div>

            {/** Title? TODO: Clarify what this is from designer or timi */}
            <motion.div className="flex-1" variants={itemVariants}>
              <p className="text-text-light/70 dark:text-text-dark/70 text-sm text-center">
                TasteGPT – The Cultural Concierge
              </p>
            </motion.div>

            {/** Actions */}
            <motion.div
              className="flex flex-row items-center gap-6"
              variants={itemVariants}
            >
              {/** TODO: Wrap with Icon Button */}
              <SearchIcon className="text-text-light dark:text-text-dark" />

              <Interaction
                ref={avatarRef}
                onClick={() => {
                  if(!user){
                    navigate("/auth/login");
                  }
                  setIsMenuOpen((prev) => !prev)}
                }
                className="w-fit h-fit bg-transparent outline-none border-none"
                title={user ? "Profile" : "Login"}
                type="button"
                // disabled={!user}
              >
                <CircleAvatar src={defaultAvatar} size={32} />
              </Interaction>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {isClaimLoading && <LinearLoader />}

      {/* Popover Menu */}
      <Popover
        anchorEl={avatarRef.current}
        isOpen={isMenuOpen && Boolean(user)}
        onClose={() => {
          setIsMenuOpen(false)
        }}
      >
        <ProfileMenu user={user!} onLogout={logOut} />
      </Popover>
    </>
  );
};
