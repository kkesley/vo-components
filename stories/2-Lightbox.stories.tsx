import React, { useContext } from 'react'
import { Lightbox, LightboxProvider } from '../src'

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
