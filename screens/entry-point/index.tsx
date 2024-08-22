import { Button } from "@/components/ui/button";
import waLogo from "@/assets/images/wa-logo.png";
import nativeCallLogo from "@/assets/images/native-call-logo.png";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import Spacer from "@/components/spacer";

const EntryPointScreen: React.FC = () => {
    return (
        <div className="container flex-col flex items-center justify-center bg-black w-full h-full shadow-xl shadow-slate-700"
            style={{
                background: 'linear-gradient(76.81deg, #B90024 15.71%, #FF0025 68.97%, #FD195E 94.61%)',

            }}
        >

            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>WhatsApp Call</CardTitle>
                    <CardDescription>WhatsApp call simulation.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Image src={waLogo.src} alt="WhatsApp Logo" width={80} height={80} />
                </CardContent>
                <CardFooter className="flex justify-end">
                    <Link href={'/wa-calling'}>
                        <Button>Simulate</Button>
                    </Link>
                </CardFooter>
            </Card>
            <Spacer height={28} />
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Native Call</CardTitle>
                    <CardDescription>Native call simulation.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Image src={nativeCallLogo.src} alt="WhatsApp Logo" width={80} height={80} />
                </CardContent>
                <CardFooter className="w-full flex justify-end">
                    <Link href={'/calling'}>
                        <Button className="w-full">Simulate</Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}

export default EntryPointScreen
