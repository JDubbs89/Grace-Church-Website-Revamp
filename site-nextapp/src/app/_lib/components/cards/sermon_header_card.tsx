import BasicButton from "@components/buttons/basic_button";

export default function SermonHeaderCard(){
  return (
    <div className="sermon-info-card z-10">
      <p className="heading text-white">
        Experience Life at Grace.
      </p>
      <div className="flex flex-row mx-auto justify-center">
        <BasicButton name="This Week's Sermon" href=""/>
        <BasicButton name="All Sermons" href=""/>
      </div>
    </div>
  );
}