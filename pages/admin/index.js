import Title from '@/components/common/title'
import Layout from '@/layouts/layout'
import CONSTANTS from '@/lib/constants'
import withAuth from '@/lib/withAuth'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

export const getServerSideProps = withAuth({
  options: {
    isProtected: true,
    isAdmin: true,
  },
})

const Admin = ({ user, data }) => {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      const response = await fetch(`${CONSTANTS.API_URL}/login/logout`, {
        credentials: 'include',
      })

      if (response.ok) router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout adminNavbar metadata={{ title: 'Admin Panel' }}>
      <AdminWrapper className="wrapper">
        <Title title="Dashboard - Overview" />
        <div className="content">
          <h3>User Info</h3>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <button className="secondary" onClick={() => handleLogout()}>
            Log out
          </button>
        </div>
      </AdminWrapper>
    </Layout>
  )
}

const AdminWrapper = styled.div`
  margin-top: 6rem;

  .content {
    margin-top: 4rem;

    h3 {
      margin-bottom: 1rem;
    }

    p {
      color: var(--color-black-3);
      font-weight: 300;
    }

    button {
      margin-top: 2rem;
    }
  }
`

export default Admin
