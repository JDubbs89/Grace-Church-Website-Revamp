import Overlay from "./overlay";

export default function BannerSection({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return (
    <Overlay className="w-full mt-0 mx-0">
      {children}
    </Overlay>
  )
}