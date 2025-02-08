import React, {useEffect, useState} from "react";
import { Menu } from "./icons/Menu";
import { Sun } from "./icons/Sun";
import { Moon } from "./icons/Moon";

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

    return(
        <header className="w-[95%] mx-auto rounded-xl bg-gray-400 dark:bg-slate-600">
            <nav className="flex items-center p-4 flex-wrap">
                    <div className="self-start pt-2 basis-1/2 lg:basis-1/6">
                        JUUBUU's Portfolio
                    </div>
                    <div className="ml-auto grow lg:grow-0 flex justify-end basis-1/2">
                        <button onClick={()=> setNavOpen(!navOpen)} className="m-0 mr-2 text-3xl p-1 border block lg:hidden"><Menu className="my-0"/></button>

                        <button className="text-3xl p-0 m-0 lg:mr-2" onClick={() => setDarkMode(!darkMode)}>{ darkMode ? <Moon /> : <Sun />}</button>
                    </div>
                    <div className={`lg:flex lg:items-center ${navOpen ? 'block' : 'hidden'}`}>
                        <ul className="lg:flex lg:space-x-4 lg:items-center ml-auto mr-4">
                            <li>
                                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 hover:underline">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 hover:underline">About</a>
                            </li>
                            <li>
                                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 hover:underline">Projects</a>
                            </li>
                            <li>
                                <button className="primary-btn">Contact me</button>
                            </li>
                        </ul>
                    </div>
            </nav>
        </header>
    );
}

export default Header