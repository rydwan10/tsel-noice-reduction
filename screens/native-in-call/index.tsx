"use client"

import backgroundImage from "@/assets/images/in-call-screen.png"
import Image from "next/image"
import Link from "next/link"
import hungUpNative from "@/assets/images/hung-up-native.png"
import NoiseReductionSlider from "@/components/noise-reduction-slider";


const NativeInCallScreen: React.FC = () => {
    return (
        <div className=" bg-black w-full h-full pb-8 pt-[200px] md:pb-10 overflow-hidden" style={
            {
                backgroundImage: `url(${backgroundImage.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }
        }>
            <NoiseReductionSlider />
            <div className="flex flex-col justify-end items-center pb-48 h-full shadow-xl shadow-slate-700">
                <Link href={'/'}>
                    <Image src={hungUpNative} alt="hung up Native button"></Image>
                </Link>
            </div>
        </div>
    );
}

export default NativeInCallScreen
