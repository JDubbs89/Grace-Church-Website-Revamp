
type ImageSectionProps = {
  className: string;
  src: string;
  children: React.ReactNode;
}

export default function (
  { className, src, children }: ImageSectionProps
){
  return(
    <div className={`${className} bg-[url(${src})]`}>
      {children}
    </div>
  )
}