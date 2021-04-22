import useOnClickOutside from '@/hooks/useOnClickOutside'
import CONSTANTS from '@/lib/constants'
import { mq } from '@/styles/global'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import CustomLink from './common/custom-link'

const Navbar = ({ adminNavbar, isFooter }) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef(null)
  const router = useRouter()

  useOnClickOutside(dropdownRef, () => {
    setShowDropdown(false)
  })

  return (
    <NavbarWrapper isFooter={isFooter}>
      <ul className="nav-list">
        {CONSTANTS.header[adminNavbar ? 'admin' : 'default'].map(
          (item, index) => (
            <li key={index}>
              <CustomLink
                href={item.link}
                className={router.pathname === item.link ? 'active' : ''}
              >
                {item.label}
              </CustomLink>
            </li>
          )
        )}
      </ul>

      <div className="dropdown" ref={dropdownRef}>
        <button
          className="hamburger tertiary"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <i className="ti-menu"></i>
        </button>
        <div className="container-dropdown">
          {showDropdown && (
            <ul className="list-dropdown">
              {CONSTANTS.header[adminNavbar ? 'admin' : 'default'].map(
                (item, index) => (
                  <li key={index}>
                    <CustomLink
                      href={item.link}
                      className={router.pathname === item.link ? 'active' : ''}
                    >
                      {item.label}
                    </CustomLink>
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      </div>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
  .nav-list {
    display: flex;
    gap: 0 3rem;
    text-transform: uppercase;
  }

  .nav-list {
    ${mq[1]} {
      display: ${({ isFooter }) => (isFooter ? 'flex' : 'none')};
      gap: ${({ isFooter }) => (isFooter ? '2rem' : '0 3rem')};
      flex-direction: ${({ isFooter }) => (isFooter ? 'column' : 'row')};
    }
  }

  .hamburger {
    display: none;
    font-size: var(--font-size-md);
    padding: 0;

    ${mq[1]} {
      display: ${({ isFooter }) => (isFooter ? 'none' : 'block')};
      position: relative;
    }
  }

  .container-dropdown {
    display: none;
    position: absolute;
    z-index: 50;

    ${mq[1]} {
      display: block;
      width: inherit;
      top: 10rem;
      left: 0;
      right: 0;

      padding: 2rem;
    }
  }

  .list-dropdown {
    display: flex;
    flex-direction: column;
    background-color: var(--color-secondary);
    text-align: center;
    padding: 2rem;

    a {
      display: block;
      font-size: var(--font-size-md);
      padding: 2rem;
    }
  }

  a {
    text-decoration: none;
    color: var(--color-black-2);
    font-size: var(--font-size);
    font-weight: 400;
    transition: color var(--transition);

    &:hover {
      color: var(--color-primary);
    }

    &.active {
      color: var(--color-primary);
    }
  }
`

export default Navbar
