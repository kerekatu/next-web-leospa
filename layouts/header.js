import Navbar from '@/components/navbar'
import { mq } from '@/styles/global'
import styled from '@emotion/styled'
import Link from 'next/link'

const Header = ({ isHeaderHero, adminNavbar }) => {
  return (
    <HeaderWrapper isHeaderHero={isHeaderHero}>
      <div className="header-content">
        <Link href="/">
          <a>
            <img
              className="logo"
              src="/static/images/logo.png"
              alt="Leospa Logo"
            />
          </a>
        </Link>
        <Navbar adminNavbar={adminNavbar} />
      </div>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  height: inherit;

  .header-content {
    display: flex;
    justify-content: ${({ isHeaderHero }) =>
      isHeaderHero ? 'flex-start' : 'space-between'};
    align-items: flex-end;
    max-width: var(--page-width);
    margin: 0 auto;
    padding: 0 4rem;
    height: 100%;

    ${mq[2]} {
      width: 100%;
    }

    ${mq[1]} {
      justify-content: space-between;
      padding: 0 6rem;
    }

    ${mq[0]} {
      padding: 0 2rem;
    }
  }

  .logo {
    display: block;
    pointer-events: none;
    margin-right: ${({ isHeaderHero }) => (isHeaderHero ? '13rem' : '0')};

    ${mq[2]} {
      height: 8rem;
    }

    ${mq[1]} {
      margin-right: 0;
    }
  }
`

export default Header
