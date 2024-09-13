
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Section3.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import mustang from '../images/mustang.png'
import BMW from '../images/BMW.png'
import ferarri from '../images/ferarri.png'

export default function App() {
    const [modaling,setModaling]=useState(false)

   const Close=()=>{
    setModaling(false)
   }
   const Open=()=>{
    setModaling(true)
   }
  return (
    <>
     <div className='sec3-mini'>
    <h2 data-aos="fade-down" data-aos-duration="1000">Checkout the latest Cars</h2>
    <h1 data-aos="fade-up" data-aos-duration="1000">Newest Cars</h1>
    </div>
    <div className='slide'>
   
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
        
        <SwiperSlide>
            <div className='car-boss'>


<div className='leftt' data-aos="fade-right"  data-aos-duration="2000">
<img src={mustang} alt="" className='sec3-img'/>
</div>

<div className='rightt' data-aos="fade-left"  data-aos-duration="2000">
<h1>Chevrolet Camaro ZA100</h1>
<p>Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt
in culpa qui officia deserunt mollit anim id est
laborum.</p>
<p>Sed ut pers unde omnis iste natus error sit
voluptatem accusantium doloremque laudantium.</p>
<button onClick={Open} className="a">Modal</button>
</div>
            </div>
            ⠀⠀</SwiperSlide>
        <SwiperSlide>
        <div className='car-boss'>


<div className='leftt'  data-aos="fade-left"  data-aos-duration="2000">
<img src={BMW} alt="" className='sec3-img'/>
</div>

<div className='rightt' data-aos="fade-right"  data-aos-duration="2000">
<h1>BMW Serios-3 Wagon</h1>
<p>Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt
in culpa qui officia deserunt mollit anim id est
laborum.</p>
<p>Sed ut pers unde omnis iste natus error sit
voluptatem accusantium doloremque laudantium.</p>
<button>view details</button>
</div>
            </div>
        </SwiperSlide>

        <SwiperSlide>            <div className='car-boss'>


<div className='leftt' data-aos="fade-down-left" data-aos-duration="2000">
<img src={ferarri} alt="" className='sec3-img'/>
</div>

<div className='rightt' data-aos="fade-down-right" data-aos-duration="2000">
<h1>Ferrari 488 Superfast</h1>
<p>Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt
in culpa qui officia deserunt mollit anim id est
laborum.</p>
<p>Sed ut pers unde omnis iste natus error sit
voluptatem accusantium doloremque laudantium.</p>
<button>view details</button>
</div>
            </div></SwiperSlide>

      </Swiper>
      </div>
      {modaling&&<Modal Close={Close}></Modal>}
    </>
  )}