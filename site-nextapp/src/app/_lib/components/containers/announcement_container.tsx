import React from "react";
import ContentCarousel from "./gallery_container";


export default function Gallery() {
  const carouselItems = [
  {
    image: "https://picsum.photos/800/600?1",
    title: "First Slide",
    description: "This is the description for the first slide.",
  },
  {
    image: "/img/grace-kids-promo.png",
    title: "Grace Kids",
    description: "Sunday service, K-6th",
  },
  {
    image: "/img/equipment.jpg",
    title: "Equip Classes",
    description: "Tuesdays 6-7:15pm",
  },
];
  return (
    <ContentCarousel items={carouselItems} loop />
  );
}