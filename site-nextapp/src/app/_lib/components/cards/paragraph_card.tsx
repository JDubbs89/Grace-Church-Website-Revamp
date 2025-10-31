
export type ParagraphCardProps = {
  heading: string;
  paragraph: string;
  text_color?: string;
}

export default function ParagraphCard(
  { heading, paragraph, text_color = "#0A5789" }: ParagraphCardProps
){
  return (
    <div className="paragraph-card">
      {(heading != "" ? <h1 className={`article-heading text-[#2e2e2e]`}>{heading}</h1> : <br className="hidden"></br>)}
      {(paragraph != "" ? <p className="paragraph text-[#2e2e2e]">{paragraph}</p> : <br className="hidden"></br>)}
    </div>
  )
}