import * as React from 'react'
import lottie, { AnimationItem } from 'lottie-web'
import { usePreviousDistinct, usePrevious } from 'react-use'

interface LottieBaseDataProps {
  animationData: any
}

interface LottieUIProps extends LottieBaseDataProps {
  height?: string | number
}

export interface LottieToggleProps extends LottieUIProps {
  isActive: boolean
}

export function LottieToggle({
  animationData,
  isActive,
  height,
}: LottieToggleProps) {
  const { animation, ref } = useLottieRef({
    animationData,
    isReversed: isActive,
  })
  const previousActive = usePrevious(isActive)
  React.useEffect(() => {
    if (!animation) return
    if (previousActive === isActive) return
    animation.setDirection(isActive ? 1 : -1)
    animation.setSpeed(isActive ? 1 : 2)
    animation.play()
  }, [animation, isActive, previousActive])
  if (!animationData) return null
  return <div style={{ height }} ref={ref} />
}

interface LottieInitialiseParams extends LottieBaseDataProps {
  loop?: boolean
  autoplay?: boolean
  onCompleted?: () => void
  isReversed?: boolean
}

function useLottieRef({
  loop,
  autoplay,
  animationData,
  onCompleted,
  isReversed,
}: LottieInitialiseParams) {
  const [animation, setAnimation] = React.useState<AnimationItem | undefined>(
    undefined
  )
  const ref = React.useCallback(
    (node) => {
      if (node === null) {
        return
      }
      const lottieAnimation = lottie.loadAnimation({
        container: node,
        renderer: 'svg',
        loop,
        autoplay,
        animationData, // the path to the animation json
      })
      setAnimation(lottieAnimation)
      const completeListener = () => {
        if (onCompleted) {
          onCompleted()
        }
      }
      lottieAnimation.addEventListener('complete', completeListener)
      return () => {
        lottieAnimation.removeEventListener('complete', completeListener)
      }
    },
    [animationData, loop, onCompleted, autoplay]
  )
  const previousIsReversed = usePreviousDistinct(isReversed)
  React.useEffect(() => {
    if (!animation || previousIsReversed !== undefined) return
    if (isReversed) {
      const duration = animation.getDuration(true)
      if (autoplay) {
        animation.goToAndPlay(duration, true)
      } else {
        // using `duration` makes the animation dissapear.. So let's use `duration - 1` for now
        animation.goToAndStop(duration - 1, true)
      }
    }
    animation.setDirection(isReversed ? -1 : 1)
  }, [isReversed, autoplay, animation, previousIsReversed])
  return { animation, ref }
}

export interface LottieProps extends LottieUIProps, LottieInitialiseParams {
  isPlaying?: boolean
}

export function Lottie({
  animationData,
  loop,
  autoplay,
  height = '100%',
  isPlaying,
  isReversed,
  onCompleted,
}: LottieProps) {
  const { animation, ref } = useLottieRef({
    loop,
    autoplay,
    animationData,
    onCompleted,
    isReversed,
  })

  React.useEffect(() => {
    if (!animation) return
    if (isPlaying) {
      animation.play()
    }
  }, [isPlaying, animation])

  if (!animationData) {
    return null
  }
  return <div style={{ height }} ref={ref} />
}
