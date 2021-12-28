import React, { useState, useEffect } from 'react'
import './timer.css'

function Timer() {

  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [days, setDays] = useState(8)

  const [timeChange, setTimeChange] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds - 1)
      setTimeChange(!timeChange)
    }, 1000);
    return () => clearTimeout(timer)
  })

  if (seconds === -1) {
    setSeconds(59)
    setMinutes(minutes - 1)
  }
  if (minutes === -1) {
    setMinutes(59)
    setHours(hours - 1)
  }
  if (hours === -1) {
    setHours(23)
    setDays(days - 1)
  }



  return (
    <div className='timer'>
      <h3>we're launching soon</h3>
      <div className="time">
        <div className="number">
          <p>{days < 10 ? '0' + days : days}</p>
          <span>days</span>
        </div>
        <div className="number">
          <p>{hours < 10 ? '0' + hours : hours}</p>
          <span>hours</span>
        </div>
        <div className="number">
          <p>{minutes < 10 ? '0' + minutes : minutes}</p>
          <span>minutes</span>
        </div>
        <div className={`number ${timeChange ? 'flip' : ''}`}>
          <p>{seconds < 10 ? '0' + seconds : seconds}</p>
          <span>seconds</span>
        </div>
      </div>
    </div>
  )
}

export default Timer
