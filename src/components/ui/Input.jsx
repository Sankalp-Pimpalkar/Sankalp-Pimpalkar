/* eslint-disable react/prop-types */

function Input({ className = "", ...props }) {
    return (
        <input className={`bg-gray-300/30 rounded-md border dark:border-gray-dark dark:bg-gray-dark outline-none py-2 px-3 text-base text-gray-800 dark:text-gray-300 w-full caret-yellow-300 dark:focus:border-yellow-300 transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-300/10 ${className}`} type="text" {...props} />
    )
}

export default Input