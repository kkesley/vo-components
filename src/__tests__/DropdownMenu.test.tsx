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
    // it('gets deactivated when area outside of dropdown is clicked', () => {
    //   const container = document.createElement('div');
    //   document.body.appendChild(container);
    //   ReactTestUtils.act(() => {
    //     ReactDOM.render(
    //       <div>
    //         <button data-id="outside"/>
    //         <DropdownMenu>
    //           <div/>
    //         </DropdownMenu>
    //       </div>,
    //     container);
    //   })
    //   const button = container.querySelector('button[data-id="dropdown-button"]') as Element
    //   const parent = container.querySelector('div[data-id="dropdown-parent"]') as Element
    //   const outside = container.querySelector('button[data-id="outside"]') as Element
    //   ReactTestUtils.act(() => {
    //     ReactTestUtils.Simulate.click(button);
    //   })
    //   expect(parent.className).toContain('is-active')
    //   ReactTestUtils.act(() => {
    //     ReactTestUtils.Simulate.click(outside);
    //   })
    //   expect(parent.className).not.toContain('is-active')
    // })
  })
})
