import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{height:'300px'}} className='w-100  mx-auto d-flex justify-content-center'>
             <Spinner animation="border" variant="success" />
        </div>
    );
};

export default Loading;