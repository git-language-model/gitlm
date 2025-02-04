import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "@/components/Theme/theme-provider";

export function ModeToggle() {
    const { setTheme } = useTheme();
    const [theme, setLocalTheme] = useState(() => {
        const savedTheme = localStorage.getItem("vite-ui-theme");
        return savedTheme || "light";
    });

    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleToggle = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setLocalTheme(newTheme);
        setTheme(newTheme);
    };

    return (
        <>
            <Sun
                className={`h-5 w-5 absolute transition-transform duration-300 cursor-pointer ${theme === "light" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
                    }`}
                onClick={handleToggle}
            />
            <Moon
                className={`h-5 w-5 absolute transition-transform duration-300 cursor-pointer ${theme === "dark" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
                    }`}
                onClick={handleToggle}
            />
        </>
    );
}

export default ModeToggle;
