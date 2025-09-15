import Link from "next/link";
import NavButton, { NavButtonProps } from "../buttons/nav-button";

type navContainerProps = {
    links: NavButtonProps[]
};

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