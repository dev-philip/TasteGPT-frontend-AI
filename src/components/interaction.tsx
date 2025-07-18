import { forwardRef, type ButtonHTMLAttributes } from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import clsx from "clsx";

type InteractionProps = {
  className?: string;
  children: React.ReactNode;
} & HTMLMotionProps<"button"> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const Interaction = forwardRef<HTMLButtonElement, InteractionProps>(
  (props, ref) => {
    const {
      className,
      children,
      whileHover = { scale: 1.05 },
      whileTap = { scale: 0.95 },
      type = "button",
      ...others
    } = props;

    return (
      <motion.button
        ref={ref}
        whileHover={whileHover}
        whileTap={whileTap}
        className={clsx("bg-transparent font-medium cursor-pointer", className)}
        type={type}
        {...others}
      >
        {children}
      </motion.button>
    );
  }
);
