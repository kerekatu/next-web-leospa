import styled from '@emotion/styled'
import Head from 'next/head'
import Footer from '@/layouts/footer'
import Header from './header'

const defaultMeta = {
  title: 'Unnamed',
  description:
    'Leospa is a beauty spa designed and solely made for the purpose of changing lifes. From products, events and to many other services, we are what your skin needs.',
}

const Layout = ({
  metadata = defaultMeta,
  adminNavbar = false,
  isHeaderHero = false,
  children,
}) => {
  return (
    <LayoutWrapper isHeaderHero={isHeaderHero}>
      <Head>
        <title>{metadata.title} - Leospa Beauty Spa</title>
        <link rel="icon" href="/static/images/icons/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta charSet="utf-8" />
      </Head>

      <Header adminNavbar={adminNavbar} isHeaderHero={isHeaderHero} />
      <main>{children}</main>
      <Footer />
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-rows: 10rem minmax(calc(100vh - 10rem), 1fr) minmax(
      30rem,
      max-content
    );

  footer {
    margin-top: 4rem;
  }
`

export default Layout
