import React from 'react';
import './Modal.css'

function Modal({Close}) {
    return (
        <div className='overly'>
            <div className='modal'>

    <h1>Chevrolet Camaro ZA100</h1>
    <p>Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt
in culpa qui officia deserunt mollit anim id est
laborum.</p>
    <button onClick={Close} className='modal-btn'>Modal</button>

            </div>
        </div>
    );
}

export default Modal;