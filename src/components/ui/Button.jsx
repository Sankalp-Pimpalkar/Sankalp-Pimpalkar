/* eslint-disable react/prop-types */

function Button({ children, className = "", ...props }) {
    return (
        <button className={`dark:hover:border-gray-300/0 hover:bg-gray-100 dark:hover:bg-gray-300/10 w-fit px-2 py-1 rounded-md border dark:border-gray-dark dark:bg-gray-dark transition-all duration-300 flex items-center gap-2 text-base ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button