import Link from "next/link";
import Image from "next/image";

export type IconButtonProps = {
    name: string;
    href: string;
    src: string;
    text: boolean;
    height: number;
    width: number;
}

export default function IconButton(
    { name, href, src, text, height, width }: IconButtonProps
){
    return(
        <Link href={href} className="icon-button">
            <p className={`${text ? "icon-button-text" : ""}`}>
                {name}
            </p>
            <Image src={src} height={height} width={width} alt={name}/>
        </Link>
    )
}