
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './Section5.css';
import doda from '../images/doda.png'
import qiz from '../images/qiz.png'
import bola from '../images/bola.png'

import {Autoplay, Pagination, Navigation} from 'swiper/modules';

export default function App() {
  return (
   
    <>
     
     <h1 className='cen' data-aos="zoom-out" data-aos-duration="1000">What our clients say</h1>
      <Swiper
      spaceBetween={50}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      >
        
       
        <div className='booss'>
        <SwiperSlide>
            <div className='ca' data-aos="flip-left">
              <div className="doda">
               <img src={doda} alt="" style={{width: '90px', height: '90px',}} />
               </div>
                <h3>Sed ut pers unde omnis iste natus
error sit voluptatem accusantium
dolor laudan rem aperiam, eaque
ipsa quae ab illo inventore verit.</h3>
<h2>Tomas Lili</h2>
<h2>New York</h2>

            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ca' data-aos="flip-right">
          <div className="doda">
                <img src={qiz} alt="" style={{width: '90px', height: '90px',}}/>
                </div>
                <h3>Sed ut pers unde omnis iste natus
error sit voluptatem accusantium
dolor laudan rem aperiam, eaque
ipsa quae ab illo inventore verit.</h3>
<h2>Romi Rain</h2>
<h2>london</h2>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ca' data-aos="flip-left">
          <div className="doda">
                <img src={bola} alt="" style={{width: '90px', height: '90px',}}/>
                </div>
                <h3>Sed ut pers unde omnis iste natus
error sit voluptatem accusantium
dolor laudan rem aperiam, eaque
ipsa quae ab illo inventore verit.</h3>
<h2>John Doe</h2>
<h2>Washington</h2>


</div>
        </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}