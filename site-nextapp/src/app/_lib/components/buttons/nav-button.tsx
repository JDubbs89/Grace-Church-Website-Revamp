"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";

export type NavButtonProps = {
    name: string;
    href: string;
}

export default function NavButton(
    { name, href }: NavButtonProps
){
    const pathName = usePathname();
    return(
        <Link href={href} className={`nav-button ${pathName == href ? "nav-button-active" : ""}`}>
            <p className="">
                {name}
            </p>
        </Link>
    )
}