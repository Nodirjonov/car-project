import React from 'react';
import './Section1.css'

function Section1() {
    return (
        <div className='sec1-big'>

           <h1 className='opicoty' data-aos="fade-up" data-aos-duration="1500">GET YOUR DESIRED CAR IN RESONABLE PRICE</h1>
           <p className='pi' data-aos="fade-down" data-aos-duration="1500">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
           incididunt ut labore et dolore magna aliqua.</p>
           <button className='btn1'>Contact us</button>

           <div className='position'>
            <div className="pos1">
            <label>Select Year</label>
<select>
    <option value="0">Year</option>
    <option value="1">New</option>
    <option value="2">1 Years</option>
    <option value="3">2-7 Years</option>
</select>
<label>Body Style</label>
<select>
    <option value="0">Style</option>
    <option value="1">Sedan</option>
    <option value="2">Van</option>
    <option value="3">Roadster</option>
</select>
</div>
            <div className="pos1">
            <label>Select Make</label>
<select>
    <option value="0">Make</option>
    <option value="1">Toyota</option>
    <option value="2">Audi</option>
    <option value="3">BMW</option>
</select>
<label>Car Condition</label>
<select>
    <option value="0">Condition</option>
    <option value="1">Something</option>
    <option value="2">Something</option>
    <option value="3">Something</option>
</select>
</div>
            <div className="pos1">
            <label>Select Model</label>
<select>
    <option value="0">Model</option>
    <option value="1">Kia-Rio</option>
    <option value="2">Mitsubishi</option>
    <option value="3">Ford</option>
</select>
<label>Select Price</label>
<select>
    <option value="0">Price</option>
    <option value="1">0.00$</option>
    <option value="2">0.00$</option>
    <option value="3">0.00$</option>
</select>

</div>
<button className='buttton'>Search</button>
           </div>
        </div>
    );
}

export default Section1;