import K from 'K';
import React from 'react';


import './BootstrapMedia.scss';


const BootstrapMedia = () => {
    // Nunca vamos a mostrar el elemento en producción
    if (K.PRODUCCION) return null;

    return (
        <div className="BootstrapMedia text-center" style={{lineHeight: '10px'}}>
            <div className='d-inline-block d-sm-none text-monospace'>
                <code className='text-monospace text-primary'>XS</code>
            </div>
            <div className='d-none d-sm-inline-block d-md-none text-monospace'>
                <code className='text-monospace text-secondary'>SM</code>
            </div>
            <div className='d-none d-md-inline-block d-lg-none text-monospace'>
                <code className='text-monospace text-success'>MD</code>
            </div >
            <div className='d-none d-lg-inline-block d-xl-none text-monospace'>
                <code className='text-monospace text-warning'>LG</code>
            </div >
            <div className='d-none d-xl-inline-block text-monospace'>
                <code className='text-monospace text-danger'>XL</code>
            </div >
        </div>
    );
}


export default BootstrapMedia;