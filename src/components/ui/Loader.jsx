
function Loader() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <img className="w-20 h-20" src="/main-loader.gif" alt="loader-jcb" />
            <h1 className="mt-4 text-gray-700 dark:text-gray-500 text-lg font-bold">
                Please Wait...
            </h1>
        </div>
    )
}

export default Loader