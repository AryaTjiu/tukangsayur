import Link from "next/link";

const TextBanner = ({title,text, url, textUrl}) => {
    return (
        <section className="py-10 px-10 md:px-20 lg:px-36 2xl:px-96 bg-neutral-100 w-full min-h-[55vh] md:h-[35vh] flex flex-col justify-center items-center text-center space-y-5">
            <h1 className="text-green-500 text-2xl md:text-3xl font-semibold" data-aos="fade-up">{title}</h1>
            <p className="text-neutral-800" data-aos="fade-up" data-aos-delay="100">{text}</p>
            <Link href={url}>
                <button className="hover:text-green-500 duration-200 flex flex-col items-center justify-center space-y-1 group" data-aos="fade-up" data-aos-delay="200">
                    <span>
                        {textUrl}
                    </span>
                    <div className="w-full h-[2px] bg-green-500 group-hover:w-[50%] group-hover:bg-green-300 duration-200"></div>
                </button>
            </Link>
        </section>
    )
}

export default TextBanner;