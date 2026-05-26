import React, {useState} from 'react'
import { TimeSplit } from './typings/global'
import { tick, getTwoDaysFromNow } from './utils/time'

interface CountdownProps {
  targetDate: string
}

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ targetDate }) => {
  const [timeRemaining, setTime] = useState<TimeSplit>({
    hours: '00',
    minutes: '00',
    seconds: '00'
  })

  return(
    <div><h1>{targetDate}</h1></div>
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
      default: '2026-04-09'
    }
  },
}

export default Countdown
