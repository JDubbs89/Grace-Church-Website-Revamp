import Link from "next/link";

export type BasicButtonProps = {
    name: string;
    href: string;
    dark?: boolean;
    className?: string;
}

export default function BasicButton(
    { name, href, dark=false, className = "" }: BasicButtonProps
){
    return(
        <Link href={href} className={`basic-button${(dark ? "-dark" : "")} ${className}`}>
            <p className="">
                {name}
            </p>
        </Link>
    )
}