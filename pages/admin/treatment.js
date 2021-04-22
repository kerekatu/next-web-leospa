import Title from '@/components/common/title'
import Layout from '@/layouts/layout'
import { getAPI } from '@/lib/api'
import CONSTANTS from '@/lib/constants'
import withAuth from '@/lib/withAuth'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { Form, FormInput } from '@/components/common/form'
import { treatmentSchema } from '@/lib/yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Modal from '@/components/common/modal'
import { useRouter } from 'next/router'
import AdminTemplate from '@/components/admin/admin-template'
import AddTreatment from '@/components/admin/treatment/add-treatment'

export const getServerSideProps = withAuth({
  options: {
    isProtected: true,
    isAdmin: true,
  },
  callback: async () => {
    const { data } = await getAPI({
      treatment: 'treatment',
    })

    return {
      data,
    }
  },
})

const AdminTreatment = ({ user, data }) => {
  const [currentVisible, setCurrentVisible] = useState({})
  const [openModal, setOpenModal] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const [action, setAction] = useState('')
  const { register, handleSubmit, errors, setValue } = useForm({
    defaultValues: treatmentSchema.cast(),
    resolver: yupResolver(treatmentSchema),
  })
  const router = useRouter()

  const { treatment } = data.data

  useEffect(() => {
    if (treatment) {
      setValue('content', currentVisible.content)
      setValue('title', currentVisible.title)
    }
  }, [setValue, currentVisible, treatment])

  const handleModal = (message) => {
    setModalMessage(message)
    setOpenModal(true)

    setTimeout(() => {
      router.reload()
    }, 2000)
  }

  const onSubmit = (action) =>
    handleSubmit(async (data) => {
      const formData = new FormData()
      Object.keys(data).forEach((key) =>
        formData.append(key, key === 'image' ? data[key][0] : data[key])
      )

      if (action === 'PUT') {
        const response = await fetch(
          `${CONSTANTS.API_URL}/treatment/admin/${currentVisible._id}`,
          {
            method: 'PUT',
            credentials: 'include',
            body: formData,
          }
        )

        if (response.ok) {
          setModalMessage(`${data.title} has been edited`)
          setOpenModal(true)

          setTimeout(() => {
            router.reload()
          }, 2000)
        }
      } else if (action === 'DELETE') {
        const response = await fetch(
          `${CONSTANTS.API_URL}/treatment/admin/${currentVisible._id}`,
          {
            method: 'DELETE',
            credentials: 'include',
          }
        )

        if (response.ok) {
          setModalMessage(`${data.title} has been deleted`)
          setOpenModal(true)

          setTimeout(() => {
            router.reload()
          }, 2000)
        }
      }
    })

  return (
    <Layout adminNavbar metadata={{ title: 'Admin Panel' }}>
      <AdminTemplate
        title="Treatment"
        data={treatment}
        currentVisible={currentVisible}
        setCurrentVisible={setCurrentVisible}
      >
        <Form onSubmit={onSubmit(action)}>
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
            <button
              type="submit"
              className="primary"
              onClick={() => setAction('PUT')}
            >
              Edit
            </button>
            <button
              type="submit"
              className="primary"
              onClick={() => setAction('DELETE')}
            >
              Delete
            </button>
          </div>
        </Form>
      </AdminTemplate>

      <AdminTreatmentWrapper className="wrapper">
        <h3>Add Treatment</h3>
        <AddTreatment handleModal={handleModal} />
      </AdminTreatmentWrapper>

      {openModal && (
        <Modal
          closeButton={false}
          handleOpen={setOpenModal}
          title={modalMessage}
        />
      )}
    </Layout>
  )
}

const AdminTreatmentWrapper = styled.div`
  h3 {
    margin: 2rem 0;
  }
`

export default AdminTreatment
