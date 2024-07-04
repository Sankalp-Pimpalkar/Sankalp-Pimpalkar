import { NavLink } from "react-router-dom"
import Button from "./ui/Button"
import { useState } from "react"

const navs = [
    {
        id: 1,
        name: "Home",
        path: "/",
        icon: "/house.png",
        className: "w-5 h-5"
    },
    {
        id: 2,
        name: "About",
        path: "/about",
        icon: "/about.png",
        className: "w-5 h-5"
    },
    {
        id: 3,
        name: "Github",
        path: "https://github.com/Sankalp-Pimpalkar",
        icon: "/github.png",
        className: "w-5 h-5 dark:invert"
    }
]

function Navbar() {

    const [isdarkMode, setIsDarkMode] = useState(true)

    function handleTheme() {

        const htmlElement = document.getElementsByTagName("html")[0].classList;

        if (htmlElement.contains("dark")) {
            htmlElement.replace("dark", "light");
            setIsDarkMode(false);
        } else {
            htmlElement.replace("light", "dark");
            setIsDarkMode(true);
        }
    }

    return (
        <nav>
            <div className="w-full max-w-2xl mx-auto flex gap-4 sm:flex-row items-center justify-between">
                <ul className="flex items-center gap-3">
                    {
                        navs.map(nav => (
                            <li key={nav.id}>
                                <NavLink to={nav.path} className={({ isActive }) => (
                                    `dark:hover:bg-gray-secondary hover:bg-gray-200 w-fit p-2 rounded-md border dark:border-gray-secondary border-gray-300 text-gray-700 dark:text-gray-300 transition-all duration-300 flex items-center gap-2
                                    ${isActive && 'dark:bg-gray-secondary bg-gray-200 dark:text-gray-100 text-gray-600'}
                                    `
                                )}>
                                    <img className={nav.className} src={nav.icon} alt="navIcon" />
                                    <p>{nav.name}</p>
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>

                <Button onClick={handleTheme} className="gap-0 block rounded-[30rem] px-2 py-2">
                    {
                        isdarkMode ?
                            (
                                <img className="w-5 h-5" src="/sun.png" alt="light-mode" />
                            ) :
                            (
                                <img className="w-5 h-5" src="/moon.png" alt="dark-mode" />
                            )
                    }
                </Button>
            </div>
        </nav>
    )
}

export default Navbar