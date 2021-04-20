import styled from '@emotion/styled'
import React from 'react'

const Contact = () => {
  return (
    <ContactWrapper id="#contact">
      <img src="/static/images/appointment-img.jpg" alt="Appointment" />
      <form>
        <div className="input-span">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email Address" />
        </div>
        <div className="input-span">
          <input type="text" placeholder="Select Service" />
          <input type="email" placeholder="Phone Number" />
        </div>
        <div className="input-span">
          <input type="text" placeholder="dd-mm-åååå" />
          <input type="email" placeholder="-:-" />
        </div>
        <textarea rows="1" placeholder="Your Notes" />
        <button className="secondary active" type="submit">
          Make an appointment
        </button>
      </form>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.section`
  background-color: var(--color-secondary-2);
  min-height: 50rem;

  display: grid;
  grid-template-columns: 2fr 4fr;
  align-items: center;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin: 4rem 6rem;
    width: 60%;

    .input-span {
      display: flex;
      gap: 1rem;
    }

    input,
    textarea {
      background-color: transparent;
      border: none;
      border-bottom: 0.2rem solid var(--color-gray-2) !important;
      width: 100%;
      padding: 1.5rem 0;

      &::placeholder {
        text-transform: uppercase;
      }
    }

    button {
      align-self: flex-start;
    }
  }
`

export default Contact
