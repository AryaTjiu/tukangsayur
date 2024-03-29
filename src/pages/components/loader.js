import Image from "next/image";
import { useEffect, useRef } from "react";

function Loader() {
    const loaderRef = useRef();

    useEffect(() => {
        const handleLoad = () => {    
            setTimeout(() => {
                loaderRef.current.style.opacity = 0;
    
                setTimeout(() => {
                    loaderRef.current.style.visibility = 'hidden';
                    loaderRef.current.classList.add("hidden")
                }, 500)
            }, 1000)    
        }

        handleLoad();

        if(typeof window !== 'undefined') {
            window.addEventListener("load", handleLoad);
    
            return (() => {
                window.removeEventListener("load", handleLoad);
            })
        }
    }, [])

    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-white fixed top-0 left-0 z-[100]" ref={loaderRef} style={{ transition : '500ms' }}>
            <div className="flex flex-col justify-center items-center">
                <div className="relative w-[15vh] h-[15vh]">
                    <Image src={'/image/loader/loader.svg'} layout="fill"/>
                </div>
                <span className="text-xl">Loading...</span>
            </div>
        </div>
    )
}

export default Loader;