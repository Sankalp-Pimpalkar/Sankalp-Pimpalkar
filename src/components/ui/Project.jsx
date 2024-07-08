/* eslint-disable react/prop-types */

function Project({ id, year, title, description, source, demo }) {
    return (
        <div key={id} className="dark:bg-gray-secondary bg-gray-200 p-4 rounded-lg w-full sm:max-w-xs border dark:border-gray-tertiary border-gray-300">
            <p className="font-mono text-green-500 text-lg">
                {year}
            </p>
            <h3 className="text-xl font-bold mt-2 dark:text-gray-200 text-gray-800">
                {title}
            </h3>
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