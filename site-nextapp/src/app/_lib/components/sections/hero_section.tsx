

export default function HeroSection({
  children_1, children_2, fullsize_image = false, bg_color="#FFFFFF"
}: Readonly<{
  children_1: React.ReactNode;
  children_2: React.ReactNode;
  fullsize_image?: boolean;
  bg_color?: string;
}>
){
    return (
        <div className={`section-full bg-[${bg_color}]`}>
            <div className="container-2x1">
                <div className="my-5 mx-auto md:mx-25">
                    {children_1}
                </div>
                <div className={`${!fullsize_image ? "m-auto" : "w-full h-full m-0"}`}>
                    {children_2}
                </div>
            </div>
        </div>
    )
}