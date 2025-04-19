import React, { useEffect, useState } from 'react'
const DigitalClock = () => {
    const [time, setTime] = useState(new Date())
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])
    function formatTime() {
        let hours = time.getHours()
        let mins = time.getMinutes()
        let seconds = time.getSeconds()
        let meredim = hours >= 12 ? "PM" : "AM"
        hours = hours % 12 || 12
        return `${padZero(hours)}:${padZero(mins)}:${padZero(seconds)} ${meredim}`
    }
    function formatDate() {
        let day = date.getDate()
        let month = date.toLocaleString('default', { month: 'long' })
        let year = date.getFullYear()
        return (`${day} ${month} ${year}`)
    }
    function padZero(num) {
        return (num < 10 ? "0" : "") + num
    }
    return (
        <div className='clock-container text-red-600'>
            <div className="clock font-bold text-6xl text-shadow-5xs ">
                <span className=''>{formatTime()}</span>
            </div>
            <div className="date">
                <span className='font-bold text-xl text-shadow-5xs'>{formatDate()}</span>
            </div>
        </div>
    )
}

export default DigitalClock