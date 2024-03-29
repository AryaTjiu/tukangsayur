import { faApple, faFacebook, faGooglePay, faGooglePlay, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Footer() {
    return <footer className="bg-green-500 text-black">
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-5 md:place-items-center p-10 px-10 2xl:p-32 2xl:px-96 scroll-smooth">
            <ul>
                <li>
                    <Link href={"#"} className="hover:text-white duration-200">
                        Tentang Kami
                    </Link>
                </li>
                <li>
                    <Link href={"#"} className="hover:text-white duration-200">
                        Karir
                    </Link>
                </li>
                <li>
                    <Link href={"#"} className="hover:text-white duration-200">
                        Supplier
                    </Link>
                </li>
                <li>
                    <Link href={"#"} className="hover:text-white duration-200">
                        Food Safety
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href={"#"} className="hover:text-white duration-200">
                        Kontak
                    </Link>
                </li>
                <li>
                    <Link href={"#"} className="hover:text-white duration-200">
                        Informasi pengiriman
                    </Link>
                </li>
                <li>
                    <Link href={"#"} className="hover:text-white duration-200">
                        FAQ
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href={"#"} className="hover:text-white duration-200 flex space-x-2 items-center">
                        <FontAwesomeIcon icon={faInstagram}/>
                        <span>Instagram</span>
                    </Link>
                </li>
                <li>
                    <Link href={"#"} className="hover:text-white duration-200 flex space-x-2 items-center">
                        <FontAwesomeIcon icon={faTwitter}/>
                        <span>Twiter</span>
                    </Link>
                </li>
                <li>
                    <Link href={"#"} className="hover:text-white duration-200 flex space-x-2 items-center">
                        <FontAwesomeIcon icon={faFacebook}/>
                        <span>Facebook</span>
                    </Link>
                </li>
                <li>
                    <Link href={"#"} className="hover:text-white duration-200 flex space-x-2 items-center">
                        <FontAwesomeIcon icon={faYoutube}/>
                        <span>Youtube</span>
                    </Link>
                </li>
            </ul>
            <ul className="space-y-3">
                <li>
                    Dapatkan aplikasi
                </li>
                <li>
                    <Link href={"#"}>
                        <div className="flex items-center bg-black rounded-2xl w-fit px-5 hover:bg-opacity-80 text-white duration-200">
                            <div className="p-3">
                                <FontAwesomeIcon icon={faApple} className="text-[30px]"/>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm">
                                    Download on the
                                </span>
                                <span className="text-lg">
                                    App Store
                                </span>
                            </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href={"#"}>
                        <div className="flex items-center bg-black rounded-2xl w-fit px-5 hover:bg-opacity-80 text-white duration-200">
                            <div className="p-3">
                                <FontAwesomeIcon icon={faGooglePlay} className="text-[30px]"/>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm">
                                    Download on the
                                </span>
                                <span className="text-lg">
                                    Google play
                                </span>
                            </div>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="px-10 lg:px-36 2xl:px-96 pb-5 flex justify-between">
            <span className="text-sm">
                &copy; 2024 FRESH LIFE ORGANICS. ALL RIGHTS RESERVED
            </span>
            <Link href={"#"} className="hover:text-white duration-200">
                PRIVACY POLICY
            </Link>
        </div>
    </footer>
}

export default Footer;