export default function Footer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return (
    <div className="section-full container-2x1 h-full bg-[#0A5789] text-white font-light text-1xl">
      {children}
    </div>
  )
}