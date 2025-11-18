import { useAuthenticator, Authenticator, ThemeProvider } from '@aws-amplify/ui-react'
import { Navigate } from 'react-router-dom'
import { authTheme } from '../config/authTheme'
import { authFormFields, authComponents } from '../config/authConfig'
import './Login.css'

function Login() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus])

  // Redirect to home if already authenticated
  if (authStatus === 'authenticated') {
    return <Navigate to="/" replace />
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <ThemeProvider theme={authTheme}>
          <Authenticator
            formFields={authFormFields}
            components={authComponents}
            variation="default"
            socialProviders={[]}
            initialState="signIn"
          />
        </ThemeProvider>
      </div>
    </div>
  )
}

export default Login
