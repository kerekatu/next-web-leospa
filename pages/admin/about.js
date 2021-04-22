import Layout from '@/layouts/layout'
import { getAPI } from '@/lib/api'
import CONSTANTS from '@/lib/constants'
import withAuth from '@/lib/withAuth'
import { useEffect, useState } from 'react'
import { Form, FormInput } from '@/components/common/form'
import { aboutSchema } from '@/lib/yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Modal from '@/components/common/modal'
import { useRouter } from 'next/router'
import AdminTemplate from '@/components/admin/admin-template'

export const getServerSideProps = withAuth({
  options: {
    isProtected: true,
    isAdmin: true,
  },
  callback: async () => {
    const { data } = await getAPI({
      about: 'about',
    })

    return {
      data,
    }
  },
})

const AdminAbout = ({ user, data }) => {
  const [currentVisible, setCurrentVisible] = useState({})
  const [openModal, setOpenModal] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const { register, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(aboutSchema),
  })
  const router = useRouter()

  const { about } = data.data

  useEffect(() => {
    if (about) {
      setValue('title', currentVisible.title)
      setValue('content', currentVisible.content)
    }
  }, [setValue, currentVisible, about])

  const onSubmit = () =>
    handleSubmit(async (data) => {
      const response = await fetch(`${CONSTANTS.API_URL}/about/admin`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setModalMessage(`About has been edited`)
        setOpenModal(true)

        setTimeout(() => {
          router.reload()
        }, 2000)
      }
    })

  return (
    <Layout adminNavbar metadata={{ title: 'Admin Panel' }}>
      <AdminTemplate
        title="About"
        data={about}
        currentVisible={currentVisible}
        setCurrentVisible={setCurrentVisible}
      >
        <Form onSubmit={onSubmit()}>
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
          <div className="actions">
            <button type="submit" className="primary">
              Edit
            </button>
          </div>
        </Form>
      </AdminTemplate>

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

export default AdminAbout
