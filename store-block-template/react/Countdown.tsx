import React, { useEffect, useState } from 'react'
import { TimeSplit } from './typings/global'
import { tick, getTwoDaysFromNow, formattedDate } from './utils/time'

interface CountdownProps {
  targetDate: string
}

const DEFAULT_TARGET_DATE = getTwoDaysFromNow()

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ targetDate = DEFAULT_TARGET_DATE }) => {
  const [timeRemaining, setTime] = useState<TimeSplit>({
    hours: '00',
    minutes: '00',
    seconds: '00'
  })
  const formatted = formattedDate(targetDate)

  useEffect(() => {
    tick(targetDate,setTime)
  }, [timeRemaining])
  //tick(targetDate, setTime)

  return (
    <div><h1>{timeRemaining.hours}:{timeRemaining.minutes}:{timeRemaining.seconds}</h1> <span>Data final: {formatted}</span></div>
  )
}

Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
    targetDate: {
      title: 'Data final',
      description: 'Data final utilizada no contador.',
      type: 'string',
      format: 'date',
      default: null
    }
  },
}

export default Countdown
