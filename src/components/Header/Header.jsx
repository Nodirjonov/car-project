import React from 'react';
import "./Header.css"

function Header() {
    return (
        <div className='asnova'>
           <div className='left'>
<h1>CARVILLA</h1>
           </div>


           <div className='right'>
<a href="">Home</a>
<a href="">Service</a>
<a href="">Featured Cars</a>
<a href="">New Cars</a>
<a href="">Brands</a>
<a href="">Contact</a>

           </div>
      </div>
    );
}

export default Header;