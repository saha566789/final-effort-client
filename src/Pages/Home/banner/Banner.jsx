
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import slider1 from "../../../assets/laptop.png"
import slider2 from "../../../assets/HA-cat-banner.png"
import slider3 from "../../../assets/VP-BF-TV-DEALS-1-1.jpg"
import slider4 from "../../../assets/sale-offer-banner-with-hand-holding-phone-vector.jpg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
    return (
        <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className='w-full h-[500px]' src={slider1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-[500px]' src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-[500px]' src={slider3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-[500px]' src={slider4} alt="" />
        </SwiperSlide>
        
      </Swiper>
    );
};

export default Banner;