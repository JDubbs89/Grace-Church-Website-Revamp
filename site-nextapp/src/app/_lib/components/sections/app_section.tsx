import { FaApple, FaGooglePlay } from "react-icons/fa";

interface BannerSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  androidUrl?: string;
  iosUrl?: string;
  className?: string;
}

const AppBannerSection: React.FC<BannerSectionProps> = ({
  title,
  description,
  imageSrc,
  androidUrl,
  iosUrl,
  className = "",
}) => {
  return (
    <section
      className={`w-full bg-gradient-to-b from-gray-100 to-gray-200 py-16 px-8 flex flex-col-reverse md:flex-row items-center justify-center gap-10 ${className}`}
    >
      {/* Text Content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
        <h2 className="text-[3rem] text-[#2e2e2e] font-bold mb-4">{title}</h2>
        <p className="text-lg text-[#2e2e2e] mb-8">{description}</p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          {androidUrl && (
            <a
              href={androidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-3xl transition-all duration-200"
            >
              <FaGooglePlay className="text-xl" />
              <span>Get it on Google Play</span>
            </a>
          )}

          {iosUrl && (
            <a
              href={iosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-3xl transition-all duration-200"
            >
              <FaApple className="text-xl" />
              <span>Download on the App Store</span>
            </a>
          )}
        </div>
      </div>

      {/* Image */}
      <div className="w-full md:w-[40%] flex justify-center">
        <img
          src={imageSrc}
          alt="App preview"
          className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto object-contain drop-shadow-xl"
        />
      </div>
    </section>
  );
};

export default AppBannerSection;