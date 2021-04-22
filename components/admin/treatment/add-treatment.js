import { Form, FormInput } from '@/components/common/form'
import CONSTANTS from '@/lib/constants'
import { treatmentSchema } from '@/lib/yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

const AddTreatment = ({ handleModal }) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(treatmentSchema),
  })

  const onSubmit = () =>
    handleSubmit(async (data) => {
      const formData = new FormData()
      Object.keys(data).forEach((key) =>
        formData.append(key, key === 'image' ? data[key][0] : data[key])
      )

      const response = await fetch(`${CONSTANTS.API_URL}/treatment/admin`, {
        method: 'POST',
        credentials: 'include',
        body: formData,
      })

      if (response.ok) {
        handleModal(`${data.title} has been added`)
      }
    })

  return (
    <Form className="primary" onSubmit={onSubmit()}>
      <FormInput
        type="text"
        name="title"
        placeholder="Title"
        label="Title"
        register={register}
        error={errors?.title}
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
        type="file"
        name="image"
        label="Image"
        placeholder="Image"
        register={register}
        error={errors?.image}
      />
      <div className="actions">
        <button type="submit" className="primary">
          Add
        </button>
      </div>
    </Form>
  )
}

export default AddTreatment
