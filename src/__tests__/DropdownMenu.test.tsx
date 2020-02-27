import React from 'react'
import renderer from 'react-test-renderer'
// import ReactDOM from 'react-dom';
// import ReactTestUtils from 'react-dom/test-utils'
import DropdownMenu from '../DropdownMenu'

describe('DropdownMenu', () => {
  it('passes children given to it', () => {
    const dropdown = renderer.create(
      <DropdownMenu>
        <p id="some-hello-id">Hello</p>
      </DropdownMenu>
    ).root
    expect(dropdown.findByProps({ id: 'some-hello-id' })).toBeDefined()
  })
  describe('Active / Inactive state', () => {
    it('is inactive by default', () => {
      const dropdown = renderer.create(
        <DropdownMenu>
          <div />
        </DropdownMenu>
      ).root
      expect(
        dropdown.findByProps({ 'data-id': 'dropdown-parent' }).props.className
      ).not.toContain('is-active')
    })
    it('gets toggled when trigger button is clicked', () => {
      const dropdown = renderer.create(
        <DropdownMenu>
          <div />
        </DropdownMenu>
      ).root
      renderer.act(() =>
        dropdown.findByProps({ 'data-id': 'dropdown-button' }).props.onClick()
      )
      expect(
        dropdown.findByProps({ 'data-id': 'dropdown-parent' }).props.className
      ).toContain('is-active')
      renderer.act(() =>
        dropdown.findByProps({ 'data-id': 'dropdown-button' }).props.onClick()
      )
      expect(
        dropdown.findByProps({ 'data-id': 'dropdown-parent' }).props.className
      ).not.toContain('is-active')
    })
  })
})
