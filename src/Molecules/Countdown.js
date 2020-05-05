import React, { useState } from "react";
import Type from "Atoms/Type";

const Countdown = ({ date, afterText }) => {
    const timerInterval = setInterval(() => {
        setCountdown(date.getTime() - Date.now());
        if (Date.now() > date.getTime()) {
            setIsReached(true);
            clearInterval(timerInterval);
        }
    }, 1000);

    const [isReached, setIsReached] = useState(false);
    const [countdown, setCountdown] = useState(date.getTime() - Date.now());

    if (isReached) {
        return (
            <Type size="h2" bold align="center">
                The countdown has been finished!
            </Type>
        );
    }

    return (
        <Type size="h2" bold align="center">
            {Math.floor(countdown / (1000 * 60 * 60 * 24))} {" days, "}
            {Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}
            {" hours, "}
            {Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60))}
            {" minutes, and "}
            {Math.floor((countdown % (1000 * 60)) / 1000)}
            {" seconds"}
            {afterText ? " " + afterText + "." : "."}
        </Type>
    );
};

export default Countdown;
