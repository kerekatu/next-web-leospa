import { css } from '@emotion/react'
import { buttonStyles } from './buttons'
import { fontStyles } from './fonts'
import { headingStyles } from './headings'

export const mq = [37.5, 50, 62.5].map(
  (bp) => `@media only screen and (max-width: ${bp}em)`
)

const globalStyles = css`
  /* FONTS 
  Rufina: 400, 700
  Roboto: 300, 400, 500, 700
  */

  /* VARIABLES */

  :root {
    --color-white: #fff;
    --color-black: #111;
    --color-black-2: #30383b;
    --color-black-3: rgba(48, 56, 59, 0.7);
    --color-gray: #f0f2f4;
    --color-gray-2: #ede9e9;
    --color-primary: #ff817e;
    --color-secondary: #fcf5ee;
    --color-secondary-2: #fff9f8;
    --color-tertiary: #53ba83;

    --font-primary: 'Roboto', sans-serif;
    --font-secondary: 'Rufina', sans-serif;
    --font-size-xs: 1.2rem;
    --font-size-sm: 1.4rem;
    --font-size: 1.6rem;
    --font-size-md: 2.4rem;
    --font-size-lg: 4.8rem;
    --font-size-xl: 6.4rem;

    --line-body: 1.58;
    --line-heading: 1.2;

    --page-width: 100rem;
    --transition: 0.15s ease-in-out;
  }

  /* BASE & RESET */

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
    /* scroll-behavior: smooth; */

    ${mq[2]} {
      font-size: 50%;
    }
  }

  body {
    font-size: var(--font-size);
    font-family: var(--font-primary);
    line-height: var(--line-body);
    font-weight: 400;
    background-color: var(--color-white);
    color: var(--color-black-2);
  }

  #__next {
    min-height: 100vh;
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  textarea {
    resize: vertical;
  }

  input,
  button,
  textarea {
    font-family: var(--font);
    line-height: 1;
    font-size: var(--font-size-xs);
    color: var(--color-black-2);
  }

  button {
    display: block;
    cursor: pointer;
  }

  /* HELPERS */

  .wrapper {
    max-width: var(--page-width);
    margin: 0 auto;
    padding: 4rem;

    ${mq[1]} {
      padding: 0 6rem;
    }

    ${mq[0]} {
      padding: 0 2rem;
    }
  }

  /* IMPORTS */

  ${headingStyles}
  ${fontStyles}
  ${buttonStyles}
`

export default globalStyles
