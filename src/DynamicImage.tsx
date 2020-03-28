import * as React from 'react'
import { style } from 'typestyle'

const styles = {
  image: style({
    objectFit: 'cover',
  }),
}

interface DynamicImageURLProps {
  src: string
  width: number
}

export const getDynamicImageURL = (props: DynamicImageURLProps) => {
  const { src, width } = props
  return src.replace('{dimension}', width.toString())
}

interface DynamicImageProps extends DynamicImageURLProps {
  alt?: string
}

export default function DynamicImage(props: DynamicImageProps) {
  const { alt, src, width } = props
  return (
    <img
      className={styles.image}
      alt={alt}
      src={getDynamicImageURL({ src, width })}
    />
  )
}
