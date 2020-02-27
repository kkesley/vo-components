import * as React from 'react'
import { useClickAway } from 'react-use'
import { classes, style } from 'typestyle'
import { important } from 'csx'

const styles = {
  dropdown: style({
    $nest: {
      '.button': {
        marginLeft: important(0),
        marginRight: important(0),
      },
    },
  }),
}

interface DropdownMenuProps {
  className?: string
  align?: 'left' | 'right'
  children: React.ReactNode
}

export default function DropdownMenu(props: DropdownMenuProps) {
  const { className, align, children } = props
  const dropdownRef = React.useRef(null)
  const [isDropdownActive, setIsDropdownActive] = React.useState(false)
  useClickAway(dropdownRef, () => setIsDropdownActive(false))
  return (
    <div
      data-id="dropdown-parent"
      ref={dropdownRef}
      className={classes(
        'dropdown is-pulled-right',
        align === 'right' && 'is-right',
        isDropdownActive && 'is-active'
      )}
    >
      <div className="dropdown-trigger">
        <button
          data-id="dropdown-button"
          onClick={() => setIsDropdownActive(!isDropdownActive)}
          className={classes('button is-dark is-radiusless', className)}
          aria-haspopup="true"
        >
          <span className="icon is-small">
            <i className="fas fa-ellipsis-v" aria-hidden="true" />
          </span>
        </button>
      </div>
      <div className="dropdown-menu" role="menu">
        <div className={classes('dropdown-content', styles.dropdown)}>
          {children}
        </div>
      </div>
    </div>
  )
}
