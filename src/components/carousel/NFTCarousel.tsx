import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/images/bg/bg1.jpg";
import img2 from "../../assets/images/bg/bg2.jpg";
import img3 from "../../assets/images/bg/bg3.jpg";
import img4 from "../../assets/images/bg/bg4.jpg";
import Image from "next/image";

import  { Storage } from "aws-amplify";
import { useEffect, useState } from "react";

Storage.configure({ track: true, level: "public" });




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
  
  
  /* const [image, setImage] = useState("/../../assets/images/bg/bg2.jpg");

  
  const getFeaturedPics = async () => {
    console.log(`featured-drop.jpeg`)
    await Storage.get(`featured-drop.jpeg`)
    .then(url => {
      var myRequest = new Request(url);
      fetch(myRequest).then(function(response) {
        if (response.status === 200) {
          console.log("Response was a success")
          console.log(url)
          setImage(url)
            setTimeout(() => {
            setImage(url);
          }, 10);
        }
      });
    })
    .catch(err => console.log(err));
  };
  
  useEffect(() => {
    getFeaturedPics()
  }, []) */
  
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
