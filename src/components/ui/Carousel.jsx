/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Carousel({ children, className = "" }) {

    const carouselRef = useRef(null);
    const [showPrev, setShowPrev] = useState(false);
    const [showNext, setShowNext] = useState(true);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setShowPrev(scrollLeft > 0);
            setShowNext(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const handleResize = () => {
        handleScroll();
    }

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            carousel.addEventListener('scroll', handleScroll);
            window.addEventListener('resize', handleResize);

            // Initial check
            handleScroll();
            return () => {
                carousel.removeEventListener('scroll', handleScroll);
                window.removeEventListener('resize', handleResize);
            };
        }
    }, [children]);


    return (
        <div className={`relative w-full max-w-xl ${className}`}>
            {showPrev && (
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-400/80 dark:bg-gray-secondary/80 px-1.5 py-1 rounded-full shadow-md z-10"
                >
                    <ChevronLeft width={20} />
                </button>
            )}
            <ul
                ref={carouselRef}
                className="flex items-center gap-3 overflow-x-auto mt-1 sm:mt-0 hide-scrollbar snap-x"
            >
                {children}
            </ul>
            {showNext && (
                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-400/80 dark:bg-gray-secondary/80 px-1.5 py-1 rounded-full shadow-md z-10"
                >
                    <ChevronRight width={20} />
                </button>
            )}
        </div>
    )
}

export default Carousel