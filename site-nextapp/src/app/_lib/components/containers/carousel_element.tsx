

export default function CarouselElement({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
    return(
        <div className="carousel-element">
            {children}
        </div>
    )
}