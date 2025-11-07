import BasicButton from "@components/buttons/basic_button";
import Image from "next/image";

type QuickAction = {
    title: string;
    description: string;
    url: string;
    image: string;
}

type QuickActionProps = {
    actions: QuickAction[];
    className: string;
}

export default function QuickActionSection({
  props,
}: Readonly<{
  props: QuickActionProps;
}>){
    return(
        <section className="section-full">
            <div className="flex flex-col justify-center">
                <div className="pt-15 justify-center bg-[#dfdfdf4b]">
                    <h1 className="text-[3rem] font-semibold text-[#2e2e2e] text-center">Do you ripple?</h1>
                    <p className="paragraph-center md:max-w-[35vw] text-[#2e2e2e] mb-15 mx-auto">Here at Grace, we&apos;re dedicated to providing community for those in need. That could include you, or maybe you have the ability to help.</p>
                </div>
            <div className="flex flex-row h-full overflow-x-scroll lg:flex-wrap bg-gradient-to-br to-[#3470bec2] from-[#044f73]">
                {props.actions.map((action, index)=>(
                    <div key={action.title + index} className="flex flex-col justify-between min-w-[60vw] lg:min-w-[25vw] lg:max-w-[25vw] min-h-0 overflow-clip bg-gradient-to-br to-[#3470bec2] from-[#044f73]">
                        <Image 
                            className="object-cover max-h-9/16" 
                            src={action.image} 
                            width={1920} 
                            height={1080} 
                            alt={action.title} 
                            unoptimized //TODO: When static images are brough in, disable unoptimized dynamic image fetching
                        />
                        <div className="w-full h-full">
                        <h2 className="px-4 py-2 font-semibold text-white text-[1.75rem]">{action.title}</h2>
                        <p className="px-5 py-2 mb-3 text-[1.25rem] text-white font-light">{action.description}</p>
                        </div>
                        <div className="px-2 pb-4 relative flex"><BasicButton name="Learn more" href={action.url} className="p-4"/></div>
                    </div>
                ))}
            </div>
            </div>
        </section>
    )
}