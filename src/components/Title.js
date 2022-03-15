import React from 'react';

const Title = () => {
    
    const status = "open";
    return (
        <>
            <h1>The Bright Bakery</h1>
            <p>est 2022</p>
            <h4 className='red'>{status}</h4>
        </>
    )

}

export default Title;