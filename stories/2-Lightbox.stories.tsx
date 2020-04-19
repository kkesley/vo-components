import React, { useContext } from 'react'
import Lightbox, { LightboxProvider } from '../src/Lightbox'

export default {
  title: 'Lightbox',
  component: Lightbox,
}

const LightboxContent = ({ openIndex }: { openIndex?: number }) => {
  const { open } = useContext(LightboxProvider)
  return (
    <button onClick={() => open(openIndex || 0)} className="button">
      Click to open lightbox
    </button>
  )
}

const images = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/258',
  'https://via.placeholder.com/720',
  'https://via.placeholder.com/360',
]

export const Default = () => (
  <Lightbox images={images}>
    <p>Open at index 0</p>
    <LightboxContent />
  </Lightbox>
)

export const OpenIndex = () => (
  <Lightbox images={images}>
    <p>Lightbox will open the 4th item (index = 3)</p>
    <LightboxContent openIndex={3} />
  </Lightbox>
)

const LightboxAction = () => (
  <p className="buttons is-centered" style={{ marginTop: 20 }}>
    <button className="button">
      <span className="icon is-small">
        <i className="fas fa-bold"></i>
      </span>
    </button>
    <button className="button">
      <span className="icon is-small">
        <i className="fas fa-italic"></i>
      </span>
    </button>
    <button className="button">
      <span className="icon is-small">
        <i className="fas fa-underline"></i>
      </span>
    </button>
  </p>
)

export const ActionComponent = () => (
  <Lightbox actionComponent={<LightboxAction />} images={images}>
    <LightboxContent />
  </Lightbox>
)

export const TopLabel = () => (
  <Lightbox
    topLabel="Click the love icon below if you'd like to select your favorite image"
    images={images}
  >
    <LightboxContent />
  </Lightbox>
)

export const ActionComponentAndTopLabel = () => (
  <Lightbox
    actionComponent={<LightboxAction />}
    topLabel="Click the love icon below if you'd like to select your favorite image"
    images={images}
  >
    <LightboxContent />
  </Lightbox>
)
