/* eslint-disable react/prop-types */
import { useState } from "react"

function Work({ companyName, role, companylocation, description, respAndAchievements = [], skillUtilized = [] }) {

    const [showState, setShowState] = useState(false)

    return (
        <div className="border rounded-md dark:bg-gray-secondary bg-gray-200 dark:border-gray-tertiary border-gray-300 p-4 w-full">
            <div className="flex flex-col gap-4 items-start md:flex-row md:items-center md:gap-0 justify-between">
                <span>
                    <h3 className="text-xl mb-2 font-bold dark:text-gray-200 text-gray-600">
                        {companyName}
                    </h3>
                    <h4 className="text-lg mb-1 dark:text-green-500 text-green-600 font-medium">
                        {role}
                    </h4>
                    <h4 className="text-gray-600 dark:text-gray-300">
                        {companylocation}
                    </h4>
                </span>

                <button className="dark:text-gray-300 text-gray-800 bg-gray-300 font-medium dark:hover:border-gray-300/0 hover:bg-gray-100 dark:hover:bg-gray-300/10 px-2 py-1 rounded-md border dark:border-gray-dark dark:bg-gray-dark transition-all duration-300 flex items-center gap-2 text-base mr-2"
                    onClick={() => setShowState(!showState)}
                >
                    {
                        showState ? "Show less" : "Show more"
                    }
                </button>
            </div>

            <div className={`mt-6 ${showState ? "block" : "hidden"}`}>
                <h3 className="text-base mb-1 font-medium dark:text-gray-200 text-gray-600">
                    Company description
                </h3>

                <p className="text-base mb-4 font-medium dark:text-gray-400 text-gray-500">
                    {description}
                </p>

                <h3 className="text-base mb-1 font-medium dark:text-gray-200 text-gray-600">
                    Responsibilities & Achievements
                </h3>

                <ul className="list-disc dark:text-gray-400 text-gray-500 px-5 mb-4 flex flex-col gap-2">
                    {
                        respAndAchievements.map((item, index) => (
                            <li key={index}>
                                {item}
                            </li>
                        ))
                    }
                </ul>

                <h3 className="text-base mb-1 font-medium dark:text-gray-200 text-gray-600">
                    Skill Utilized
                </h3>

                <ul className="list-disc dark:text-gray-400 text-gray-500 px-5 mb-2 flex flex-col gap-2">
                    {
                        skillUtilized.map((item, index) => (
                            <li key={index}>
                                {item}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Work