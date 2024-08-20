import backgroundImage from "@/assets/images/calling-bg.png"
import profileImage from "@/assets/images/profile-picture.png"
import Spacer from "@/components/spacer";
import Image from "next/image";

const PhoneCall: React.FC = () => {
    return (
        <div className="container flex items-center justify-center bg-black w-full h-full pb-8 pt-[200px] md:pb-10 self-center" style={
            {
                backgroundImage: `url(${backgroundImage.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }
        }>
            <div className="flex flex-col items-center">
                <div>
                    <Image src={profileImage.src} alt="Profile Picture" width={100} height={100} />
                    <Spacer height={25} />
                    <p className="text-2xl text-white">Danar Wicaksono</p>
                    <Spacer height={3} />
                    <p className="text-sm">08117282201</p>
                </div>
                <div>
                    <p>Telepon Masuk...</p>
                </div>
            </div>
            
        </div>
    );
}


export default PhoneCall