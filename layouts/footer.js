import CONSTANTS from '@/lib/constants'
import styled from '@emotion/styled'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Footer = () => {
  const [footerInfo, setFooterInfo] = useState(null)
  const [isError, setIsError] = useState({ status: false, error: '' })

  useEffect(() => {
    async function getFooterInfo() {
      try {
        const response = await fetch(`${CONSTANTS.API_URL}/footer`)
        const data = await response.json()

        return setFooterInfo(data)
      } catch (error) {
        console.log(error)
        setIsError({ status: true, error })
      }
    }

    getFooterInfo()
  }, [])

  console.log(footerInfo)

  return (
    <FooterWrapper>
      <div className="wrapper">
        <img
          src="/static/images/logo.png"
          alt="Leospa Beauty Spa Logo"
          className="logo"
        />
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
        <div className="info">
          {footerInfo ? (
            <>
              <p>{footerInfo.name}</p>
              <p>
                {footerInfo.address} - {footerInfo.zipncity}
              </p>
              <p>{footerInfo.openinghours}</p>
              <p>CVR: {footerInfo.cvr}</p>
              <p>
                Email:{' '}
                <a href={`mailto:${footerInfo.email}`}>{footerInfo.email}</a>
              </p>
              <p>
                Tlf.{' '}
                <a href={`tel:+45${footerInfo.phone.replaceAll(' ', '')}`}>
                  {footerInfo.phone}
                </a>
              </p>
            </>
          ) : (
            isError.status && <p>{isError.error}</p>
          )}
        </div>
        <div className="social">
          <a href="facebook.com" target="_blank">
            <i className="ti-facebook"></i>
          </a>
          <a href="twitter.com" target="_blank">
            <i className="ti-twitter-alt"></i>
          </a>
          <a href="vimeo.com" target="_blank">
            <i className="ti-vimeo-alt"></i>
          </a>
          <a href="instagram.com" target="_blank">
            <i className="ti-instagram"></i>
          </a>
        </div>
        <div className="copyright">
          &copy; COPYRIGHT 2019 <a href="themeis.com">THEMEIES.COM</a>. ALL
          RIGHTS RESERVED.
        </div>
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  height: inherit;
  background-color: var(--color-secondary-2);
  text-align: center;

  & > .wrapper {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
  }

  nav ul {
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    gap: 2.5rem;

    a {
      color: var(--color-black-2);
    }
  }

  .social {
    display: flex;
    gap: 1rem;
    font-size: 1.6rem;

    a {
      color: var(--color-black-2);
      position: relative;
      border-right: 0.1rem solid var(--color-gray-2);
      padding-right: 1rem;
      line-height: 1;
    }
  }

  .info {
    font-weight: 300;

    a {
      color: var(--color-primary);
      font-weight: 500;
    }
  }

  .copyright {
    font-weight: 300;
    font-size: var(--font-size-sm);

    a {
      color: var(--color-primary);
      font-weight: 500;
    }
  }
`

export default Footer
