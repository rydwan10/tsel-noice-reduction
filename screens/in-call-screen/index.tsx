"use client"

import backgroundImage from "@/assets/images/in-call-screen.png"
import sliderBackgroundImage from "@/assets/images/pop-up-bg.png"
import sliderBackgroundImageOff from "@/assets/images/pop-up-off-bg.png"
import chevronImage from "@/assets/images/chevron-slider.png"
import lottie5g from "@/assets/animations/lottie/5g-logo.json"
import { Switch } from "@/components/ui/switch";
import Lottie from "lottie-react";
import { useState } from "react";
import Spacer from "@/components/spacer"
import { telkomselBatikSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import Image from "next/image"
import CleanCallSlider from "@/components/clean-call-slider"


const InCallScreen: React.FC = () => {
    const [isSliderOpen, setIsSliderOpen] = useState(false);
    const [switchValue, setSwitchValue] = useState(false);

    return (
        <div className=" bg-black w-full h-full pb-8 pt-[200px] md:pb-10 overflow-hidden" style={
            {
                backgroundImage: `url(${backgroundImage.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }
        }>


            <CleanCallSlider />

        </div>



    );
}


export default InCallScreen