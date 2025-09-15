import Link from "next/link";
import NavButton from "../buttons/nav-button";

export type linkProps = {
    name: string,
    href: string
};

interface navContainerProps{
    links: linkProps[];
}

export default function NavContainer(
    { links }: navContainerProps
){
    return(
        <nav className="header-nav-container">
            {links.map((link) => (
                    <NavButton key={link.name} name={link.name} href={link.href}/>
            ))}
        </nav>
    );
}