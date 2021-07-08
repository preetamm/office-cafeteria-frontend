import React, { useState, useEffect } from "react";



const DeliveryTime = ({  hoursMinSecs, currentOrder }) => {
    //const [counter, setCounter] = useState(deliveryTime);
    const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);
    
    const tick = () => {

        if (hrs === 0 && mins === 0 && secs === 0)
            return
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };

    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    })


    /* React.useEffect(() => {
         const timer =
             counter.minutes > 0 && setInterval(() => setCounter(clockTick(counter)), 1000);
         return () => clearInterval(timer);
     }, [counter]); */
    return (
        <div className='bg-secondary  mobileS:w-full mobileL:w-2/5 rounded-tr  absolute text-base bottom-0 p-2 text-white '>{  ` Delivers In ${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')} `}</div>
    )
}

export default DeliveryTime;