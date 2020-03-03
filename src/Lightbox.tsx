import * as React from 'react'
import Modal from './Modal'
import { style, classes } from 'typestyle'
import { viewWidth, viewHeight } from 'csx'
import colors from './themes/colors'
import { useState } from 'react'
import { useKey } from 'react-use'

const styles = {
  modal: style({
    backgroundColor: colors.transparent,
  }),
  arrow: style({
    position: 'absolute',
    top: '50%',
    backgroundColor: colors.transparent,
    borderColor: colors.transparent,
    color: colors.whiteBis,
    width: 70,
    height: 70,
  }),
  arrowLeft: style({
    left: 20,
  }),
  arrowRight: style({
    right: 20,
  }),
  image: style({
    maxWidth: viewWidth(80),
    maxHeight: viewHeight(80),
    objectFit: 'contain',
  }),
}

interface ILightboxProvider {
  open: () => any
}

export const LightboxProvider = React.createContext<ILightboxProvider>(
  {} as ILightboxProvider
)

interface LightboxProps {
  images?: string[]
  children: React.ReactNode
}

export default function Lightbox({ images, children }: LightboxProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const open = (index = 0) => {
    setIndex(index)
    setIsOpen(true)
  }
  const previous = () => {
    if (!isOpen) return
    setIndex(index => {
      if (images && index === 0) {
        return images.length - 1
      }
      return index - 1
    })
  }
  const next = () => {
    if (!isOpen) return
    setIndex(index => {
      if (images && index === images.length - 1) {
        return 0
      }
      return index + 1
    })
  }
  useKey('ArrowLeft', previous)
  useKey('ArrowRight', next)
  useKey('Escape', () => setIsOpen(false))
  const currentImage = React.useMemo(() => {
    if (images) {
      return images[index % images.length]
    }
    return undefined
  }, [images, index])
  return (
    <>
      {currentImage && (
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          className={styles.modal}
        >
          <figure className="image">
            <img
              alt={`Lightbox number ${index + 1}`}
              className={styles.image}
              src={currentImage}
              data-id="active-image"
            />
          </figure>
          <button
            onClick={() => previous()}
            data-id="previous-button"
            className={classes(
              'button is-rounded',
              styles.arrow,
              styles.arrowLeft
            )}
          >
            <span className="icon">
              <i className="fas fa-chevron-left" />
            </span>
          </button>
          <button
            onClick={() => next()}
            data-id="next-button"
            className={classes(
              'button is-rounded',
              styles.arrow,
              styles.arrowRight
            )}
          >
            <span className="icon">
              <i className="fas fa-chevron-right" />
            </span>
          </button>
        </Modal>
      )}
      <LightboxProvider.Provider value={{ open }}>
        {children}
      </LightboxProvider.Provider>
    </>
  )
}
