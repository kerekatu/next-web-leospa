import { Form, FormInput } from '@/components/common/form'
import CONSTANTS from '@/lib/constants'
import { heroSchema } from '@/lib/yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

const AddHero = ({ handleModal }) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(heroSchema),
  })

  const onSubmit = () =>
    handleSubmit(async (data) => {
      const response = await fetch(`${CONSTANTS.API_URL}/hero/admin`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        handleModal(`${data.title1} has been added`)
      }
    })

  return (
    <Form className="primary" onSubmit={onSubmit()}>
      <FormInput
        type="text"
        name="title1"
        placeholder="Title 1"
        label="Title 1"
        register={register}
        error={errors?.title1}
      />
      <FormInput
        type="text"
        name="title2"
        placeholder="Title 2"
        label="Title 2"
        register={register}
        error={errors?.title2}
      />
      <FormInput
        type="textarea"
        placeholder="Content"
        name="content"
        label="Content"
        register={register}
        error={errors?.content}
      />
      <FormInput
        type="text"
        name="link"
        placeholder="Link"
        label="Link"
        register={register}
        error={errors?.link}
      />
      <div className="actions">
        <button type="submit" className="primary">
          Add
        </button>
      </div>
    </Form>
  )
}

export default AddHero
