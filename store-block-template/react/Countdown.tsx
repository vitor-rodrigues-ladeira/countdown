import { useEffect, useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { TimeSplit } from './typings/global'
import { tick, getTwoDaysFromNow, formattedDate } from './utils/time'

interface CountdownProps {
  targetDate: string
}

const CSS_HANDLES = ['countdown']
const DEFAULT_TARGET_DATE = getTwoDaysFromNow()

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ targetDate = DEFAULT_TARGET_DATE }) => {
  const [timeRemaining, setTime] = useState<TimeSplit>({
    days: '0',
    hours: '00',
    minutes: '00',
    seconds: '00'
  })

  const handles = useCssHandles(CSS_HANDLES)
  const formatted = formattedDate(targetDate)

  useEffect(() => {
    tick(targetDate, setTime)
  }, [timeRemaining])

  if (timeRemaining.days == '0' && timeRemaining.hours == '00' && timeRemaining.minutes == '00' && timeRemaining.seconds == '00') {
    return (
      <div className={`${handles.countdown}c-muted-1 tc`}><h1>Oferta expirada</h1> <span>Data final: {formatted}</span></div>
    )
  } else if (timeRemaining.days == '0' && timeRemaining.hours != '00') {
    return (
      <div className={`${handles.countdown}c-muted-1 tc`}>
        <h1>{timeRemaining.hours}h : {timeRemaining.minutes}m : {timeRemaining.seconds}s</h1>
        <p>Data final: {formatted}</p>
      </div>
    )
  } else if (timeRemaining.days == '0' && timeRemaining.hours == '00' && timeRemaining.minutes != '00') {
    return (
      <div className={`${handles.countdown}c-muted-1 tc`}>
        <h1>{timeRemaining.minutes}m : {timeRemaining.seconds}s</h1>
        <p>Data final: {formatted}</p>
      </div>
    )
  } else if (timeRemaining.days == '0' && timeRemaining.hours == '00' && timeRemaining.minutes == '00' && timeRemaining.seconds != '00') {
    return (
      <div className={`${handles.countdown}c-muted-1 tc`}>
        <h1>{timeRemaining.seconds}s</h1>
        <p>Data final: {formatted}</p>
      </div>
    )
  } else {
    return (
      <div className={`${handles.countdown}c-muted-1 tc`}>
        <h1>{timeRemaining.days}d : {timeRemaining.hours}h : {timeRemaining.minutes}m : {timeRemaining.seconds}s</h1>
        <p>Data final: {formatted}</p>
      </div>
    )
  }
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
      format: 'date-time',
      default: null
    }
  },
}

export default Countdown