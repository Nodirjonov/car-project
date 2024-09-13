
import { Swiper, SwiperSlide } from 'swiper/react';
import logotip1 from '../images/Link.png'
import logotip2 from '../images/logotip2.png'
import logotip3 from '../images/logotip3.png'
import logotip4 from '../images/logotip4.png'
import logotip5 from '../images/logotip5.png'
import logotip6 from '../images/logotip6.png'


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './Section6.css';


import { Autoplay, Pagination, Navigation} from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className="imig"><img src={logotip1} alt="" data-aos="zoom-in"/></div></SwiperSlide>
        <SwiperSlide><div className="imig"><img src={logotip2} alt="" data-aos="zoom-in"/></div></SwiperSlide>
        <SwiperSlide><div className="imig"><img src={logotip3} alt="" data-aos="zoom-in"/></div></SwiperSlide>
        <SwiperSlide><div className="imig"><img src={logotip4} alt="" data-aos="zoom-in"/></div></SwiperSlide>
        <SwiperSlide><div className="imig"><img src={logotip5} alt="" data-aos="zoom-in"/></div></SwiperSlide>
        <SwiperSlide><div className="imig"><img src={logotip6} alt="" data-aos="zoom-in"/></div></SwiperSlide>
      </Swiper>
    </>
  );
}