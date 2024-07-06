import { projects, skills } from "../data/data"

function Home() {

    return (
        <main>
            <section className="mt-28 sm:mt-16 flex flex-col gap-4 items-start sm:flex-row-reverse sm:items-center justify-between">
                <img className="w-32 h-32 my-2" src="./enderman.gif" alt="enderman" />

                <span>
                    <h1 className="text-3xl font-bold dark:text-gray-200 text-gray-800">
                        Hey, I&apos;m Sankalp
                    </h1>
                    <p className="w-full max-w-sm mt-2 font-medium dark:text-gray-200 text-gray-600 text-lg leading-relaxed">
                        I&apos;m a Full Stack Developer who has a dream to be a senior software engineer one day 👨‍🎓
                    </p>
                </span>
            </section>

            <section className="mt-8">
                <h3 className="text-xl font-bold dark:text-gray-200 text-gray-600">
                    Specialties
                </h3>

                <ul className="flex flex-col sm:flex-row flex-wrap gap-2 mt-4 items-start">
                    {
                        skills.map(skill => (
                            <li key={skill.description} className="flex items-center gap-2 md:border border-gray-300 dark:md:border-gray-secondary md:p-3 rounded-lg w-full md:max-w-xs h-full md:h-20">
                                <i className={`${skill.iconClass} text-3xl`} alt="skillIcon" />
                                <p className="text-base font-medium dark:text-gray-200 text-gray-700">
                                    {skill.description}
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </section>

            <section className="mt-8">
                <h3 className="text-xl font-bold dark:text-gray-200 text-gray-600">
                    My Work
                </h3>

                <ul className="flex flex-col sm:flex-row flex-wrap gap-2 mt-4 items-start">
                    {
                        projects.map(project => (
                            <li key={project.id} className="dark:bg-gray-secondary bg-gray-200 p-4 rounded-lg w-full sm:max-w-xs border dark:border-gray-tertiary border-gray-300">
                                <p className="font-mono text-green-500 text-lg">
                                    {project.year}
                                </p>
                                <h3 className="text-xl font-bold mt-2 dark:text-gray-200 text-gray-800">
                                    {project.title}
                                </h3>
                                <p className="mt-2 dark:text-gray-300 text-gray-600">
                                    {project.description}
                                </p>

                                <div className="mt-4 flex items-center gap-3">
                                    <a
                                        href={project.source}
                                        className="dark:text-gray-300 text-gray-800 bg-gray-300 font-medium dark:hover:border-gray-300/0 hover:bg-gray-100 dark:hover:bg-gray-300/10 w-fit px-2 py-1 rounded-md border dark:border-gray-dark dark:bg-gray-dark transition-all duration-300 flex items-center gap-2 text-base">
                                        Source
                                    </a>
                                    <a
                                        href={project.demo}
                                        className="dark:text-gray-300 text-gray-800 bg-gray-300 font-medium dark:hover:border-gray-300/0 hover:bg-gray-100 dark:hover:bg-gray-300/10 w-fit px-2 py-1 rounded-md border dark:border-gray-dark dark:bg-gray-dark transition-all duration-300 flex items-center gap-2 text-base">
                                        Demo
                                    </a>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </main>
    )
}

export default Home