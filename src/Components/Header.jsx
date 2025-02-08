import React, {useEffect, useState} from "react"
import Typed from 'typed.js'
import { Menu } from "./icons/Menu"
import { Sun } from "./icons/Sun"
import { Moon } from "./icons/Moon"

function Header() {
    const [navOpen, setNavOpen] = useState(false);

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

    useEffect(() => {
        const options = {
          strings: ['Bouzir', 'Jawad', 'JUUBUU'],
          typeSpeed: 60,
          backSpeed: 30,
          loop: true,
        }
        const typed = new Typed('.typing1', options)
        return () => typed.destroy()
      }, [])

    const scrollToSection = (id, factor = 1) => {
        const el = document.getElementById(id)
        if (el) {
          const offset = el.offsetTop / factor
          window.scrollTo({ top: offset, behavior: 'smooth' })
        }
      }

    return(
        <header className="w-[95%] sm:w-[75%] mx-auto rounded-xl mainDiv">
            <nav className="flex items-center p-4 flex-wrap">
                    <div className="self-start pt-2 basis-1/2 xl:basis-1/6">
                        <span className="typing1 text-blue-700 dark:text-amber-300"></span>'s Portfolio
                    </div>
                    <div className="ml-auto lg:grow-0 flex justify-end basis-1/2">
                        <button onClick={()=> setNavOpen(!navOpen)} className="m-0 mr-2 text-3xl p-1 border block xl:hidden"><Menu className="my-0"/></button>

                        <button className="text-3xl p-0 m-0 lg:mr-2" onClick={() => setDarkMode(!darkMode)}>{ darkMode ? <Moon /> : <Sun />}</button>
                    </div>
                    <div className={`xl:flex xl:items-center ${navOpen ? 'block' : 'hidden'}`}>
                        <ul className="xl:flex xl:space-x-4 xl:items-center ml-3 xl:ml-auto mr-4">
                            <li>
                                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 hover:underline" 
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</a>
                            </li>
                            <li>
                                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 hover:underline" 
                                    onClick={() => scrollToSection('myAboutMeSection', 1.02)}>About</a>
                            </li>
                            <li>
                                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 hover:underline" 
                                    onClick={() => scrollToSection('myProjectsSection', 1.05)}>Projects</a>
                            </li>
                            <li className="mt-1.5 xl:mt-0">
                                <button className="primary-btn" 
                                onClick={() => scrollToSection('myContactMeSection', 1.05)}>Contact me</button>
                            </li>
                        </ul>
                    </div>
            </nav>
        </header>
    );
}

export default Header