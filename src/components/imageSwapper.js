import { Image } from "theme-ui";
import BannerImg from "assets/mockup-amongcreatives.png";
import BannerImgCoffee from "assets/mockup-bunastories.png";
import { useEffect, useState } from "react";

const images = [BannerImg, BannerImgCoffee];

export default function ImageSwapper() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(1);
      }
    }, 2000);

    return () => clearInterval(intervalId);
  });

  return <Image src={images[currentIndex]} alt="banner" />;
}
