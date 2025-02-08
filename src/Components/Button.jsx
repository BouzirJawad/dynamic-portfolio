import React,{useState, useEffect} from "react";
import { ArrowDown } from "./icons/Arrow";

function Button() {
  const [isOpen, setIsOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });
  
    useEffect(() => {
      const root = document.documentElement;
      if (darkMode) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }

      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);

  return (
    <>
      <div className="h-screen parent">
        <div>
        <div className="drop-menu" >
          <div onClick={()=> setIsOpen(!isOpen)} className="cursor-pointer flex items-center justify-between">
            <span className="dark:text-white">Media</span>
            <ArrowDown className={isOpen ? 'rotate-180 text-2xl transition duration-400' : 'rotate-none text-2xl transition duration-400' }/>
            </div>
          {isOpen && (
          <div>
            <ul className="drop-menu-options absolute">
              <li>GitHub</li>
              <li>LinkedIn</li>
              <hr />
              <li>Contact me</li>
            </ul>
          </div>
          )}
        </div>
          <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-blue-500 text-white rounded focus:outline-none"
        >
          Toggle Dark Mode
        </button>

        </div>
      </div>
    </>
  );
}

export default Button;
