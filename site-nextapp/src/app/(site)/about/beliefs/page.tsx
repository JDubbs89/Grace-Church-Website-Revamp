import type { Metadata } from "next";
import BannerSection from "@components/sections/banner_section";
import MediaCont from "@components/containers/media_container";
import SermonHeaderCard from "@components/cards/sermon_header_card";
import ParagraphCard from "@components/cards/paragraph_card";

export const metadata: Metadata = {
  title: "Beliefs | About",
}

export default function Beliefs() {
  return (
    <div className="overflow-x-hidden">
      <BannerSection>
        <MediaCont className="sermon-media-embed z-0 object-cover" key="Media" src="/img/grace-front.png" alt="Intro Visual" 
          children=
          {[
            <SermonHeaderCard key="Header"/>
          ]}/>
      </BannerSection>
      <section className="paragraph-container">
        
        <ParagraphCard heading="Welcome!" paragraph ="      Grace Church exists to glorify God by upholding the gospel, making disciples, serving others, and providing community. Located in Jackson County, Michigan, we are committed to living out this mission through corporate worship on Sundays and home-based community groups throughout the week that provide discipleship, care, and mission fulfillment."/>
        <ParagraphCard heading="" paragraph ="      Through the Grace Equip program we intentionally endeavor to train disciples to uphold the gospel in a post-Christian world by holding it high evangelistically while serving our local community through practical outreach and global missions partnerships. Whether you're connecting through our Grace Kids ministry or joining our Evangelism & Missions Team, you'll find a church family dedicated to making disciples who love Jesus, grow with others, and serve the world."/>
      </section>
    </div>
  );
}