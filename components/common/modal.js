import styled from '@emotion/styled'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import useOnClickOutside from '@/hooks/useOnClickOutside'

export const Portal = ({ children }) => {
  let modalRoot = document.getElementById('modal')

  if (!modalRoot) {
    modalRoot = document.createElement('div')
    modalRoot.setAttribute('id', 'modal')
    document.body.appendChild(modalRoot)
  }

  const modalElement = document.createElement('div')

  useEffect(() => {
    modalRoot.appendChild(modalElement)
    return () => modalRoot.removeChild(modalElement)
  })

  return createPortal(children, modalElement)
}

const Modal = ({
  children,
  render,
  closeButton = true,
  isFullscreen,
  title,
  handleOpen,
}) => {
  const modalRef = useRef(null)

  useOnClickOutside(modalRef, () => {
    handleOpen(false)
  })

  return (
    <Portal>
      <ModalWrapper>
        <div className="modal">
          <div
            className={isFullscreen ? 'inner fullscreen' : 'inner'}
            ref={modalRef}
          >
            {title && <h3>{title}</h3>}
            {(children && render(children)) || children}
            {closeButton && (
              <button className="primary" onClick={() => handleOpen(false)}>
                <i className="ti-close"></i>
                Close
              </button>
            )}
          </div>
        </div>
      </ModalWrapper>
    </Portal>
  )
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;

  .modal {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .inner {
    background-color: var(--color-white);
    border: 0.2rem solid var(--color-gray-2);
    color: var(--color-black-2);
    border-radius: 0.6rem;
    padding: 6rem;

    &.fullscreen {
      width: 80%;
      height: 100%;
      background-color: transparent;
      border: none;

      iframe {
        display: block;
        height: 80vh;
        width: 100%;
      }
    }

    h3 {
      margin-bottom: 2rem;
    }

    p {
      color: var(--color-black-3);
      font-weight: 300;
    }
  }

  button {
    margin: 4rem auto 0 auto;

    i {
      font-size: var(--font-size-sm);
      margin-right: 1rem;
    }
  }
`

export default Modal
