import Script from "next/script";

export function ThemeScript() {
  const code = `
(() => {
  try {
    const stored = localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = stored === "light" || stored === "dark" || stored === "system" ? stored : "system";
    const resolved = theme === "system" ? (systemDark ? "dark" : "light") : theme;
    document.documentElement.classList.toggle("dark", resolved === "dark");
    document.documentElement.style.colorScheme = resolved;
  } catch {}
})();
`;

  return (
    <Script
      id="theme-script"
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
}
