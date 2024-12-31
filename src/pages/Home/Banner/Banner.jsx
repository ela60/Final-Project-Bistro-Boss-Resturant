import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/home/01.jpg"; 
import img2 from "../../../assets/home/02.jpg"; 
import img3 from "../../../assets/home/03.png"; 
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";

const Banner = () => {
  return (
    <div className="w-full h-96 sm:h-[400px] md:h-[500px] lg:h-[600px]">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img src={img1} alt="Banner 1" className="object-cover w-full h-full" />
        </div>
        <div>
          <img src={img2} alt="Banner 2" className="object-cover w-full h-full" />
        </div>
        <div>
          <img src={img3} alt="Banner 3" className="object-cover w-full h-full" />
        </div>
        <div>
          <img src={img4} alt="Banner 4" className="object-cover w-full h-full" />
        </div>
        <div>
          <img src={img5} alt="Banner 5" className="object-cover w-full h-full" />
        </div>
        <div>
          <img src={img6} alt="Banner 6" className="object-cover w-full h-full" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
