"use client"
import Image from "next/image";
import NavContainer from "@components/containers/nav_container";
//import HamburgerButton from "@components/buttons/hamburger_button";
import { useState, useEffect } from "react";

export default function SiteHeader(){
    const [isScrolled, setIsScrolled] = useState(false);
    const [isScrolledFar, setIsScrolledFar] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [collapsedMM, setCollapsedMM] = useState(false);
    useEffect(() => {
        setCollapsedMM(false);
    },[]);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 480);
        }
        handleResize();
        if (isMobile){
            setCollapsedMM(true);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      setIsScrolledFar(window.scrollY > 300)
    }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const width = 220;
    const height = 80;
    const navLinks = [
        {name: "Home", href: "/home"},
        {name: "About", href: "/about"},
        {name: "Ministries", href: "/ministries"},
        {name: "Media", href: "/media"},
        {name: "Giving", href: "https://www.unifiedgiving.com/give/index/30"},
        {name: "Contact", href: "/contact"}

    ];
    return(
        <header className={`site-header`} style={{background: `rgba(10, 87, 138, ${isScrolled ? (isScrolledFar ? 1 : 0.43) : 0.004})`, transition: 'background 200ms ease'}}>
            <Image className="header-logo" src="/img/logo.png" width={width} height={height} alt="Grace Church"/>
            <NavContainer links={navLinks} collapsed={collapsedMM} isMobile={isMobile} isScrolled={isScrolledFar} isScrolledFar={isScrolledFar}/>
        </header>
    );
}