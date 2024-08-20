"use client"

import backgroundImage from "@/assets/images/wa-calling-bg.png"
import * as animationData from '@/assets/animations/lottie/call-action.json'
import Spacer from "@/components/spacer";
import Lottie from "lottie-react";
import Link from "next/link";

const WaCallingScreen: React.FC = () => {
    return (
        <div className="container flex-col flex items-center justify-center bg-black w-full h-full pt-[200px]" style={
            {
                backgroundImage: `url(${backgroundImage.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }
        }>
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
