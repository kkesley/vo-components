import React from 'react'
import { VideoPlayer } from '../src'

export default {
  title: 'VideoPlayer',
  component: VideoPlayer,
}

export const Default = () => (
  <VideoPlayer url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
)

export const WithPoster = () => (
  <VideoPlayer
    url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    poster="https://via.placeholder.com/720"
  />
)

export const VideoCover = () => (
  <div className="columns is-multiline">
    <div className="column is-3">
      <p>Is Cover</p>
      <figure className="image is-1by1">
        <VideoPlayer
          isCover
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          poster="https://via.placeholder.com/720"
        />
      </figure>
    </div>
    <div className="column is-3">
      <p>Is not Cover</p>
      <figure className="image is-1by1">
        <VideoPlayer
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          poster="https://via.placeholder.com/720"
        />
      </figure>
    </div>
    <div className="column is-3">
      <p>Is Cover</p>
      <figure className="image is-1by1">
        <VideoPlayer
          isCover
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          poster="https://via.placeholder.com/720"
        />
      </figure>
    </div>
  </div>
)
