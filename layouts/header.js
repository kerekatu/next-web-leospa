import CONSTANTS from '@/lib/constants'
import styled from '@emotion/styled'
import Link from 'next/link'

const Header = ({ isHeaderHero }) => {
  return (
    <HeaderWrapper isHeaderHero={isHeaderHero}>
      <img className="logo" src="/static/images/logo.png" alt="Leospa Logo" />
      <nav>
        <ul>
          {CONSTANTS.header.default.map((item, index) => (
            <li key={index}>
              {item.link.includes('#') ? (
                <a href={item.link}>{item.label}</a>
              ) : (
                <Link href={item.link}>
                  <a>{item.label}</a>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  ${({ isHeaderHero }) =>
    isHeaderHero &&
    `
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    width: var(--page-width);
    height: inherit;
    margin: 0 auto;

    .logo {
      display: block;
      pointer-events: none;
      margin-right: 15rem;
    }

    nav ul {
      display: flex;
      gap: 0 3rem;
      text-transform: uppercase;
    }

    nav a {
      text-decoration: none;
      color: var(--color-black-2);
      font-size: var(--font-size);
      font-weight: 400;
    }
`}
`

export default Header
