import BasicButton from "@components/buttons/basic_button";

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
                    <p className="paragraph-center max-w-[35vw] text-[#2e2e2e] mb-15 mx-auto">Here at Grace, we're dedicated to providing community for those in need. That could include you, or maybe you have the ability to help.</p>
                </div>
            <div className="flex flex-wrap justify-center gap-2 py-2 mb-20">
                {props.actions.map((action, index)=>(
                    <div key={action.title + index} className="flex flex-col w-[20vw] h-[50vh] rounded-2xl border-1 overflow-clip border-[#aaaaaa] bg-gradient-to-br to-[#3470bec2] from-[#044f73]">
                        <img className="object-cover max-h-9/16" src={action.image}/>
                        <h2 className="px-4 py-2 font-semibold text-white text-[1.75rem]">{action.title}</h2>
                        <p className="px-5 py-2 mb-3 text-[1.25rem] text-white font-light">{action.description}</p>
                        <div className="px-2 flex"><BasicButton name="Learn more" href={action.url} className="p-4"/></div>
                    </div>
                ))}
            </div>
            </div>
        </section>
    )
}