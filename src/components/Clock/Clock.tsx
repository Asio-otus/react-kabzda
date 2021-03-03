import React, {useEffect, useState} from "react";
import style from './clock.module.scss'

type PropsType = {
    mode?: 'digital' | 'analog'
}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date());
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])


    // Switch between clock types
    let view: JSX.Element;
    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }

    // Render the clock
    return (
        <div>
            {view}
        </div>
    )
}

// Clock types
type ClockViewPropsType = {
    date: Date
}

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {

    const get2digitString = (num: number) => num < 10 ? '0' + num : num;

    return (
        <>
            <span>{get2digitString(date.getHours())}</span>
            <span>:</span>
            <span>{get2digitString(date.getMinutes())}</span>
            <span>:</span>
            <span>{get2digitString(date.getSeconds())}</span>
        </>
    )
}

export const AnalogClockView: React.FC<ClockViewPropsType> = ({date}) => {

    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };

    return (
        <>
            <div className={style.clock}>
                <div className={style.analogClock}>
                    <div className={`${style.dial} ${style.seconds}`} style={secondsStyle}/>
                    <div className={`${style.dial} ${style.minutes}`} style={minutesStyle}/>
                    <div className={`${style.dial} ${style.hours}`} style={hoursStyle}/>
                </div>
            </div>
        </>
    )
}