(function () {
  "use strict";

  const storageKey = "editor-storage";
  const root = document.documentElement;

  let themeState = null;
  try {
    const persistedStateJSON = localStorage.getItem(storageKey);
    if (persistedStateJSON) {
      themeState = JSON.parse(persistedStateJSON)?.state?.themeState;
    }
  } catch (e) {
    console.warn("Theme initialization: Failed to read/parse localStorage:", e);
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const mode = themeState?.currentMode ?? (prefersDark ? "dark" : "light");

  const activeStyles =
    mode === "dark"
      ? {
          background: "#000",
          foreground: "#fff",
          ...(themeState?.styles?.dark || {}),
        }
      : {
          background: "#fff",
          foreground: "#000",
          ...(themeState?.styles?.light || {}),
        };

  const stylesToApply = [
    "background",
    "foreground",
    "border",
    "primary",
    "primary-foreground",
    "secondary",
    "secondary-foreground",
    "muted",
    "muted-foreground",
    "radius",
    "ring",
    "input",
    "card",
    "card-foreground",
  ];

  for (const styleName of stylesToApply) {
    const value = activeStyles[styleName];
    if (value !== undefined) {
      root.style.setProperty(`--${styleName}`, value);
    }
  }

  root.classList.remove("dark", "light");
  root.setAttribute("data-theme", mode);
})();
