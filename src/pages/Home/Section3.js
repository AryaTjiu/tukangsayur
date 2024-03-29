import Image from "next/image";

function Section3() {
    return(
        <section className="py-20 px-10 md:px-20 lg:px-36 2xl:px-72 flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-screen text-black space-y-5 lg:space-y-0">
            <div className="w-full lg:w-[40%] h-[35vh] relative rounded-xl overflow-hidden" data-aos="fade-rigth">
                <Image src={"/image/plantation.webp"} className="grayscale-[20%]" alt="plantation" layout="fill"/>
            </div>
            <div className="flex flex-col space-y-5 w-full lg:w-[45%] text-justify lg:text-right" data-aos="fade-left">
                <div className="flex flex-col">
                    <span className="text-green-500">Bogor, jawa barat</span>
                    <h1 className="text-4xl font-semibold">Dari perkebunan yang berkualitas</h1>
                </div>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur corporis harum tenetur debitis deserunt a reprehenderit tempore saepe est, deleniti aliquam ipsa laudantium rem porro suscipit perferendis cum! Magnam, architecto?
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita facilis corporis at aspernatur ipsam deserunt nam modi quisquam accusamus ab inventore cum impedit, numquam minus deleniti repellendus itaque nemo et in sapiente porro doloremque. Ipsa tenetur harum molestiae illo perferendis.
                </p>
            </div>
        </section>
    )
}

export default Section3;