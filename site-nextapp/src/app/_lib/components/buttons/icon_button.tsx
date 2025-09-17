import Link from "next/link";
import Image from "next/image";

export type IconButtonProps = {
    name: string;
    href: string;
    src: string;
    text: boolean;
    height: number;
    width: number;
    styles: string;
    onClick: Function;
    link: boolean;
}

export default function IconButton(
    { name, href, src, text, height, width, styles, onClick, link }: IconButtonProps
){
    return(
        (link ? <Link href={href} className={`icon-button ${styles}`} onClick={onClick()}>
            <p className={`${text ? "icon-button-text" : ""}`}>
                {name}
            </p>
            <Image src={src} height={height} width={width} alt={name}/>
        </Link> 
        : 
        <button className={`icon-button ${styles}`} onClick={() => {onClick()}}>
            <p className={`${text ? "icon-button-text" : ""}`}>
                {name}
            </p>
            <Image src={src} height={height} width={width} alt={name}/>
        </button>)
    )
}