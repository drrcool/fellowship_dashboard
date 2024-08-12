"use client";
import { useTheme } from "next-themes";
import { RiSunFill, RiMoonFill } from "@remixicon/react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const Icon = theme === "light" ? RiMoonFill : RiSunFill;
  return (
    <Icon
      size={20}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    />
  );
};

export default ThemeToggle;
