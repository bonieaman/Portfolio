export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function absoluteUrl(path: string, baseUrl: string) {
  try {
    return new URL(path, baseUrl).toString();
  } catch {
    return path;
  }
}

export function formatList(items: string[]) {
  return items.filter(Boolean).join(" · ");
}

export function isExternalUrl(href: string) {
  return /^(https?:|mailto:)/.test(href);
}

export function isHttpUrl(href: string) {
  return /^https?:\/\//.test(href);
}
