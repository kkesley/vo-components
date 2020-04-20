import React, { useState } from 'react'
import { Lottie } from '../src/Lottie'
import banana from './lottiefiles/banana.json'
import like from './lottiefiles/like.json'

export default {
  title: 'Lottie',
  component: Lottie,
}

export const Default = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div>
      <p className="has-text-centered">Click the icon</p>
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => setIsPlaying((isActive) => !isActive)}
      >
        <Lottie animationData={like} isPlaying={isPlaying} height={250} />
      </div>
    </div>
  )
}

export const StartFromEnd = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div>
      <p className="has-text-centered">Click the icon</p>
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => setIsPlaying((isActive) => !isActive)}
      >
        <Lottie
          animationData={like}
          isPlaying={isPlaying}
          isReversed
          height={250}
        />
      </div>
    </div>
  )
}

export const AutoPlay = () => (
  <Lottie autoplay animationData={like} height={250} />
)

export const Loop = () => (
  <Lottie loop autoplay animationData={banana} height={250} />
)

export const ReversedAutoPlay = () => (
  <Lottie animationData={banana} loop autoplay isReversed height={250} />
)
