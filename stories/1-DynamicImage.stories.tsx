import React from 'react'
import DynamicImage from '../src/DynamicImage'

export default {
  title: 'DynamicImage',
  component: DynamicImage,
}

export const Default = () => (
  <DynamicImage src="https://via.placeholder.com/{dimension}" width={320} />
)

export const SrcSet = () => (
  <DynamicImage
    src="https://via.placeholder.com/{dimension}"
    width={480}
    srcSet={[
      { imageWidth: 50, maxScreenWidth: 320 },
      { imageWidth: 120, maxScreenWidth: 400 },
      { imageWidth: 320, maxScreenWidth: 1120 },
    ]}
  />
)

export const WithAlt = () => (
  <DynamicImage
    src="broken-image"
    alt="This is the alt of Broken Image"
    width={320}
  />
)
