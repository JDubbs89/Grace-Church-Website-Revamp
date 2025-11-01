import { Metadata } from "next";
import BannerSection from "@components/sections/banner_section";
import MediaContainer from "@components/containers/media_container";
import MediaCarousel from "@components/containers/image_carousel";
import SermonHeaderCard from "@components/cards/sermon_header_card";
import CarouselSection from "@components/sections/carousel_section";
import ParagraphCard from "@components/cards/paragraph_card";
import HeroSection from "@/app/_lib/components/sections/hero_section";
import Gallery from "@components/containers/announcement_container";
import BasicButton from "@components/buttons/basic_button";
import Overlay from "@components/sections/overlay";
import QuickActionSection from "@/app/_lib/components/sections/quick_action_section";

export const metadata:Metadata = {
  title: "Home",
}

export default function Home() {
  return (
      <div className="overflow-x-hidden">
        <Overlay>
            <img key="img" className="sermon-media-embed" alt=""/>,
            <div className="relative w-full h-[80vh] md:h-[80vh] flex items-center justify-center">
              <div className="sermon-info-card z-10 pb-[75%] md:pb-0">
                <p className="heading text-white">
                  Experience Life at Grace.
                </p>
                <div className="flex flex-row mx-auto justify-center">
                  <BasicButton name="This Week's Sermon" href=""/>
                  <BasicButton name="View All Sermons" href=""/>
                </div>
            </div>
            </div>
            
        </Overlay>
        <HeroSection
          children_1={
          <div>
            <ParagraphCard heading="Welcome!" paragraph ="      Grace Church exists to glorify God by upholding the gospel, making disciples, serving others, and providing community. Located in Jackson County, Michigan, we are committed to living out this mission through corporate worship on Sundays and home-based community groups throughout the week that provide discipleship, care, and mission fulfillment."/>
            <ParagraphCard heading="" paragraph ="      Through the Grace Equip program we intentionally endeavor to train disciples to uphold the gospel in a post-Christian world by holding it high evangelistically while serving our local community through practical outreach and global missions partnerships. Whether you're connecting through our Grace Kids ministry or joining our Evangelism & Missions Team, you'll find a church family dedicated to making disciples who love Jesus, grow with others, and serve the world."/>
          </div>}
          children_2={<img src="/img/hands-raised.png" className="w-full h-full object-cover object-left-bottom"/>}
          fullsize_image={true}
        />
        <section className="bg-[#dfdfdf4b]"><ParagraphCard heading="Featured" paragraph ="" text_color="#0A5789"/></section>
        
        <Gallery/>

        <QuickActionSection props={{actions:[
          {title:"Community Groups", description:"Get plugged into a community group.", url:"", image:"https://picsum.photos/800/600?2"},
          {title:"Event Calendar", description:"Learn more about our upcoming events", url:"", image:"https://picsum.photos/800/600?3"},
          {title:"Contact Us", description:"Get in touch with someone who has answers for your questions.", url:"", image:"https://picsum.photos/800/600?4"},
          {title:"Get Involved", description:"You have the power to glorify God by serving in ministry.", url:"", image:"https://picsum.photos/800/600?5"}
          ], className:""}}/>
        {/* <HeroSection children_1={(<div>Hello World</div>)} children_2={(<div>Hello World</div>)}/> */}
      </div>
    );
}
