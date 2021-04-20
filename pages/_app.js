import { Global } from '@emotion/react'
import globalStyles from '@/styles/global'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
