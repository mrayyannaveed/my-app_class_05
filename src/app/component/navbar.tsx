import Link from "next/link";
import Image from "next/image";
import giaicLogo from "../Images/giaicLogo.jpg";

const Navbar = () => {
    return(
        <div>
            <nav className="bg-green-700 h-[100px] w-full flex items-center">
                <div className="w-96 h-8 ml-10">
                    <Image width={100} height={100} src={giaicLogo} alt="GIAIC"></Image>
                </div>
                <div>
                    <h1 className="text-white text-xl m-2 font-bold">Tution Free Educaion Program</h1>
                </div>
                <div className="flex justify-end gap-5 w-2/5 items-center">
                    <div className="bg-purple-300 w-20 h-8 rounded-xl text-center font-bold hover:bg-red-100 cursor-pointer">
                        <Link href="/">Home</Link>
                    </div>
                    <div className="bg-yellow-300 w-20 h-8 rounded-xl text-center font-bold hover:bg-red-100 cursor-pointer">
                    <Link href="/about">About</Link>
                    </div>
                    <div className="bg-green-300 w-20 h-8 rounded-xl text-center font-bold hover:bg-red-100 cursor-pointer">
                    <Link href="/services">Services</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;