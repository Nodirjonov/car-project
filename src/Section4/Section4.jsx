import React from 'react';
import "./Section4.css"
import ca1 from '../images/ca1.png'
import ca2 from '../images/ca2.png'
import ca3 from '../images/ca3.png'
import ca54 from '../images/ca5-4.png'
import ca6 from '../images/ca6.png'
import ca7 from '../images/ca7.png'
import ca8 from '../images/ca8.png'

function Section4() {
    return (
        <div >
         
            <h2 className='hikki' data-aos="fade-right" data-aos-duration="1000">Checkout the featured Cars</h2>
            <h1 className='hbir' data-aos="fade-left" data-aos-duration="1000">Featured Cars</h1>
           
            <div className='x-card'>
          <div className='cardd'>
            <div className='cardi'  data-aos="fade-right" data-aos-duration="2000">
              <div className="mini-cardi">
<img src={ca1} alt="" className='img'/>
</div>
<hr />
<p>Model: 2017  3100 mi  240HP</p>
<p>Automatic </p>
</div>

<h1 className='q'>BMW 6-series gran coupe</h1>
<h3>$89,395</h3>
<p>Neque porro quisquam est, qui dolorem
ipsum quia dolor sit amet, consectetur,
adipisci velit, sed quia non.</p>
          </div> 

          <div className='cardd'>
            <div className='cardi' data-aos="fade-down" data-aos-duration="1000">
           <div className="mini-cardi">
            <img src={ca2} alt="" className='img'/>
            </div>
            
<hr />
<p>Model: 2017  3100 mi  240HP</p>
<p>Automatic </p>
</div>

<h1 className='q'>Chevrolet camaro WVM20</h1>
<h3>$66,575</h3>
<p>Neque porro quisquam est, qui dolorem
ipsum quia dolor sit amet, consectetur,
adipisci velit, sed quia non.</p>
          </div>
          
          <div className='cardd'>
            <div className='cardi'  data-aos="fade-down" data-aos-duration="1000">
              <div className="mini-cardi">
            <img src={ca3} alt="" className='img'/>
            </div>
<hr />
<p>Model: 2017  3100 mi  240HP</p>
<p>Automatic </p>
</div>

<h1 className='q'>Lamborghini V520</h1>
<h3>$125,250</h3>
<p>Neque porro quisquam est, qui dolorem
ipsum quia dolor sit amet, consectetur,
adipisci velit, sed quia non.</p>
          </div>
          <div className='cardd'>
            <div className='cardi' data-aos="fade-left" data-aos-duration="2000">
              <div className="mini-cardi">
            <img src={ca54} alt="" className='img'/>
            </div>
<hr />
<p>Model: 2017  3100 mi  240HP</p>
<p>Automatic </p>
</div>

<h1 className='q'>Audi A3 Sedan</h1>
<h3>$95,500</h3>
<p>Neque porro quisquam est, qui dolorem
ipsum quia dolor sit amet, consectetur,
adipisci velit, sed quia non.</p>
          </div>
          
          <div className='carddd'>
            <div className='cardii' data-aos="fade-right" data-aos-duration="2000">
              <div className="mini-cardi">
            <img src={ca54} alt="" className='img'/>
            </div>
<hr />
<p>Model: 2017  3100 mi  240HP</p>
<p>Automatic </p>
</div>

<h1 className='q'>Infiniti Z5</h1>
<h3>$36,850</h3>
<p>Neque porro quisquam est, qui dolorem
ipsum quia dolor sit amet, consectetur,
adipisci velit, sed quia non.</p>
          </div>
          <div className='carddd'>
            <div className='cardii' data-aos="fade-up" data-aos-duration="2000">
              <div className="mini-cardi">
            <img src={ca6} alt="" className='img'/>
            </div>
<hr />
<p>Model: 2017  3100 mi  240HP</p>
<p>Automatic </p>
</div>

<h1 className='q'>Porsche 718 Cayman</h1>
<h3>$48,500</h3>
<p>Neque porro quisquam est, qui dolorem
ipsum quia dolor sit amet, consectetur,
adipisci velit, sed quia non.</p>
          </div>
         
          <div className='carddd'>
            <div className='cardii' data-aos="fade-up" data-aos-duration="2000">
              <div className="mini-cardi">
            <img src={ca7} alt="" className='img'/>
            </div>
<hr />
<p>Model: 2017  3100 mi  240HP</p>
<p>Automatic </p>
</div>

<h1 className='q'>BMW 8-Series Coupe</h1>
<h3>$56,000</h3>
<p>Neque porro quisquam est, qui dolorem
ipsum quia dolor sit amet, consectetur,
adipisci velit, sed quia non.</p>
          </div>
          <div className='carddd'>
            <div className='cardii'  data-aos="fade-left" data-aos-duration="2000">
              <div className="mini-cardii">
            <img src={ca8} alt="" className='img'/>
            </div>
<hr />
<p>Model: 2017  3100 mi  240HP</p>
<p>Automatic </p>
</div>

<h1 className='q'>BMW xseries-6</h1>
<h3>$75,800</h3>
<p>Neque porro quisquam est, qui dolorem
ipsum quia dolor sit amet, consectetur,
adipisci velit, sed quia non.</p>
          </div>
            </div>
        </div>
    );
}

export default Section4;