
export default function BannerSection({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return (
    <div className="banner-section">
      {children}
    </div>
  )
}