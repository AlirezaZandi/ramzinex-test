import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

type ThemeContextType = {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider = (props: PropsWithChildren) => {
  const [theme, setThemeState] = useState<"light" | "dark">(() => {
    const theme = localStorage.getItem("theme") as "light" | "dark";
    return theme || "light";
  });

  const setTheme = (theme: "light" | "dark") => {
    localStorage.setItem("theme", theme);
    setThemeState(theme);
  };

  useEffect(() => {
    if (theme === "dark") {
      // add to html tag
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
