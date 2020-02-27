import React from 'react'
import renderer from 'react-test-renderer'
import Modal from '../Modal'
import ReactModal from 'react-modal'

jest.mock('react-dom', () => ({
  createPortal: jest.fn(children => children),
}))

Modal.setAppElement(document.createElement('div'))
describe('Modal', () => {
  it('passes children given to it', () => {
    const modal = renderer.create(
      <Modal onClose={() => {}} isOpen>
        <p id="some-hello-id">Hello</p>
      </Modal>
    ).root
    expect(modal.findByProps({ id: 'some-hello-id' })).toBeDefined()
  })
  it('calls close function when close button is clicked', () => {
    const closeFn = jest.fn()
    const modal = renderer.create(
      <Modal onClose={closeFn} isOpen>
        <div />
      </Modal>
    ).root
    renderer.act(() =>
      modal.findByProps({ 'data-id': 'close-button' }).props.onClick()
    )
    expect(closeFn).toBeCalled()
  })
  describe('`isBodyScrollable` props', () => {
    it('has "is-clipped" class when props doesn\'t exist', () => {
      const modal = renderer.create(
        <Modal onClose={() => {}} isOpen>
          <div />
        </Modal>
      ).root
      expect(modal.findByType(ReactModal).props.htmlOpenClassName).toContain(
        'is-clipped'
      )
    })
    it('has "is-clipped" class when props is false', () => {
      const modal = renderer.create(
        <Modal onClose={() => {}} isOpen isBodyScrollable={false}>
          <div />
        </Modal>
      ).root
      expect(modal.findByType(ReactModal).props.htmlOpenClassName).toContain(
        'is-clipped'
      )
    })
    it('doesn\'t have "is-clipped" class when props is true', () => {
      const modal = renderer.create(
        <Modal onClose={() => {}} isOpen isBodyScrollable>
          <div />
        </Modal>
      ).root
      expect(
        modal.findByType(ReactModal).props.htmlOpenClassName
      ).not.toContain('is-clipped')
    })
  })
  describe('`className` and `overlayClassName` props', () => {
    it('passes the className and overlayClassName to ReactModal', () => {
      const className = 'sunshine'
      const overlayClassName = 'cloudy'
      const modal = renderer.create(
        <Modal
          onClose={() => {}}
          isOpen
          className={className}
          overlayClassName={overlayClassName}
        >
          <div />
        </Modal>
      ).root
      const reactModal = modal.findByType(ReactModal)
      expect(reactModal.props.className).toContain(className)
      expect(reactModal.props.overlayClassName).toContain(overlayClassName)
    })
  })
})
