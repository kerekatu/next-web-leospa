import { Form, FormInput } from '@/components/common/form'
import Title from '@/components/common/title'
import CONSTANTS from '@/lib/constants'
import { userSchema } from '@/lib/yup'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Layout from '@/layouts/layout'
import styled from '@emotion/styled'
import withAuth from '@/lib/withAuth'
import { mq } from '@/styles/global'

export const getServerSideProps = withAuth({})

const Login = ({ user }) => {
  const router = useRouter()
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(userSchema),
  })

  useEffect(() => {
    if (user._id) {
      router.replace('/admin')
    }
  }, [user, router])

  const handleLoginForm = handleSubmit(async (data) => {
    try {
      const res = await fetch(`${CONSTANTS.API_URL}/login/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        router.push('/admin')
      }
    } catch (error) {
      console.log(error)
    }
  })

  return (
    <Layout metadata={{ title: 'Login' }}>
      <LoginWrapper className="wrapper">
        <Title title="Login - Admin Panel" />
        <Form submitText="Login" onSubmit={handleLoginForm}>
          <FormInput
            type="email"
            placeholder="Email Address"
            name="email"
            register={register}
            error={errors?.email}
          />
          <FormInput
            type="password"
            placeholder="Password"
            name="password"
            register={register}
            error={errors?.password}
          />
        </Form>
      </LoginWrapper>
    </Layout>
  )
}

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;

  form {
    width: 50%;

    ${mq[2]} {
      width: 100%;
    }
  }
`

export default Login
