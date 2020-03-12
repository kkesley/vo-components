import React from 'react'
import renderer from 'react-test-renderer'
import Lightbox, { LightboxProvider } from '../Lightbox'
import Modal from '../Modal'

jest.mock('react-dom', () => ({
  createPortal: jest.fn(children => children),
}))

Modal.setAppElement(document.createElement('div'))

const defaultImages = ['abc.jpg', 'def.png', 'xyz.gif']
const getComponent = (images?: string[]) =>
  renderer.create(
    <Lightbox images={images || defaultImages}>
      <LightboxProvider.Consumer>
        {context => <div onClick={() => context.open()} data-id="child" />}
      </LightboxProvider.Consumer>
    </Lightbox>
  ).root

describe('Lightbox', () => {
  it('returns empty children if images are empty', () => {
    const lightbox = getComponent([])
    expect(lightbox.findAllByType(Modal).length).toBe(0)
    expect(lightbox.findAllByProps({ 'data-id': 'child' }).length).toBe(1)
  })
  it('returns empty when images are undefined', () => {
    const lightbox = renderer.create(
      <Lightbox>
        <div data-id="child" />
      </Lightbox>
    ).root
    expect(lightbox.findAllByType(Modal).length).toBe(0)
    expect(lightbox.findAllByProps({ 'data-id': 'child' }).length).toBe(1)
  })
  describe('When Lightbox is Closed', () => {
    it('gives context to its children', () => {
      const lightbox = getComponent()
      expect(
        lightbox.findByProps({ 'data-id': 'child' }).props.onClick
      ).toBeDefined()
    })
    it('opens a light box when context.open is called', () => {
      const lightbox = getComponent()
      expect(lightbox.findByType(Modal).props.isOpen).toEqual(false)
      renderer.act(() =>
        lightbox.findByProps({ 'data-id': 'child' }).props.onClick()
      )
      expect(lightbox.findByType(Modal).props.isOpen).toEqual(true)
    })
  })
  describe('When Lightbox is Opened', () => {
    let lightbox = getComponent()
    beforeEach(() => {
      renderer.act(() =>
        lightbox.findByProps({ 'data-id': 'child' }).props.onClick()
      )
    })
    it('renders the first image immediately when lightbox is opened', () => {
      expect(lightbox.findByType('img').props.src).toEqual(defaultImages[0])
    })
    describe('Image Navigation', () => {
      it('correctly changes image when next button is clicked', () => {
        renderer.act(() =>
          lightbox.findByProps({ 'data-id': 'next-button' }).props.onClick()
        )
        expect(lightbox.findByType('img').props.src).toEqual(defaultImages[1])
        renderer.act(() =>
          lightbox.findByProps({ 'data-id': 'next-button' }).props.onClick()
        )
        expect(lightbox.findByType('img').props.src).toEqual(defaultImages[2])
        renderer.act(() =>
          lightbox.findByProps({ 'data-id': 'next-button' }).props.onClick()
        )
        expect(lightbox.findByType('img').props.src).toEqual(defaultImages[0])
      })
      it('correctly changes image when previous button is clicked', () => {
        renderer.act(() =>
          lightbox.findByProps({ 'data-id': 'previous-button' }).props.onClick()
        )
        expect(lightbox.findByType('img').props.src).toEqual(defaultImages[2])
        renderer.act(() =>
          lightbox.findByProps({ 'data-id': 'previous-button' }).props.onClick()
        )
        expect(lightbox.findByType('img').props.src).toEqual(defaultImages[1])
        renderer.act(() =>
          lightbox.findByProps({ 'data-id': 'previous-button' }).props.onClick()
        )
        expect(lightbox.findByType('img').props.src).toEqual(defaultImages[0])
      })
    })
  })
})
