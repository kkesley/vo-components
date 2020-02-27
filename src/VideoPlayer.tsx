import * as React from 'react'
import ReactPlayer from 'react-player'

interface VideoPlayerProps {
  url: string
  poster?: string
}

export default function VideoPlayer({
  // eslint-disable-next-line max-len
  url,
  poster,
}: VideoPlayerProps) {
  return (
    <figure className="image is-16by9">
      <ReactPlayer
        light={poster || false}
        controls
        className="has-ratio"
        width="100%"
        height="100%"
        url={url}
      />
    </figure>
  )
}
