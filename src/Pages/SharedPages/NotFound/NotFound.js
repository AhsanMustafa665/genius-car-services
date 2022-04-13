import React from 'react';
import images from '../../../images/404.png';
const NotFound = () => {
    return (
        <div>
            <h3 style={{ color: 'green', textAlign: 'center' }}>Mechanic is sleeping.</h3>
            <img style={{ width:'100%'}} src={images} alt="" />
        </div>
    );
};

export default NotFound;