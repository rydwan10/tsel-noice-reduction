import React, { useRef, useEffect } from "react";
// import enabledAudio from "@/assets/audio/noise-reduction-enabled.wav";
// import disabledAudio from "@/assets/audio/noise-reduction-disabled.wav";


interface AudioPlayerProps {
    enableNoiseReduction: boolean;
}


const NoiseReductionSimulator: React.FC<AudioPlayerProps> = ({
    enableNoiseReduction,
}) => {
    const noiseEnabledRef = useRef<HTMLAudioElement | null>(null);
    const noiseDisabledRef = useRef<HTMLAudioElement | null>(null);

    const audio = new Audio("../assets/audio/noise-reduction-enabled.mp3")

    useEffect(() => {
        // audio.play();
        if (noiseEnabledRef.current && noiseDisabledRef.current) {
            noiseEnabledRef.current.src = "./assets/audio/noise-reduction-enabled.wav";
            noiseDisabledRef.current.src = "./assets/audio/noise-reduction-disabled.wav";

            // Play both audios
            noiseEnabledRef.current.play();
            noiseDisabledRef.current.play();

            // Mute or unmute the noise-reduction-disabled audio based on enableNoiseReduction
            noiseDisabledRef.current.muted = enableNoiseReduction;
        }
    }, [enableNoiseReduction]);



    return (
        <div>
            <audio ref={noiseEnabledRef} />
            <audio ref={noiseDisabledRef} />
        </div>
    );
};

export default NoiseReductionSimulator;