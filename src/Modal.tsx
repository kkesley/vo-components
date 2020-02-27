import * as React from 'react'
import { style, classes } from 'typestyle'
import colors from './themes/colors'
const ReactModal = require('react-modal')

const MODAL_Z_INDEX = 100

const styles = {
  overlay: style({
    zIndex: MODAL_Z_INDEX,
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: colors.overlayDarker,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowY: 'auto',
  }),
  modal: style({
    background: colors.white,
    overflow: 'auto',
    margin: 'auto',
    borderRadius: 5,
    outline: 'none',
  }),
}

interface ModalProps {
  isOpen: boolean
  onClose: () => any
  className?: string
  overlayClassName?: string
  closeTimeoutMS?: number
  isBodyScrollable?: boolean
  children: React.ReactNode
}
export default class Modal extends React.Component<ModalProps> {
  static setAppElement = (selector: any = '#root') =>
    ReactModal.setAppElement(selector)

  render() {
    const {
      isOpen,
      onClose,
      className,
      overlayClassName,
      closeTimeoutMS,
      isBodyScrollable,
      children,
    } = this.props
    return (
      <ReactModal
        closeTimeoutMS={closeTimeoutMS}
        isOpen={isOpen}
        onRequestClose={onClose}
        htmlOpenClassName={classes(!isBodyScrollable && 'is-clipped')}
        overlayClassName={classes(styles.overlay, overlayClassName)}
        className={classes(styles.modal, className)}
        ariaHideApp
        role="modal"
      >
        <button
          onClick={onClose}
          data-id="close-button"
          className="modal-close is-large"
          aria-label="close"
        />
        {children}
      </ReactModal>
    )
  }
}
