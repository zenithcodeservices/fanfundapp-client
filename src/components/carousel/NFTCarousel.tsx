import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/images/bg/bg1.jpg";
import img2 from "../../assets/images/bg/bg2.jpg";
import img3 from "../../assets/images/bg/bg3.jpg";
import img4 from "../../assets/images/bg/bg4.jpg";
import Image from "next/image";

const items = [
  {
    id: 1,
    src: img1,
  },
  {
    id: 2,
    src: img2,
  },
  {
    id: 3,
    src: img3,
  },
  {
    id: 4,
    src: img4,
  },
];

export default function NFTCarousel() {
  return (
    <Carousel
      showStatus={false}
      showArrows={true}
      showIndicators={true}
      infiniteLoop={true}
      useKeyboardArrows={true}
      autoPlay={true}
      interval={2000}
      transitionTime={500}
      swipeable={true}
      swipeScrollTolerance={5}
    >
      {items.map((item) => (
        <Image key={item.id} src={item.src} alt="sample image" />
      ))}
    </Carousel>
  );
}
