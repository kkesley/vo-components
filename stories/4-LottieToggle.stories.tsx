import React, { useState } from 'react'
import { LottieToggle } from '../src/Lottie'
import like from './lottiefiles/like.json'

export default {
  title: 'LottieToggle',
  component: LottieToggle,
}

export const Default = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <div>
      <p className="has-text-centered">Click the icon</p>
      <p className="has-text-centered">
        isActive: {isActive ? 'true' : 'false'}
      </p>
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => setIsActive((isActive) => !isActive)}
      >
        <LottieToggle height={250} animationData={like} isActive={isActive} />
      </div>
    </div>
  )
}

export const ToggleReversed = () => {
  const [isActive, setIsActive] = useState(true)
  return (
    <div>
      <p className="has-text-centered">Click the icon</p>
      <p className="has-text-centered">
        isActive: {isActive ? 'true' : 'false'}
      </p>
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => setIsActive((isActive) => !isActive)}
      >
        <LottieToggle height={250} animationData={like} isActive={isActive} />
      </div>
    </div>
  )
}
