import { Metadata } from "next";
import BannerSection from "@components/sections/banner_section";
import MediaContainer from "@components/containers/media_container";
import MediaCarousel from "@components/containers/image_carousel";
import SermonHeaderCard from "@components/cards/sermon_header_card";
import CarouselSection from "@components/sections/carousel_section";
import ParagraphCard from "@components/cards/paragraph_card";
import HeroSection from "@/app/_lib/components/sections/hero_section";

export const metadata:Metadata = {
  title: "Home",
}

export default function Home() {
  return (
      <div className="overflow-x-hidden">
        <BannerSection children=
          {[
            // This media container renders the site image banner and takes in children so we can reuse this component later.
          <MediaContainer className="sermon-media-embed z-0 object-cover" key="Media" src="/img/grace-front-1.png" alt="Intro Visual" 
            children=
            {[
              <SermonHeaderCard key="Header"/>
            ]}/>
          ]}
        />
        <HeroSection children_1={(<div>Hello World</div>)} children_2={(<div>Hello World</div>)}/>
        <CarouselSection>
          <img src="/img/equip-class-promo.png" className="w-full h-full"/>
          <img src="/img/grace-kids-promo.png" className="w-full h-full"/>
          <div className="w-full h-full bg-red-300">Slide 3</div>
          <div className="w-full h-full">Slide 4</div>
        </CarouselSection>
        <section className="paragraph-container">
          
          
          <ParagraphCard heading="Welcome!" paragraph ="      Grace Church exists to glorify God by upholding the gospel, making disciples, serving others, and providing community. Located in Jackson County, Michigan, we are committed to living out this mission through corporate worship on Sundays and home-based community groups throughout the week that provide discipleship, care, and mission fulfillment."/>
          <ParagraphCard heading="" paragraph ="      Through the Grace Equip program we intentionally endeavor to train disciples to uphold the gospel in a post-Christian world by holding it high evangelistically while serving our local community through practical outreach and global missions partnerships. Whether you're connecting through our Grace Kids ministry or joining our Evangelism & Missions Team, you'll find a church family dedicated to making disciples who love Jesus, grow with others, and serve the world."/>
          <ParagraphCard heading="Announcements" paragraph =""/>
          <MediaCarousel images={["/img/equip-class-promo.png", "/img/grace-kids-promo.png"]}  /> {/**autoAdvanceMs={10000} pauseOnHover={true}**/}
        </section>
      </div>
    );
}
