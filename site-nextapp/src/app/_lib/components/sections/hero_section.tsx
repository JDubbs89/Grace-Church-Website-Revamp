

export default function HeroSection({
  children_1, children_2,
}: Readonly<{
  children_1: React.ReactNode;
  children_2: React.ReactNode;
}>
){
    return (
        <div className="section-center">
            <div className="container-2x1">
                <div className="mx-auto">
                    {children_2}
                </div>
                <div className="mx-auto">
                    {children_1}
                </div>
            </div>
        </div>
    )
}