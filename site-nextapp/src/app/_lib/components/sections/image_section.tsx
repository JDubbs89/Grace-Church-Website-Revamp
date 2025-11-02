
type ImageSectionProps = {
  className: string;
  src: string;
  children: React.ReactNode;
}

export default function ImageSection(
  { className, src, children }: ImageSectionProps
){
  return(
    <div className={`${className} bg-[url(${src})]`}>
      {children}
    </div>
  )
}