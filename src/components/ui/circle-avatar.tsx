import React from "react";
import clsx from "clsx";

type PredefinedSize = "sm" | "md" | "lg" | "xl";
type Size = PredefinedSize | number;

type CircleAvatarProps = {
  src: string;
  alt?: string;
  size?: Size;
  className?: string;
};

const predefinedSizes: Record<PredefinedSize, string> = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-24 h-24",
};

export const CircleAvatar: React.FC<CircleAvatarProps> = ({
  src,
  alt = "Avatar",
  size = "md",
  className = "",
}) => {
  const isPredefined =
    typeof size === "string" && predefinedSizes[size as PredefinedSize];

  const sizeStyle = isPredefined ? predefinedSizes[size as PredefinedSize] : "";

  const customSizeStyle =
    !isPredefined && typeof size === "number"
      ? { width: size, height: size }
      : undefined;

  return (
    <img
      src={src}
      alt={alt}
      className={clsx("rounded-full object-cover", sizeStyle, className)}
      style={customSizeStyle}
    />
  );
};
