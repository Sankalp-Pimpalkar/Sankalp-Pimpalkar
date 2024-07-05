/* eslint-disable react/prop-types */

function Link({ children, href, ...props }) {
    return (
        <a
            className="text-sky-500 hover:underline"
            target="_blank"
            href={href} {...props}>
            {children}
        </a>
    )
}

export default Link