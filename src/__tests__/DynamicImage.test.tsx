import React from 'react'
import renderer from 'react-test-renderer'
import DynamicImage, { getDynamicImageURL, ImageSize } from '../DynamicImage'

interface TestCase {
  width: ImageSize
  result: string
}

describe('DynamicImage', () => {
  const src = 'https://cdn.test.com/image/{dimension}/abc.jpg'
  const testCases: TestCase[] = [
    {
      width: 1280,
      result: 'https://cdn.test.com/image/1280/abc.jpg',
    },
    {
      width: 720,
      result: 'https://cdn.test.com/image/720/abc.jpg',
    },
    {
      width: 320,
      result: 'https://cdn.test.com/image/320/abc.jpg',
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
      <DynamicImage src="test.jpg" width={1280} alt={alt} />
    ).root
    expect(image.findByType('img').props.alt).toEqual(alt)
  })
  it('correctly creates source(s) when srcSet is configured', () => {
    const image = renderer
      .create(
        <DynamicImage
          src="{dimension}/test.jpg"
          width={1920}
          srcSet={[
            { maxScreenWidth: 1920, imageWidth: 1280 },
            { maxScreenWidth: 720, imageWidth: 480 },
          ]}
        />
      )
      .toJSON()
    expect(image).toMatchSnapshot()
  })
})
