import { mq } from '@/styles/global'
import styled from '@emotion/styled'
// import { Controller } from 'react-hook-form'
// import { Editor } from 'draft-js'

export const Form = ({ children, submitText, error, ...props }) => (
  <FormWrapper {...props}>
    {children}

    {error && (
      <span role="alert" className="error">
        * {error.message}
      </span>
    )}

    {submitText && (
      <button type="submit" className="primary rounded">
        {submitText}
      </button>
    )}
  </FormWrapper>
)

export const FormInput = ({
  name,
  type = 'text',
  error,
  label,
  register,
  ...props
}) => (
  <div className="input-box">
    {label && <label htmlFor={name}>{label}</label>}
    {type === 'textarea' ? (
      <textarea
        name={name}
        id={name}
        rows="6"
        ref={register}
        className={error ? 'error' : null}
        {...props}
      />
    ) : (
      <input
        type={type}
        name={name}
        id={name}
        ref={register}
        className={error ? 'error' : null}
        {...props}
      />
    )}

    {error && (
      <span role="alert" className="error-message">
        * {error.message}
      </span>
    )}
  </div>
)

export const FormSelect = ({
  name,
  options,
  error,
  label,
  register,
  optionTitle,
  ...props
}) => {
  return (
    <div className="input-box">
      {label && <label htmlFor={name}>{label}</label>}
      <select name={name} id={name} ref={register} {...props}>
        {options &&
          options?.map((value) => (
            <option key={value._id} value={value._id}>
              {optionTitle || value?.title}
            </option>
          ))}
      </select>

      {error && (
        <span role="alert" className="error-message">
          * {error.message}
        </span>
      )}
    </div>
  )
}

// export const FormEditor = ({ name, error, label, control }) => {
//   return (
//     <div className="editor-box">
//       {label && <label htmlFor={name}>{label}</label>}
//       <Controller
//         name={name}
//         control={control}
//         render={({ value, onChange }) => (
//           <Editor editorState={value} onChange={onChange} />
//         )}
//       />

//       {error && (
//         <span role="alert" className="error-message">
//           * {error.message}
//         </span>
//       )}
//     </div>
//   )
// }

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  &.primary {
    background-color: var(--color-secondary-2);
    padding: 2rem;
    margin-bottom: 4rem;
    border: 0.1rem solid var(--color-gray-2);
  }

  .input-box {
    width: 100%;
  }

  .editor-box {
    font-size: var(--font-size-xs);

    .public-DraftEditor-content {
      height: 100%;
      min-height: 5rem;
      padding: 1.5rem 0;
      border-bottom: 0.2rem solid var(--color-gray-2) !important;

      &:focus {
        border-bottom: 0.2rem solid var(--color-primary) !important;
      }
    }
  }

  .input-span {
    display: flex;
    gap: 1rem;

    ${mq[0]} {
      flex-direction: column;
      gap: 2.5rem;
    }
  }

  input,
  textarea,
  select {
    background-color: transparent;
    border: none;
    border-bottom: 0.2rem solid var(--color-gray-2) !important;
    width: 100%;
    padding: 1.5rem 0;
    min-height: 5rem;
    color: var(--color-black-2);

    &::placeholder {
      text-transform: uppercase;
    }

    &:focus {
      border-bottom: 0.2rem solid var(--color-primary) !important;
    }
  }

  textarea {
    min-height: 10rem;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: center;
  }

  label {
    display: block;
    font-size: var(--font-size-sm);
    font-weight: 700;
    color: var(--color-black-2);
    margin-bottom: 0.5rem;
  }

  button {
    margin-top: 2rem;
    align-self: flex-start;
  }

  .error-message {
    display: block;
    color: var(--color-primary);
    font-size: var(--font-size-sm);
    margin-top: 1rem;
  }
`
