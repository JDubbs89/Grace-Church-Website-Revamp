import BannerSection from "@components/sections/banner_section";
import MediaContainer from "@components/containers/media_container";

export const metadata = {
  title: "About",
}

export default function About() {
  return (
    <div className="absolute top-0 right-0 left-0 z-0">
      <BannerSection children={
        [<MediaContainer className="sermon-media-embed z-0" key="Media" src="/img/grace-front.png" alt="Intro Visual"/>,
        <div className="sermon-info-card z-10" key="Info">
          <p className="heading text-white">Experience Life at Grace.</p>
        </div>]
        }/>
    </div>
  );
}