import Layout from '@/layouts/layout'
import { getAPI } from '@/lib/api'
import CONSTANTS from '@/lib/constants'
import withAuth from '@/lib/withAuth'
import { useEffect, useState } from 'react'
import { Form, FormInput } from '@/components/common/form'
import { heroSchema } from '@/lib/yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Modal from '@/components/common/modal'
import { useRouter } from 'next/router'
import AdminTemplate from '@/components/admin/admin-template'
import styled from '@emotion/styled'
import AddHero from '@/components/admin/hero/add-hero'
import ChangeHero from '@/components/admin/hero/change-hero'

export const getServerSideProps = withAuth({
  options: {
    isProtected: true,
    isAdmin: true,
  },
  callback: async () => {
    const { data } = await getAPI({
      hero: 'hero',
    })

    return {
      data,
    }
  },
})

const AdminHero = ({ user, data }) => {
  const [currentVisible, setCurrentVisible] = useState({})
  const [action, setAction] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const { register, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(heroSchema),
  })

  const router = useRouter()

  const { hero } = data.data

  useEffect(() => {
    if (hero) {
      setValue('title1', currentVisible.title1)
      setValue('title2', currentVisible.title2)
      setValue('content', currentVisible.content)
      setValue('link', currentVisible.link)
    }
  }, [setValue, currentVisible, hero])

  const handleModal = (message) => {
    setModalMessage(message)
    setOpenModal(true)

    setTimeout(() => {
      router.reload()
    }, 2000)
  }

  const onSubmit = (action) =>
    handleSubmit(async (data) => {
      if (action === 'PUT') {
        const response = await fetch(
          `${CONSTANTS.API_URL}/hero/admin/${currentVisible._id}`,
          {
            method: 'PUT',
            credentials: 'include',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
          }
        )

        if (response.ok) {
          handleModal(`${data.title1} has been edited`)
        }
      } else if (action === 'DELETE') {
        const response = await fetch(
          `${CONSTANTS.API_URL}/hero/admin/${currentVisible._id}`,
          {
            method: 'DELETE',
            credentials: 'include',
          }
        )

        if (response.ok) {
          handleModal(`${data.title1} has been deleted`)
        }
      }
    })

  return (
    <Layout adminNavbar metadata={{ title: 'Admin Panel' }}>
      <AdminTemplate
        title="Hero"
        data={hero}
        currentVisible={currentVisible}
        setCurrentVisible={setCurrentVisible}
      >
        <Form onSubmit={onSubmit(action)}>
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

      <AdminHeroWrapper className="wrapper">
        <h3>Add Hero</h3>
        <AddHero handleModal={handleModal} />
        <h3>Choose Hero to Show</h3>
        <ChangeHero hero={hero} handleModal={handleModal} />
      </AdminHeroWrapper>

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

const AdminHeroWrapper = styled.div`
  h3 {
    margin: 2rem 0;
  }
`

export default AdminHero
