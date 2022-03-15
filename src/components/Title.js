import {useState} from 'react';

const Title = () => {
    
    const [status, setStatus] = useState("open");

    const handleClick  = () => {
        status === "open" ? setStatus("closed") : setStatus("open");
    }
    return (
        <>
            <h1>The Bright Bakery</h1>
            <p>est 2022</p>
            <h4 className='red'>The bakery is now {status}!</h4>
            <button onClick={handleClick}>Open/Closed</button>
        </>
    )

}

export default Title;