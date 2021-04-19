import { css } from '@emotion/react'

const globalStyles = css`
  :root {
    --color-white: #fff;
    --color-black: #111;
    --color-black-2: #30383b;
    --color-gray: #f0f2f4;
    --color-primary: #ff817e;
    --color-secondary: #fcf5ee;
    --color-secondary-2: #fff9f8;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; // 10px
    box-sizing: border-box;
  }

  body {
    font-size: 1.6rem;
  }
`

export default globalStyles
