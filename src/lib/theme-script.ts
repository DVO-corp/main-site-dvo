export const THEME_STORAGE_KEY = "dvo-theme";

/**
 * Injected into <head> and executed before first paint so the stored theme is
 * applied without a flash of the wrong palette.
 *
 * It lives in a server-safe module (no "use client") because layouts and the
 * 404 page are server components and need the raw string, not a client
 * reference.
 */
export const themeInitScript = `
(function(){
  // Marks the document as scripted before first paint. Scroll reveals hide
  // themselves only under this class, so a no-JS visitor sees every section.
  document.documentElement.classList.add("js");
  try {
    // Dark is the brand default: only an explicit "light" choice overrides it,
    // the OS preference does not.
    var stored = localStorage.getItem("${THEME_STORAGE_KEY}");
    var theme = stored === "light" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  } catch (e) {
    document.documentElement.classList.add("dark");
  }
})();
`.trim();
