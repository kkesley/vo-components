import React from 'react'
import renderer from 'react-test-renderer'
import VideoPlayer from '../VideoPlayer'
import ReactPlayer from 'react-player'

jest.mock('react-player')

describe('VideoPlayer', () => {
  it('correctly passes url', () => {
    const player = renderer.create(<VideoPlayer url="test.mp4" />).root
    expect(player.findByType(ReactPlayer).props.url).toEqual('test.mp4')
  })
  describe('poster', () => {
    it('correctly assign `light` props when poster is not defined', () => {
      const player = renderer.create(<VideoPlayer url="test.mp4" />).root
      expect(player.findByType(ReactPlayer).props.light).toEqual(false)
    })
    it('correctly assign `light` props when poster is an empty string', () => {
      const player = renderer.create(<VideoPlayer url="test.mp4" poster="" />)
        .root
      expect(player.findByType(ReactPlayer).props.light).toEqual(false)
    })
    it('correctly assign `light` props when poster is a string', () => {
      const player = renderer.create(
        <VideoPlayer url="test.mp4" isCover poster="poster.png" />
      ).root
      expect(player.findByType(ReactPlayer).props.light).toEqual('poster.png')
    })
  })
})
