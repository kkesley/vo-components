import * as React from 'react'
import Modal from './Modal'
import { style, classes } from 'typestyle'
import { viewWidth, viewHeight, em } from 'csx'
import colors from './themes/colors'
import { useState } from 'react'
import { useKey } from 'react-use'

const styles = {
  modal: style({
    backgroundColor: colors.transparent,
    overflow: 'hidden',
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
  topLabel: style({
    marginBottom: em(1),
  }),
}

interface ILightboxProvider {
  open: (index?: number) => any
  activeIndex: number
}

export const LightboxProvider = React.createContext<ILightboxProvider>(
  {} as ILightboxProvider
)

export interface LightboxProps {
  topLabel?: string
  images?: string[]
  children: React.ReactNode
  actionComponent?: React.ReactNode
}

export default function Lightbox({
  images,
  children,
  actionComponent,
  topLabel,
}: LightboxProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const open = (index = 0) => {
    setIndex(index)
    setIsOpen(true)
  }
  const previous = () => {
    if (!isOpen) return
    setIndex((index) => {
      if (images && index === 0) {
        return images.length - 1
      }
      return index - 1
    })
  }
  const next = () => {
    if (!isOpen) return
    setIndex((index) => {
      if (images && index === images.length - 1) {
        return 0
      }
      return index + 1
    })
  }
  useKey('ArrowLeft', previous, undefined, [isOpen])
  useKey('ArrowRight', next, undefined, [isOpen])
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
          {topLabel && (
            <p
              className={classes(
                'is-size-6 has-text-white has-text-centered',
                styles.topLabel
              )}
            >
              {topLabel}
            </p>
          )}
          <figure className="image">
            <img
              alt={`Lightbox number ${index + 1}`}
              className={styles.image}
              src={currentImage}
              data-testid="active-image"
            />
          </figure>
          <div test-id="action-component">{actionComponent}</div>
          <button
            onClick={() => previous()}
            data-testid="previous-button"
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
            data-testid="next-button"
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
      <LightboxProvider.Provider value={{ open, activeIndex: index }}>
        {children}
      </LightboxProvider.Provider>
    </>
  )
}
