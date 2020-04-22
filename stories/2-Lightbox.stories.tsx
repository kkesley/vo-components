import React, { useContext, useState } from 'react'
import Lightbox, { LightboxProvider } from '../src/Lightbox'

export default {
  title: 'Lightbox',
  component: Lightbox,
}

const LightboxContent = ({ openIndex }: { openIndex?: number }) => {
  const { open, activeIndex } = useContext(LightboxProvider)
  return (
    <>
      <button onClick={() => open(openIndex || 0)} className="button">
        Click to open lightbox
      </button>
      <p>Active index: {activeIndex}</p>
    </>
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

const LightboxAction = () => {
  const { activeIndex } = useContext(LightboxProvider)
  return (
    <p className="buttons is-centered" style={{ marginTop: 20 }}>
      <button
        onClick={() => alert(`active index is: ${activeIndex}`)}
        className="button"
      >
        <span className="icon is-small">
          <i className="fas fa-bold"></i>
        </span>
      </button>
      <button
        onClick={() => alert(`dont be shy activeIndex of ${activeIndex}`)}
        className="button"
      >
        <span className="icon is-small">
          <i className="fas fa-italic"></i>
        </span>
      </button>
      <button
        onClick={() =>
          alert(`oh noes activeIndex of ${activeIndex} is really mean`)
        }
        className="button"
      >
        <span className="icon is-small">
          <i className="fas fa-underline"></i>
        </span>
      </button>
    </p>
  )
}

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

const DeleteAction = ({ setImages }: { setImages: React.Dispatch<any> }) => {
  const { activeIndex } = useContext(LightboxProvider)
  return (
    <p className="buttons">
      <button
        onClick={() =>
          setImages((images) =>
            images.filter((_, index) => index !== activeIndex)
          )
        }
        className="button"
      >
        delete
      </button>
    </p>
  )
}

export const DeleteItem = () => {
  const [newImages, setImages] = useState(images)
  return (
    <Lightbox
      actionComponent={<DeleteAction setImages={setImages} />}
      topLabel="Click action to delete item"
      images={newImages}
    >
      <button className="button is-success" onClick={() => {
        setImages(images => [...images, 'https://via.placeholder.com/150'])
      }}>Generate item</button>
      <LightboxContent />
    </Lightbox>
  )
}
