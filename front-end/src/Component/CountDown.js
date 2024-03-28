import React, { useEffect, useState } from "react";
import "../assets/css/Styles.css";


export function CountDownTimer({targetDate}) {

    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 10);
        return () => {
            clearInterval(intervalId);
        };
    }, []);
    function calculateTimeRemaining() {
        const now = new Date().getTime();
        const difference = targetDate.getTime() - now;

        if(difference <= 0){
            return { days: 0, hours: 0, minutes: 0, seconds: 0, milliseconds: 0};
        }

        const days = Math.floor(difference/(1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        const milliseconds = difference % 1000;

        return { days, hours, minutes, seconds, milliseconds };
    }

    return(
        <div>
            <div className="time">BIDDING ENDS IN : {timeRemaining.days} days&ensp;{timeRemaining.hours} hr&ensp;{timeRemaining.minutes} min&ensp;{timeRemaining.seconds} s</div>
        </div>
    )
}