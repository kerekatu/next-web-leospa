import CONSTANTS from '@/lib/constants'

const withAuth = ({ options, callback }) => {
  return async (context) => {
    let data = null
    const defaultOptions = options || { isProtected: false, isAdmin: false }
    const { req, res } = context

    if (callback) {
      const response = await callback(context)
      data = await JSON.parse(JSON.stringify(response))
    }

    // checks if there is a valid cookie and fetches user id
    const statusResponse = await fetch(`${CONSTANTS.API_URL}/login/loggedin`, {
      headers: req ? { cookie: req.headers.cookie } : undefined,
    })
    const isLoggedIn = await statusResponse.json()

    if (isLoggedIn?.user) {
      const userResponse = await fetch(
        `${CONSTANTS.API_URL}/user/admin/${isLoggedIn.user}`,
        {
          headers: req ? { cookie: req.headers.cookie } : undefined,
        }
      )

      const user = await userResponse.json()
      delete user.password

      if (defaultOptions.isProtected && defaultOptions.isAdmin) {
        if (!user.admin)
          return { redirect: { permanent: false, destination: '/' } }
      }

      return {
        props: {
          user,
          data,
        },
      }
    } else if (!isLoggedIn?.user && defaultOptions.isProtected) {
      return { redirect: { permanent: false, destination: '/' } }
    } else {
      return { props: { user: false, data } }
    }
  }
}

export default withAuth
