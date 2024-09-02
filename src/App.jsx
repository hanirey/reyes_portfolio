import { createContext, useState, useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./sections/hero.jsx";
import About from "./sections/about.jsx";
import Projects from "./sections/projects.jsx";
import Tech from "./sections/tech.jsx";
import Footer from "./sections/footer.jsx";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.className = newTheme;
  };

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className={`App ${theme}`}>
          <div className="theme-changer">
            <button onClick={toggleTheme}>
              {theme === "dark" ? (
                <i className="fi fi-rr-night-day"></i>
              ) : (
                <i className="fi fi-ss-night-day"></i>
              )}
            </button>
          </div>
          <Hero />
          <About />
          <Projects />
          <Tech />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
