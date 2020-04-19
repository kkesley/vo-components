import React from 'react'
import DropdownMenu from '../src/DropdownMenu'
import colors from '../src/themes/colors'

export default {
  title: 'DropdownMenu',
  component: DropdownMenu,
}

const BaseComponent = ({
  children,
  text,
}: {
  children: React.ReactNode
  text?: string
}) => (
  <div
    style={{
      height: 300,
      width: 600,
      position: 'relative',
      backgroundColor: colors.greyDark,
    }}
  >
    {text && <p className="has-text-white">{text}</p>}
    <div className="is-overlay">{children}</div>
  </div>
)

const DropdownContent = () => (
  <>
    <button onClick={() => {}} className="button is-white dropdown-item">
      Edit
    </button>
    <button
      onClick={() => {}}
      className="button is-white dropdown-item has-text-danger"
    >
      Delete
    </button>
  </>
)

export const Default = () => (
  <BaseComponent>
    <DropdownMenu>
      <DropdownContent />
    </DropdownMenu>
  </BaseComponent>
)

export const Alignment = () => (
  <div className="columns">
    <div className="column">
      <BaseComponent text="This dropdown has right alignment">
        <DropdownMenu align="right">
          <DropdownContent />
        </DropdownMenu>
      </BaseComponent>
    </div>
    <div className="column">
      <BaseComponent text="This dropdown has left alignment">
        <DropdownMenu align="left">
          <DropdownContent />
        </DropdownMenu>
      </BaseComponent>
    </div>
  </div>
)
