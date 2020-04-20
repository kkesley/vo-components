import React from 'react'
import renderer from 'react-test-renderer'
import { Lottie, LottieToggle } from '../Lottie'

describe('Lottie', () => {
  it('renders without crashing', () => {
    const animation = renderer.create(
      <Lottie animationData={'test'} height={100} />
    ).root
    expect(animation.children).not.toHaveLength(0)
  })
  it('renders empty children when animationData is empty', () => {
    const animation = renderer.create(<Lottie animationData="" height={100} />)
      .root
    expect(animation.children).toHaveLength(0)
  })
})

describe('Toggle', () => {
  it('rdoes not crash when isActive is true', () => {
    const animation = renderer.create(
      <LottieToggle animationData={'test'} height={100} isActive />
    ).root
    expect(animation.children).not.toHaveLength(0)
  })
  it('does not crash when isActive is false', () => {
    const animation = renderer.create(
      <LottieToggle animationData={'test'} height={100} isActive={false} />
    ).root
    expect(animation.children).not.toHaveLength(0)
  })
  it('renders empty children when animationData is empty', () => {
    const animation = renderer.create(
      <LottieToggle isActive animationData="" height={100} />
    ).root
    expect(animation.children).toHaveLength(0)
  })
})
