import Image from "next/image";
import one from "../Images/1.jpg";
import four from "../Images/4.jpg";
import five from "../Images/5.jpg";

const Main = () =>{
    return(
        <div>
            <main>
                <div className="flex h-96 mt-10">
                    <div className="mx-10">
                        <Image width={384} height={384} src={one} alt="GIAIC"></Image>
                    </div>
                    <div className="mx-10">
                        <Image width={384} height={384} src={one} alt="GIAIC"></Image>
                    </div>
                    <div className="mx-10">
                        <Image width={384} height={384} src={one} alt="GIAIC"></Image>
                    </div>
                </div>
                <div className="flex h-[35rem] mt-10">
                    <div className="bg-lue-700 mx-4 my-2">
                        <Image width={600} height={1000} src={four} alt="GIAIC"></Image>
                    </div>
                    <div className="bg-ed-700 mx-4 my-2">
                        <Image width={600} height={1000} src={five} alt="GIAIC"></Image>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Main;