import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigete=useNavigate()
    const navigateToServiceDetail = id => {
        navigete(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img className='service-img' src={img} alt="" />
            <h2>Name: {name}</h2>
            <p>Price:{price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=>navigateToServiceDetail(id)} class="bg-success text-white border-0 p-2 rounded">Book: {name}</button>
        </div>
    );
};

export default Service;