import React from 'react'
import renderer from 'react-test-renderer'
import Lottie from '../Lottie'

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
