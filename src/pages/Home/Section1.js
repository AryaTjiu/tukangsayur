import Image from "next/image";
import Link from "next/link";

function Section1() {
    return (
        <section className="px-10 md:px-20 lg:px-36 2xl:px-72 min-h-screen rounded-3xl w-full relative flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between py-20 md:p-10 space-y-10 md:space-y-0 md:space-x-20 xl:space-x-0">
            <div className="flex flex-col z-10 w-full lg:w-[47%] 2xl:w-[38%] space-y-5" data-aos="fade-up">
                <div>
                    <span className="hidden md:inline-block text-green-500">tukang sayur</span>
                    <h1 className="text-2xl lg:text-5xl font-bold">Lorem ipsum dolor sit amet</h1>
                </div>
                <p className="text-justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt iste, soluta consectetur alias placeat eum aspernatur facere inventore rem dicta minima nesciunt quidem. Rerum repudiandae distinctio, placeat numquam blanditiis labore.
                </p>
                <Link href={"#"}>
                    <div className="flex space-x-1 items-center hover:text-green-500 group duration-200">
                        <span>Read more</span>
                        <div className="w-0 group-hover:w-2 duration-200"></div>
                        <span>{'>>'}</span>
                    </div>
                </Link>
            </div>
            <div className="w-full lg:w-[47%] 2xl:w-[45%] h-[40vh] xl:h-[50vh] relative transition-none md:transition-all" data-aos="fade-up">
                <Image src={'/image/brocolli.png'} className="grayscale-[20%]" alt="tukang sayur" layout="fill"></Image>
            </div>
        </section>
    )
}

export default Section1;