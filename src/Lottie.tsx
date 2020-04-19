import * as React from 'react'
import lottie from 'lottie-web'

export interface LottieProps {
  animationData: any
  loop?: boolean
  autoplay?: boolean
  height?: string | number
}

export default function Lottie({
  animationData = null,
  loop = true,
  autoplay = true,
  height = '100%',
}: LottieProps) {
  const containerRef = React.useCallback(
    (node) => {
      if (node === null) {
        return
      }
      lottie.loadAnimation({
        container: node,
        renderer: 'svg',
        loop,
        autoplay,
        animationData, // the path to the animation json
      })
    },
    [animationData, autoplay, loop]
  )
  if (!animationData) {
    return null
  }
  return <div style={{ height }} ref={containerRef} />
}
