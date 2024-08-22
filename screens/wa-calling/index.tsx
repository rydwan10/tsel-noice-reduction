"use client"

import backgroundImage from "@/assets/images/wa-calling-bg.png"
import * as animationData from '@/assets/animations/lottie/call-action.json'
import Spacer from "@/components/spacer";
import Lottie from "lottie-react";
import Link from "next/link";
import Image from "next/image";

const WaCallingScreen: React.FC = () => {
    return (
        <div className="container flex-col flex items-center justify-center w-full h-full pt-[200px] shadow-xl shadow-slate-700" style={
            {
                backgroundImage: `url(${backgroundImage.src})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }
        }>
            {/* <Image className="absolute" src={backgroundImage} alt="Wa Calling" /> */}
            <Spacer height={450} />
            <Link href='/wa-in-call'>
                <Lottie
                    animationData={animationData}
                    height={164}
                    width={164}
                />
            </Link>

        </div>
    );
}

export default WaCallingScreen;
