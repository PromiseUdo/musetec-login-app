import { FC } from "react";

type BannerProps = {
  image: string;
};
const Banner: FC<BannerProps> = ({ image }) => {
  return (
    <div className=" h-screen relative overlay bg-white">
      <img
        className="w-full h-full  object-cover object-[100%_100%] "
        src={image}
        loading="lazy"
        alt="representation of page"
      />
      <div className="absolute inset-0 bg-[#550786] opacity-50" />
    </div>
  );
};

export default Banner;
