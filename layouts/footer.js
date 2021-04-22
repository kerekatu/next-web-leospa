import Navbar from '@/components/navbar'
import CONSTANTS from '@/lib/constants'
import styled from '@emotion/styled'
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

  return (
    <FooterWrapper>
      <div className="wrapper">
        <img
          src="/static/images/logo.png"
          alt="Leospa Beauty Spa Logo"
          className="logo"
        />
        <Navbar isFooter />
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
                <a href={`mailto:${footerInfo.email}`} title="Write to us">
                  {footerInfo.email}
                </a>
              </p>
              <p>
                Tlf.{' '}
                <a
                  href={`tel:+45${footerInfo.phone.replaceAll(' ', '')}`}
                  title="Call us"
                >
                  {footerInfo.phone}
                </a>
              </p>
            </>
          ) : (
            isError.status && <p>{isError.error}</p>
          )}
        </div>
        <div className="social">
          <a href="facebook.com" target="_blank" title="Facebook">
            <i className="ti-facebook"></i>
          </a>
          <a href="twitter.com" target="_blank" title="Twitter">
            <i className="ti-twitter-alt"></i>
          </a>
          <a href="vimeo.com" target="_blank" title="Vimeo">
            <i className="ti-vimeo-alt"></i>
          </a>
          <a href="instagram.com" target="_blank" title="Instagram">
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
  padding: 4rem 0;

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
      transition: color var(--transition);

      &:hover {
        color: var(--color-primary);
      }
    }
  }

  .info {
    font-weight: 300;
  }

  .copyright {
    font-weight: 300;
    font-size: var(--font-size-sm);
  }

  .info a,
  .copyright a {
    color: var(--color-primary);
    font-weight: 500;
    transition: opacity var(--transition);

    &:hover {
      opacity: 0.6;
    }
  }
`

export default Footer
