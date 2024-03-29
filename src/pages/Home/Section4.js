import {Swiper, SwiperSlide} from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Pagination, Navigation} from 'swiper/modules';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Section4() {
    const [slidePerView, setSlidePerView] = useState(3);
    const [spaceBetween, setSpaceBetween] = useState(40);

    useEffect(() => {
        const changeSlidePerView = () => {
            const screenWidth = window.innerWidth;
            if(screenWidth <= 640) {
                setSlidePerView(1);
                setSpaceBetween(0)
            } else if (screenWidth >= 768 && screenWidth <= 1280) {
                setSlidePerView(2)
                setSpaceBetween(10)
            } else if(screenWidth >= 1280) {
                setSlidePerView(3)
                setSpaceBetween(20)
            }
        }

        changeSlidePerView();
        if(typeof window !== 'undefined') {
            window.addEventListener("resize", changeSlidePerView);
    
            return () => {
                window.removeEventListener("resize", changeSlidePerView);
            }
        }
    }, [])

    return (
        <section className="px-10 lg:px-36 2xl:px-72 min-h-screen flex flex-col justify-center items-center space-y-24 text-center">
            <h1 className="text-4xl font-semibold">Produk yang kami jual</h1>
            <Swiper 
            slidesPerView={slidePerView}
            spaceBetween={spaceBetween}
            loop={true}
            pagination={{
                clickable : true
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper w-full h-[35vh] px-20 cursor-grab"
            >
                <SwiperSlide>
                    <Link href={"#"} className="cursor-pointer flex justify-center">
                        <div className="w-[30vh] h-[25vh] relative duration-200">
                            <Image src={"/image/milk.png"} alt="milk" layout="fill"/>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={"#"} className="cursor-pointer flex justify-center">
                        <div className="w-[30vh] h-[25vh] relative duration-200">
                            <Image src={"/image/meat.png"} alt="meat" layout="fill"/>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={"#"} className="cursor-pointer flex justify-center">
                        <div className="w-[30vh] h-[25vh] relative duration-200">
                            <Image src={"/image/vegetable.png"} alt="vegetable" layout="fill"/>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={"#"} className="cursor-pointer flex justify-center">
                        <div className="w-[30vh] h-[25vh] relative duration-200">
                            <Image src={"/image/cookie.png"} alt="cookie" layout="fill"/>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={"#"} className="cursor-pointer flex justify-center">
                        <div className="w-[30vh] h-[25vh] relative duration-200">
                            <Image src={"/image/plate.png"} alt="plate" layout="fill"/>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={"#"} className="cursor-pointer flex justify-center">
                        <div className="w-[30vh] h-[25vh] relative duration-200">
                            <Image src={"/image/salt.png"} alt="salt" layout="fill"/>
                        </div>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Section4;