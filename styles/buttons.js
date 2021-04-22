import { css } from '@emotion/react'

export const buttonStyles = css`
  button,
  a.btn {
    border: none;
    padding: 1.5rem 2.5rem;
    font-size: var(--font-size);
    line-height: 1;

    &.primary {
      background-color: var(--color-primary);
      text-transform: uppercase;
      font-weight: 700;
      color: var(--color-white);
      transition: color var(--transition);

      &.rounded {
        border-radius: 100rem;
      }

      &.green {
        background-color: var(--color-tertiary);
      }

      &:hover {
        color: var(--color-black-2);
      }
    }

    &.secondary {
      background-color: var(--color-black-2);
      text-transform: uppercase;
      font-weight: 700;
      color: var(--color-white);
      border-radius: 100rem;
      padding: 1.5rem 3rem;
      transition: all var(--transition);

      &.active {
        background-color: var(--color-primary);
      }

      &:hover {
        background-color: var(--color-primary);
      }
    }

    &.tertiary {
      background-color: transparent;
      color: var(--color-black-2);
      padding: 1.5rem;
      transition: color var(--transition);

      span {
        background-color: var(--color-secondary);
        padding: 1.2rem;
        border-radius: 100%;
        color: var(--color-primary);
        margin-right: 1rem;
      }

      &:hover {
        color: var(--color-primary);
      }
    }
  }
`
