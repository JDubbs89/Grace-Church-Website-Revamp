import Image from "next/image";


type MediaContainerProps = {
  src: string;
  alt: string;
  className: string;
  children: React.ReactNode;
};

export default function MediaContainer(
  { src, alt, className, children }: MediaContainerProps
){
  const width = 1920;
  const height = 1080;
  return (
    <div className="relative w-full h-full justify-center">
      <Image className={className} width={width} height={height} src={src} alt={alt}/>
      {children}
    </div>
  )
}