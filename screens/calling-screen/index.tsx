"use client"

import backgroundImage from "@/assets/images/calling-screen.png"
import * as animationData from '@/assets/animations/lottie/call-action.json'
import Lottie from "lottie-react";
import Spacer from "@/components/spacer";
import Link from "next/link";

const CallingScreen: React.FC = () => {
    return (
        <div className="container flex-col flex items-center justify-center bg-black w-full h-full pt-[200px]" style={
            {
                backgroundImage: `url(${backgroundImage.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }
        }>
            <Spacer height={450} />
            <Link href='/in-call'>
                <Lottie
                    animationData={animationData}
                    height={164}
                    width={164}
                />
            </Link>

        </div>
    );
}


export default CallingScreen;