import IconButton, { IconButtonProps } from "@components/buttons/icon_button";

type SocialButtonCardProps = {
  buttons: IconButtonProps[];
  styles: string;
}

export default function SocialButtonCard(
  { buttons, styles }: SocialButtonCardProps
){
  return (
    <div className={`social-button-card ${styles}`}>
      {buttons.map((button) => (
        <IconButton name={button.name} href={button.href} src={button.src} text={button.text} height={button.height} width={button.width}/>
      ))}
    </div>
  )
}