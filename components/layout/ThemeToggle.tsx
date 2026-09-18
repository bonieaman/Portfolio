"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/layout/ThemeProvider";
import { Button } from "@/components/ui/Button";

export function ThemeToggle() {
  const { resolvedTheme, mounted, toggleTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const label = mounted
    ? isDark
      ? "Switch to light mode"
      : "Switch to dark mode"
    : "Toggle color theme";

  return (
    <Button
      variant="ghost"
      onClick={toggleTheme}
      className="h-10 min-h-10 w-10 rounded-full px-0"
      aria-label={label}
      title={label}
      suppressHydrationWarning
    >
      {mounted && isDark ? (
        <Sun aria-hidden="true" size={18} />
      ) : (
        <Moon aria-hidden="true" size={18} />
      )}
    </Button>
  );
}
