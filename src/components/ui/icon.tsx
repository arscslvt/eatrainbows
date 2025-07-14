import { type IconName, icons } from "@/lib/supported-icons";
import { cx } from "class-variance-authority";
import { motion } from "motion/react";
import React from "react";

interface IconProps extends React.HTMLAttributes<HTMLImageElement> {
  name: IconName;
  size?: number;
  quality?: number; // Optional quality prop for Image component
}

export default function Icon({
  name,
  size = 24,
  className,
  quality = 90,
  ...props
}: IconProps) {
  return (
    <img
      src={icons[name].src}
      alt={name}
      width={size}
      height={size}
      className={cx("select-none pointer-events-none", className)}
      draggable={false}
      {...props}
    />
  );
}

export const MotionIcon = motion.create(Icon);
