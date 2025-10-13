import Image from "next/image";


type MediaContainerProps = {
  src: string;
  alt: string;
  className: string;
  children: React.ReactNode;
};

export default function MediaCont(
  { src, alt, className, children }: MediaContainerProps
){
  const width = 4000;
  const height = 2250;
  return (
    <div className="relative w-full h-full justify-center">
       <img className={className} width={width} height={height}  alt={alt}/> {/* src={src} */}
      {children}
    </div>
  )
}