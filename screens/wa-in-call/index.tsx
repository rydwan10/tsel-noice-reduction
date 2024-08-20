"use client"
import backgroundImage from "@/assets/images/wa-in-call-bg.png"
import CleanCallSlider from "@/components/clean-call-slider";

const WaInCallScreen: React.FC = () => {
    return (
        <div className="bg-black w-full h-full pb-8 pt-[200px] md:pb-10 overflow-hidden" style={
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


export default WaInCallScreen;