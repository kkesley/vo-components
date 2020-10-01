import { rgba } from 'csx'
import React from 'react'
import { stylesheet } from 'typestyle'
import VideoPlayer from '../src/VideoPlayer'

export default {
  title: 'VideoPlayer',
  component: VideoPlayer,
}

const styles = stylesheet({
  playerIcon: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    $nest: {
      '&:hover': {
        backgroundColor: rgba(0,0,0,0.7).toString()
      }
    }
  }
})

export const Default = () => (
  <VideoPlayer url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
)

const PlayerIcon = () => (
  <div className={styles.playerIcon}>
    <span className="icon is-large has-text-white">
      <i className="fas fa-3x fa-play" aria-hidden="true" />
    </span>
  </div>
)

export const WithPoster = () => (
  <VideoPlayer
    url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    poster="https://via.placeholder.com/720"
    playIcon={<PlayerIcon />}
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
