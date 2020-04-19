import * as React from 'react'
import { style } from 'typestyle'

const styles = {
  image: style({
    objectFit: 'cover',
  }),
}

export type ImageSize = 1920 | 1280 | 1080 | 720 | 480 | 320 | 120 | 50

export interface ResponsiveConfig {
  maxScreenWidth: number
  imageWidth: ImageSize
}

export interface DynamicImageURLArgs {
  src: string
  width: ImageSize
}

export const getDynamicImageURL = (props: DynamicImageURLArgs) => {
  const { src, width } = props
  return src.replace('{dimension}', width.toString())
}

export interface DynamicImageProps extends DynamicImageURLArgs {
  alt?: string
  srcSet?: ResponsiveConfig[]
}

export default function DynamicImage(props: DynamicImageProps) {
  const { alt, src, width, srcSet } = props
  return (
    <picture>
      {(srcSet || []).map((config, index) => (
        <source
          key={`img-${alt}-${index}`}
          media={`(max-width: ${config.maxScreenWidth}px)`}
          srcSet={getDynamicImageURL({ src, width: config.imageWidth })}
        />
      ))}
      <img
        className={styles.image}
        alt={alt}
        src={getDynamicImageURL({ src, width })}
      />
    </picture>
  )
}
