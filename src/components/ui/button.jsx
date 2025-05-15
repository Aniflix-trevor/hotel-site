import React from "react";

export function Button({
  children,
  className = "",
  variant = "default",
  ...props
}) {
  const base = "px-4 py-2 rounded-xl font-medium transition-all";
  const variants = {
    default: "bg-green-700 text-white hover:bg-green-800",
    outline: "border border-green-700 text-green-700 hover:bg-green-100",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
