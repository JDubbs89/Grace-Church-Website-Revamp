"use client"
import NavButton, { NavButtonProps } from "../buttons/nav-button";

type navContainerProps = {
    links: NavButtonProps[];
    collapsed: boolean;
    isMobile: boolean;
    isScrolled: boolean;
    isScrolledFar: boolean;
};

export default function NavContainer(
    { links, collapsed, isMobile, isScrolled, isScrolledFar }: navContainerProps
){
    
    return(
        <nav className={`header-nav-container ${(isMobile && collapsed) ? " translate-x-full opacity-0" : ""}`}>
            {links.map((link) => (
                    <NavButton key={link.name + isScrolled + isScrolledFar}  name={link.name} href={link.href}/>
            ))}
        </nav>
    );
}