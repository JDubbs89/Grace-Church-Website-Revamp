"use client"
import Image from "next/image";
import IconButton from "@components/buttons/icon_button";
import { useState } from "react";

type HamburgerButtonProps = {
  onClick: Function;
}

export default function HamburgerButton(
  { onClick }: HamburgerButtonProps
){
  const [clicked, setClicked] = useState(false);
  const onClicked = () => {
    onClick();
    setClicked(!clicked);
  }
  return (
    <button className="icon-button hamburger-nav w-max h-max" onClick={() => {onClicked()}}>
      <span className="mb-1 fill-amber-50 h-2 w-full"></span>
      <span className="mt-1 bg-white h-2 w-full"></span>
    </button>
    //<IconButton styles="hamburger-nav" name="" onClick={() => {onClick()}} width={40} height={40} href = "" src="/img/menu-white.svg" text={false} link={false}/>
  )
}