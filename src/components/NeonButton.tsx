import React from "react";
interface NeonButtonProps {
  children: React.ReactNode;
  variant?: "purple" | "red";
  href: string;
  className?: string;
  external?: boolean;
}
export default function NeonButton({
  children,
  variant = "purple",
  href,
  className = "",
  external = false,
}: NeonButtonProps) {
  const color =
    variant === "purple"
      ? "border-neon-purple text-white hover:bg-neon-purple/20"
      : "border-neon-red text-white hover:bg-neon-red/20";
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex min-h-12 items-center justify-center rounded-full border-2 px-6 py-3 text-center font-bold transition-colors ${color} ${className}`}
    >
      {children}
    </a>
  );
}
