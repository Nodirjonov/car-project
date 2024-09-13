import React from 'react';
import "./Section2.css"
import car from '../images/car.png'
import vector from '../images/Vector.png'
import ca from '../images/ca.png'



function Section2() {
    return (
        <div className='sec2'>
            <div className='card' data-aos="fade-up" data-aos-duration="3000">
                <img src={car} alt="" />
<h2>Largest dealership of car</h2>
<p>Nemo enim ipsam voluptatem quia
voluptas sit aspernatur aut odit aut
den fugit sed quia.</p>
<div className='chop'>
<button className='mini-btn'></button>
</div>

            </div> 


            <div className='card' data-aos="fade-up" data-aos-duration="2000">
                <img src={vector} alt="" />
<h2>Unlimited repair warrenty</h2>
<p>Nemo enim ipsam voluptatem quia
voluptas sit aspernatur aut odit aut
den fugit sed quia.</p>
<button className='mini-btn'></button>
            </div>


            <div className='card' data-aos="fade-up" data-aos-duration="1000" >
                <img src={ca} alt="" />
<h2>Insurence support</h2>
<p>Nemo enim ipsam voluptatem quia
voluptas sit aspernatur aut odit aut
den fugit sed quia.</p>
<button className='mini-btn'></button>
            </div>
        </div>
    );
}

export default Section2;