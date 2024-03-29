import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

function Section2() {
    return (
        <section className="py-20 px-10 md:px-20 lg:px-36 2xl:px-72 flex flex-col items-center justify-center bg-green-500 min-h-screen text-white space-y-10 lg:space-y-20">
            <h1 className="text-4xl font-semibold">Keuntungan yang kami berikan</h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12">
                <div className="w-full 2xl:w-[30vh] bg-white bg-opacity-90 rounded-xl lg:rounded-3xl overflow-hidden" data-aos="fade-up">
                    <div className="py-5 2xl:py-10 text-neutral-700 text-5xl 2xl:text-[60px] flex items-center justify-center">
                        <FontAwesomeIcon icon={faTruck}/>
                    </div>
                    <div className="text-center text-black p-[0.6rem] md:p-5">
                        <h4 className="text-base md:text-lg">Pengiriman cepat</h4>
                        <p className="text-sm text-neutral-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, eos!</p>
                    </div>
                </div>
                <div className="w-full 2xl:w-[30vh] bg-white bg-opacity-90 rounded-xl lg:rounded-3xl overflow-hidden" data-aos="fade-up" data-aos-delay="100">
                    <div className="py-5 2xl:py-10 text-neutral-700 text-5xl 2xl:text-[60px] flex items-center justify-center">
                        <FontAwesomeIcon icon={faTruck}/>
                    </div>
                    <div className="text-center text-black p-[0.6rem] md:p-5">
                        <h4 className="text-base md:text-lg">Pengiriman cepat</h4>
                        <p className="text-sm text-neutral-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, eos!</p>
                    </div>
                </div>
                <div className="w-full 2xl:w-[30vh] bg-white bg-opacity-90 rounded-xl lg:rounded-3xl overflow-hidden" data-aos="fade-up" data-aos-delay="180">
                    <div className="py-5 2xl:py-10 text-neutral-700 text-5xl 2xl:text-[60px] flex items-center justify-center">
                        <FontAwesomeIcon icon={faTruck}/>
                    </div>
                    <div className="text-center text-black p-[0.6rem] md:p-5">
                        <h4 className="text-base md:text-lg">Pengiriman cepat</h4>
                        <p className="text-sm text-neutral-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, eos!</p>
                    </div>
                </div>
                <div className="w-full 2xl:w-[30vh] bg-white bg-opacity-90 rounded-xl lg:rounded-3xl overflow-hidden" data-aos="fade-up" data-aos-delay="240">
                    <div className="py-5 2xl:py-10 text-neutral-700 text-5xl 2xl:text-[60px] flex items-center justify-center">
                        <FontAwesomeIcon icon={faTruck}/>
                    </div>
                    <div className="text-center text-black p-[0.6rem] md:p-5">
                        <h4 className="text-base md:text-lg">Pengiriman cepat</h4>
                        <p className="text-sm text-neutral-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, eos!</p>
                    </div>
                </div>
                <div className="w-full 2xl:w-[30vh] bg-white bg-opacity-90 rounded-xl lg:rounded-3xl overflow-hidden" data-aos="fade-up" data-aos-delay="320">
                    <div className="py-5 2xl:py-10 text-neutral-700 text-5xl 2xl:text-[60px] flex items-center justify-center">
                        <FontAwesomeIcon icon={faTruck}/>
                    </div>
                    <div className="text-center text-black p-[0.6rem] md:p-5">
                        <h4 className="text-base md:text-lg">Pengiriman cepat</h4>
                        <p className="text-sm text-neutral-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, eos!</p>
                    </div>
                </div>
                <div className="w-full 2xl:w-[30vh] bg-white bg-opacity-90 rounded-xl lg:rounded-3xl overflow-hidden" data-aos="fade-up" data-aos-delay="280">
                    <div className="py-5 2xl:py-10 text-neutral-700 text-5xl 2xl:text-[60px] flex items-center justify-center">
                        <FontAwesomeIcon icon={faTruck}/>
                    </div>
                    <div className="text-center text-black p-[0.6rem] md:p-5">
                        <h4 className="text-base md:text-lg">Pengiriman cepat</h4>
                        <p className="text-sm text-neutral-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, eos!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2;