import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [toggleTheme, setToggleTheme] = useState(() => {
    return localStorage.getItem("toggleTheme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("toggleTheme", toggleTheme);
    document.documentElement.setAttribute("data-bs-theme", toggleTheme);
  }, [toggleTheme]);

  const handleToggleTheme = () => {
    setToggleTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      className="btn btn-mode change-mode mr-15"
      onClick={handleToggleTheme}
      aria-label="Toggle Theme"
    >
      {toggleTheme === "light" ? (
        <img
          className="light-mode"
          src="/assets/imgs/template/icons/light.svg"
          alt="Light Mode"
        />
      ) : (
        <img
          className="dark-mode"
          src="/assets/imgs/template/icons/light-w-1.svg"
          alt="Dark Mode"
        />
      )}
    </button>
  );
}
