"use client"

import backgroundImage from "@/assets/images/wa-in-call-bg.png"
import hungUpWa from "@/assets/images/hung-up-wa.png";
import Image from "next/image";
import Link from "next/link";
import NoiseReductionSlider from "@/components/noise-reduction-slider";

const WaInCallScreen: React.FC = () => {
    return (
        <div className="bg-black w-full h-full pb-8 pt-[200px] md:pb-10 overflow-hidden shadow-xl shadow-slate-700" style={
            {
                backgroundImage: `url(${backgroundImage.src})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }
        }>
            <NoiseReductionSlider />
            <div className="flex flex-col justify-end items-center pb-48 h-full">
                <Link href={'/'}>
                    <Image src={hungUpWa} alt="hung up WhatsApp button"></Image>
                </Link>
            </div>
        </div>
    );
}


export default WaInCallScreen;