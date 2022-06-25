import React, { useState } from 'react'

function Usestate() {
    // initilizing of useState hooks 
    const [counter, setcount] = useState(0);
    const [inputstr,setstr]=useState('');

//  setting counter 
    const increment = () => {
        setcount(counter + 1)
        console.log(counter)
    };

    //this is for fetching the input tag value and dumping it on screen

    const onchng = event=> {
        const newstr=event.target.value;
        setstr(newstr)
    }; 



    return (
        <div>
            {counter} <button onClick={increment}>increment</button>
            <div>
                <input placeholder=' write smthng...' onChange={onchng}/>{inputstr}
            </div>
        </div>
    )

}

export default Usestate