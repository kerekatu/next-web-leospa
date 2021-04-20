import styled from '@emotion/styled'
import Head from 'next/head'
import Footer from '@/layouts/footer'
import Header from './header'

const defaultMeta = {
  title: 'Unnamed',
}

const Layout = ({ metadata = defaultMeta, isHeaderHero = false, children }) => {
  return (
    <LayoutWrapper isHeaderHero={isHeaderHero}>
      <Head>
        <title>{metadata.title} - Leospa Beauty Spa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header isHeaderHero={isHeaderHero} />
      <main>{children}</main>
      <Footer />
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-rows: 10rem 1fr minmax(30rem, max-content);

  footer {
    margin-top: 4rem;
  }
`

export default Layout
