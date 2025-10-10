import Link from "next/link";

export type BasicButtonProps = {
    name: string;
    href: string;
}

export default function BasicButton(
    { name, href }: BasicButtonProps
){
    return(
        <Link href={href} className="basic-button">
            <p className="">
                {name}
            </p>
        </Link>
    )
}