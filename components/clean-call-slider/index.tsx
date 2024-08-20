"use client"

import sliderBackgroundImage from "@/assets/images/pop-up-bg.png"
import sliderBackgroundImageOff from "@/assets/images/pop-up-off-bg.png"
import chevronImage from "@/assets/images/chevron-slider.png"
import lottie5g from "@/assets/animations/lottie/5g-logo.json"
import { Switch } from "@/components/ui/switch";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import Spacer from "@/components/spacer"
import { telkomselBatikSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import Image from "next/image"
import useSound from "use-sound"


const CleanCallSlider: React.FC = () => {
    const [isSliderOpen, setIsSliderOpen] = useState(false);
    const [switchValue, setSwitchValue] = useState(false);

    const [play1, { stop: stop1 }] = useSound('/static/noise-reduction-disabled.mp3', { volume: !switchValue ? 1 : 0 });
    const [play2, { stop: stop2 }] = useSound('/static/noise-reduction-enabled.mp3', { volume: 1 })


    useEffect(() => {
        play1();
        play2();
        return () => {
            stop1()
            stop2()
        }
    }, [stop1, stop2])



    return (
        <div className="relative w-full flex flex-col justify-end top-80">
            <div className="flex flex-row justify-end">
                <Lottie
                    className={`relative z-10 top-6 duration-300 ${isSliderOpen ? 'right-24' : 'right-9'}`}
                    animationData={lottie5g}
                    style={{ width: 50, height: 50 }}
                />
            </div>
            <Image
                className={`${isSliderOpen ? 'rotate-0' : 'rotate-180'} duration-300 absolute ${isSliderOpen ? 'right-[8.7rem]' : 'right-[4.7rem]'} ${isSliderOpen ? 'top-[5.2rem]' : 'top-[5.5rem]'} z-20`}
                width={20}
                height={20}
                src={chevronImage.src}
                alt="Chevron Icon"
                onClick={() => {
                    setIsSliderOpen(!isSliderOpen)
                }}
            />
            <div
                className={`absolute top-12 right-0 transition-transform duration-300 ease-in-out ${isSliderOpen ? 'translate-x-0' : 'translate-x-16'}`}
                style={{
                    backgroundImage: `url(${switchValue ? sliderBackgroundImage.src : sliderBackgroundImageOff.src})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: isSliderOpen ? '84px' : '105px',
                    width: '145px',
                }}
            >

                <div className="flex items-center justify-between">
                    <div className={`flex flex-col items-start pt-6 px-2 ${!isSliderOpen && 'w-24'}`}>
                        <p className={cn("text-white text-xs font-bold", telkomselBatikSans.className)}>Panggilan Jernih</p>
                        <Spacer height={4} />
                        <div className="flex flex-row">
                            <p className="text-white" style={{ fontSize: 10 }}>Redam bising sekitarmu</p>
                            {/* <Spacer width={2} /> */}
                            {isSliderOpen && <Switch
                                checked={switchValue} onCheckedChange={setSwitchValue} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CleanCallSlider;