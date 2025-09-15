import Image from "next/image";
import NavContainer from "@components/containers/nav_container";

export default function SiteHeader(){
    let width = 220;
    let height = 80;
    const navLinks = [
        {name: "Home", href: "/home"},
        {name: "About", href: "/about"},
        {name: "Ministries", href: "/ministries"},
        {name: "Media", href: "/media"},
        {name: "Giving", href: "https://www.unifiedgiving.com/give/index/30"}

    ];
    return(
        <header className="site-header">
            <Image className="header-logo" src="/img/logo.png" width={width} height={height} alt="Grace Church"/>
            <div className="hamburger-nav"><Image src="/img/menu-white.svg" width={40} height={40} alt="Mobile Menu"/></div>
            <NavContainer links={navLinks}/>
        </header>
    );
}