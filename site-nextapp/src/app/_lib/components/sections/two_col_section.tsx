

export default function TwoColSection({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
    return (
        <div className="section-center">
            <div className="container-2x1">
                {children}
            </div>
        </div>
    )
}