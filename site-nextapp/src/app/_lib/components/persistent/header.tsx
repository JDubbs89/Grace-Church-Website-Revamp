"use client"
import Image from "next/image";
import NavContainer from "@components/containers/nav_container";
import { useState, useEffect } from "react";

export default function SiteHeader(){
    const [isScrolled, setIsScrolled] = useState(false);
    const [isScrolledFar, setIsScrolledFar] = useState(false);
    useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      setIsScrolledFar(window.scrollY > 300)
    }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
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
        <header className={`site-header`} style={{background: `linear-gradient(to bottom, #0a578a, rgba(10, 87, 138, ${isScrolled ? (isScrolledFar ? 1 : 0.43) : 0.004}))`, transition: 'background 200ms ease'}}>
            <Image className="header-logo" src="/img/logo.png" width={width} height={height} alt="Grace Church"/>
            <div className="hamburger-nav"><Image src="/img/menu-white.svg" width={40} height={40} alt="Mobile Menu"/></div>
            <NavContainer links={navLinks}/>
        </header>
    );
}