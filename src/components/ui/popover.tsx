import type React from "react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface IPopoverProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  children: React.ReactNode;
  isOpen: boolean;
}

export const Popover: React.FC<IPopoverProps> = (props) => {
  const { anchorEl, onClose, children, isOpen } = props;

  const [popoverWidth] = useState(224);

  if (!anchorEl) return null;

  // Get anchor element position
  const anchorRect = anchorEl.getBoundingClientRect();

  // Calculate position - right-aligned with the avatar
  const rightPosition = window.innerWidth - anchorRect.right + anchorRect.width;
  const topPosition = anchorRect.bottom;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-backdrop-light dark:bg-backdrop-light z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
      )}

      {isOpen && (
        <motion.div
          className="fixed z-50 bg-transparent"
          style={{
            // Position near the anchor element
            top: topPosition,
            right: rightPosition,
            width: popoverWidth,
            transformOrigin: "top right",
          }}
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -10 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
