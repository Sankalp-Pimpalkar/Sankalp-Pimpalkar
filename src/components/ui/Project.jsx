/* eslint-disable react/prop-types */

const difficultyThemeClasses = {
    Easy: {
        background: 'bg-green-500 dark:bg-green-900',
        text: 'text-green-100 dark:text-green-400',
    },
    Intermediate: {
        background: 'bg-yellow-500 dark:bg-yellow-900',
        text: 'text-yellow-100 dark:text-yellow-400',
    },
    Hard: {
        background: 'bg-red-500 dark:bg-red-900',
        text: 'text-red-100 dark:text-red-400',
    },
    Advanced: {
        background: 'bg-purple-500 dark:bg-purple-900',
        text: 'text-purple-100 dark:text-purple-400',
    },
};

function Project({ id, year, title, description, source, demo, level }) {

    const difficultyTheme = difficultyThemeClasses[level];

    return (
        <div key={id} className="dark:bg-gray-secondary bg-gray-200 p-4 rounded-lg w-full sm:max-w-xs border dark:border-gray-tertiary border-gray-300">
            <p className="font-mono text-green-500 text-lg">
                {year}
            </p>
            <h3 className="text-xl font-bold mt-2 dark:text-gray-200 text-gray-800">
                {title}
            </h3>

            <h5 className={`w-fit text-xs mt-2 rounded-full px-3 py-1 dark:text- ${difficultyTheme.background} ${difficultyTheme.text}`} >
                {level}
            </h5>

            <p className="mt-2 dark:text-gray-300 text-gray-600">
                {description}
            </p>

            <div className="mt-4 flex items-center gap-3">
                <a
                    href={source}
                    className="dark:text-gray-300 text-gray-800 bg-gray-300 font-medium dark:hover:border-gray-300/0 hover:bg-gray-100 dark:hover:bg-gray-300/10 w-fit px-2 py-1 rounded-md border dark:border-gray-dark dark:bg-gray-dark transition-all duration-300 flex items-center gap-2 text-base">
                    Source
                </a>
                <a
                    href={demo}
                    className="dark:text-gray-300 text-gray-800 bg-gray-300 font-medium dark:hover:border-gray-300/0 hover:bg-gray-100 dark:hover:bg-gray-300/10 w-fit px-2 py-1 rounded-md border dark:border-gray-dark dark:bg-gray-dark transition-all duration-300 flex items-center gap-2 text-base">
                    Demo
                </a>
            </div>
        </div>
    )
}

export default Project