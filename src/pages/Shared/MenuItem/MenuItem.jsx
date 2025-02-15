import React from 'react';

const MenuItem = ({ item }) => {
    const { image, name, price, recipe } = item;
    return (
        <div className='flex space-x-4'>
            <img style={{borderRadius:'0 200px 200px 200px'}} className='w-[100px] border ' src={image} alt="" /> 
            <div>
                <h3 className='uppercase'>{name}---------</h3>
                <p className='text-blue-800'>{ recipe}</p>
            </div>
            <p className='text-yellow-600'>${ price}</p>
        </div>
    );
};

export default MenuItem;