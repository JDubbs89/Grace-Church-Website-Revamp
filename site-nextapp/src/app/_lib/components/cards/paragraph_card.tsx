
export type ParagraphCardProps = {
  heading: string;
  paragraph: string;
}

export default function ParagraphCard(
  { heading, paragraph }: ParagraphCardProps
){
  return (
    <div className="paragraph-card">
      {(heading != "" ? <h1 className="article-heading">{heading}</h1> : <br className="hidden"></br>)}
      <p className="paragraph">
        {paragraph}
      </p>
    </div>
  )
}