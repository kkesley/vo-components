import React from 'react'
import renderer from 'react-test-renderer'
import DropdownMenu from '../DropdownMenu'
import { render, fireEvent } from '@testing-library/react'

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
        dropdown.findByProps({ 'data-testid': 'dropdown-parent' }).props
          .className
      ).not.toContain('is-active')
    })
    it('gets toggled when trigger button is clicked', () => {
      const dropdown = renderer.create(
        <DropdownMenu>
          <div />
        </DropdownMenu>
      ).root
      renderer.act(() =>
        dropdown
          .findByProps({ 'data-testid': 'dropdown-button' })
          .props.onClick()
      )
      expect(
        dropdown.findByProps({ 'data-testid': 'dropdown-parent' }).props
          .className
      ).toContain('is-active')
      renderer.act(() =>
        dropdown
          .findByProps({ 'data-testid': 'dropdown-button' })
          .props.onClick()
      )
      expect(
        dropdown.findByProps({ 'data-testid': 'dropdown-parent' }).props
          .className
      ).not.toContain('is-active')
    })
    it('gets deactivated when area outside of dropdown is clicked', () => {
      const { getByTestId } = render(
        <div>
          <div data-testid="outside">outside</div>
          <DropdownMenu>
            <div />
          </DropdownMenu>
        </div>
      )

      const button = getByTestId('dropdown-button')
      const parent = getByTestId('dropdown-parent')
      expect(parent.className).not.toContain('is-active')
      fireEvent.click(button)
      expect(parent.className).toContain('is-active')
      fireEvent.mouseDown(getByTestId('outside'))
      expect(parent.className).not.toContain('is-active')
    })
  })
})
