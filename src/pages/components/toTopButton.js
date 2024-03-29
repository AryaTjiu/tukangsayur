import { useEffect, useRef } from "react";

const { faChevronUp } = require("@fortawesome/free-solid-svg-icons");
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");

function ToTopButton() {
    const scrollToTop = () => {
        window.scrollTo({top:0, behavior:"smooth"});
    }

    const topButton = useRef();

    useEffect(() => {
        const toTopFunction = () => {
            if(window.scrollY > 100) {
                topButton.current.style.opacity = "1";
            } else {
                topButton.current.style.opacity = "0";
            }
        }
        window.addEventListener("scroll", toTopFunction)

        return () => {
            window.removeEventListener('scroll', toTopFunction)
        }
    }, [])

    return (
        <button className="fixed bottom-10 right-10 md:bottom-20 md:right-20 bg-neutral-900 hover:bg-neutral-950 hover:scale-90 transition-transform w-[9vh] md:w-[7vh] h-[9vh] md:h-[7vh] rounded-full flex justify-center items-center text-white text-3xl z-50" onClick={scrollToTop} ref={topButton} style={{ transition : "300ms" }}>
            <FontAwesomeIcon icon={faChevronUp}/>
        </button>
    )
}

export default ToTopButton;