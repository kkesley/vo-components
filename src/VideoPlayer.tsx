import * as React from 'react'
import ReactPlayer, { ReactPlayerProps } from 'react-player/lazy'
import { style, classes } from 'typestyle'

const styles = {
  coverContainer: style({
    height: '100%',
    $nest: {
      '& video': {
        objectFit: 'cover',
      },
    },
  }),
}

export interface VideoPlayerProps extends ReactPlayerProps {
  // if set, this will be displayed rather than the first frame of the video
  poster?: string

  // if set to true, the video will fill the entire container even though the container has a different aspect ratio than the video
  // it will also set the video's `object-fit` to "cover"
  isCover?: boolean
}

export default function VideoPlayer({
  // eslint-disable-next-line max-len
  url,
  poster,
  isCover,
  ...props
}: VideoPlayerProps) {
  return (
    <figure
      className={classes(isCover ? styles.coverContainer : 'image is-16by9')}
    >
      <ReactPlayer
        light={poster || false}
        controls
        className="has-ratio"
        width="100%"
        height="100%"
        url={url}
        {...props}
      />
    </figure>
  )
}
