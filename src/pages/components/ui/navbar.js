import Link from "next/link";

function Navbar() {
    return <header className="w-full py-5 lg:py-7 px-10 md:px-20 lg:px-36 2xl:px-72 flex justify-between items-center z-40 bg-white shadow md:shadow-none absolute overflow-hidden">
        <h1 className="text-xl lg:text-3xl font-semibold text-green-500">Tukang sayur</h1>
        <ul className="hidden md:flex space-x-2 items-center">
            <li>
                <Link href={"#"} className="border-b-2 border-transparent hover:border-green-500 pb-0 hover:pb-2  hover:text-green-500 duration-200">
                    Tentang
                </Link>
            </li>
            <li>
                <Link href={"#"} className="border-b-2 border-transparent hover:border-green-500 pb-0 hover:pb-2  hover:text-green-500 duration-200">
                    Belanja
                </Link>
            </li>
            <li>
                <Link href={"#"} className="border-b-2 border-transparent hover:border-green-500 pb-0 hover:pb-2  hover:text-green-500 duration-200">
                    Kontak
                </Link>
            </li>
            <div className="w-[2px] h-5 bg-black"></div>
            <li>
                <Link href={"#"} className="border-b-2 border-transparent hover:border-green-500 pb-0 hover:pb-2  hover:text-green-500 duration-200">
                    Masuk
                </Link>
            </li>
            <li>
                <Link href={"#"} className="border-b-2 border-transparent hover:border-green-500 pb-0 hover:pb-2  hover:text-green-500 duration-200">
                    Daftar
                </Link>
            </li>
        </ul>
    </header>
}

export default Navbar;