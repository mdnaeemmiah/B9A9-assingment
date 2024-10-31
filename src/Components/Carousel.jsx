
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import img1 from '../assets/adrienguh-wvagVtn3GGk-unsplash.jpg'
import img2 from '../assets/download (4).jpeg'
import img3 from '../assets/download (6).jpeg'
import img4 from '../assets/download (8).jpeg'


// import required modules
import { Navigation } from 'swiper/modules';

export default function Carousel() {
  return (
    <div className='py-8'>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <img   className='w-full bg-center bg-cover h-[38rem]' src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full bg-center bg-cover h-[38rem]' src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full bg-center bg-cover h-[38rem]' src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full bg-center bg-cover h-[38rem]' src={img4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
