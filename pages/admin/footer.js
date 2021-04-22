import Layout from '@/layouts/layout'
import { getAPI } from '@/lib/api'
import CONSTANTS from '@/lib/constants'
import withAuth from '@/lib/withAuth'
import { useEffect, useState } from 'react'
import { Form, FormInput } from '@/components/common/form'
import { footerSchema } from '@/lib/yup'
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
      footer: 'footer',
    })

    return {
      data,
    }
  },
})

const AdminFooter = ({ user, data }) => {
  const [currentVisible, setCurrentVisible] = useState({})
  const [openModal, setOpenModal] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const { register, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(footerSchema),
  })
  const router = useRouter()

  const { footer } = data.data

  useEffect(() => {
    if (footer) {
      setValue('name', currentVisible.name)
      setValue('cvr', currentVisible.cvr)
      setValue('address', currentVisible.address)
      setValue('zipncity', currentVisible.zipncity)
      setValue('phone', currentVisible.phone)
      setValue('email', currentVisible.email)
      setValue('openinghours', currentVisible.openinghours)
    }
  }, [setValue, currentVisible, footer])

  const onSubmit = () =>
    handleSubmit(async (data) => {
      const response = await fetch(`${CONSTANTS.API_URL}/footer/admin`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setModalMessage(`Footer has been edited`)
        setOpenModal(true)

        setTimeout(() => {
          router.reload()
        }, 2000)
      }
    })

  return (
    <Layout adminNavbar metadata={{ title: 'Admin Panel' }}>
      <AdminTemplate
        title="Footer"
        data={footer}
        currentVisible={currentVisible}
        setCurrentVisible={setCurrentVisible}
      >
        <Form onSubmit={onSubmit()}>
          <FormInput
            type="text"
            name="name"
            placeholder="Name"
            label="Name"
            register={register}
            error={errors?.name}
          />
          <FormInput
            type="text"
            name="cvr"
            placeholder="CVR"
            label="CVR"
            register={register}
            error={errors?.cvr}
          />
          <FormInput
            type="text"
            name="address"
            placeholder="Address"
            label="Address"
            register={register}
            error={errors?.address}
          />
          <FormInput
            type="text"
            name="zipncity"
            placeholder="Zipncity"
            label="Zipncity"
            register={register}
            error={errors?.zipncity}
          />
          <FormInput
            type="text"
            name="phone"
            placeholder="Phone"
            label="Phone"
            register={register}
            error={errors?.phone}
          />
          <FormInput
            type="email"
            name="email"
            placeholder="Email"
            label="Email"
            register={register}
            error={errors?.email}
          />
          <FormInput
            type="text"
            name="openinghours"
            placeholder="Opening hours"
            label="Opening hours"
            register={register}
            error={errors?.openinghours}
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

export default AdminFooter
