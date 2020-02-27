import React from 'react'
import renderer from 'react-test-renderer'
import DynamicImage, { getDynamicImageURL } from '../DynamicImage'

describe('DynamicImage', () => {
  const src = 'https://cdn.test.com/image/{dimension}/abc.jpg'
  const testCases = [
    {
      width: 1024,
      result: 'https://cdn.test.com/image/1024/abc.jpg',
    },
    {
      width: 720,
      result: 'https://cdn.test.com/image/720/abc.jpg',
    },
    {
      width: 999,
      result: 'https://cdn.test.com/image/999/abc.jpg',
    },
  ]
  testCases.forEach(({ width, result }) => {
    it(`returns the correct url for width: ${width}`, () => {
      expect(getDynamicImageURL({ src, width })).toEqual(result)
    })
    it(`has the correct src for width: ${width}`, () => {
      const image = renderer.create(<DynamicImage src={src} width={width} />)
        .root
      expect(image.findByType('img').props.src).toEqual(result)
    })
  })
  it('correctly passes the `alt` attribute to img', () => {
    const alt = 'hello'
    const image = renderer.create(
      <DynamicImage src="test.jpg" width={1024} alt={alt} />
    ).root
    expect(image.findByType('img').props.alt).toEqual(alt)
  })
})
