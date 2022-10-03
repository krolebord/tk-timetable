import { themeStore } from "../stores/themeStore"

themeStore.subscribe((theme) => {
  const isDark = theme === "dark" || !theme && window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.classList.toggle("dark", isDark);
})
