import { css } from '@emotion/react'

export const headingStyles = css`
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: var(--font-secondary);
    line-height: var(--line-heading);
  }

  h1 {
    font-size: var(--font-size-xl);
    font-weight: 700;
  }

  h2 {
    font-size: var(--font-size-lg);
    font-weight: 700;
  }

  h3 {
    font-size: var(--font-size-md);
    font-weight: 400;
  }

  h4 {
    font-size: var(--font-size);
    color: var(--color-primary);
    text-transform: uppercase;
    font-weight: 400;
  }

  h4.secondary {
    color: var(--color-black-3);
    font-size: 2rem;
    font-family: var(--font-primary);
  }

  h5 {
    color: var(--color-black-2);
    font-size: var(--font-size);
    font-weight: 700;
  }
`
