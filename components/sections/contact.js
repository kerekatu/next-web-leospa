import CONSTANTS from '@/lib/constants'
import { appointmentSchema } from '@/lib/yup'
import styled from '@emotion/styled'
import { yupResolver } from '@hookform/resolvers/yup'
import { format } from 'date-fns'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormInput, FormSelect } from '@/components/common/form'
import Modal from '@/components/common/modal'
import { mq } from '@/styles/global'

const Contact = ({ data: treatment }) => {
  const [openModal, setOpenModal] = useState(false)
  const [appointmentDate, setAppointmentDate] = useState('')
  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: appointmentSchema.cast(),
    resolver: yupResolver(appointmentSchema),
  })

  const handleContactForm = handleSubmit(async (data) => {
    try {
      const res = await fetch(`${CONSTANTS.API_URL}/appointment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          date: format(new Date(data.date), 'yyyy-MM-dd'),
        }),
      })

      if (res.ok) {
        setAppointmentDate(
          `${format(new Date(data.date), 'yyyy-MM-dd')} ${data.time}`
        )
        setOpenModal(true)
        reset()
      }
    } catch (error) {
      console.log(error)
    }
  })

  return (
    <ContactWrapper id="contact">
      <img src="/static/images/appointment-img.jpg" alt="Appointment" />
      <Form submitText="Make an appointment" onSubmit={handleContactForm}>
        <div className="input-span">
          <FormInput
            type="text"
            placeholder="Name"
            name="name"
            register={register}
            error={errors?.name}
          />
          <FormInput
            type="email"
            placeholder="Email Address"
            name="email"
            register={register}
            error={errors?.email}
          />
        </div>
        <div className="input-span">
          <FormSelect
            placeholder="Select Service"
            name="treatment"
            options={treatment}
            register={register}
            error={errors?.treatment}
          />
          <FormInput
            type="tel"
            placeholder="Phone Number"
            name="phone"
            register={register}
            error={errors?.phone}
          />
        </div>
        <div className="input-span">
          <FormInput
            type="date"
            placeholder="dd-mm-åååå"
            name="date"
            register={register}
            error={errors?.date}
          />
          <FormInput
            type="time"
            name="time"
            register={register}
            error={errors?.time}
          />
        </div>
        <FormInput
          type="textarea"
          placeholder="Your Notes"
          name="notes"
          register={register}
          error={errors?.notes}
        />
      </Form>

      {openModal && (
        <Modal
          handleOpen={setOpenModal}
          title="Thank you for making an appointment"
          render={() => (
            <>
              <p>Date: {appointmentDate}</p>
            </>
          )}
        />
      )}
    </ContactWrapper>
  )
}

const ContactWrapper = styled.section`
  background-color: var(--color-secondary-2);
  min-height: 50rem;

  display: grid;
  grid-template-columns: 2fr 4fr;
  align-items: center;

  ${mq[2]} {
    grid-template-columns: 1fr;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;

    ${mq[2]} {
      display: none;
    }
  }

  form {
    width: 70%;
    margin: 4rem 6rem;

    ${mq[2]} {
      width: 100%;
      margin: 0;
      padding: 4rem 6rem;
    }
  }
`

export default Contact
