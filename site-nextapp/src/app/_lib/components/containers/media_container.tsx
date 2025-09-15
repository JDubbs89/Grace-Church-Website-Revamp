import Image from "next/image";

type MediaContainerProps = {
  src: string;
  alt: string;
  className: string;
};

export default function MediaContainer(
  { src, alt, className }: MediaContainerProps
){
  const width = 1920
  const height = 1080
  return (
    <Image className={className} src={src} width={width} height={height} alt={alt}/>
  )
}