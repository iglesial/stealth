import { useAuthenticator, Authenticator, ThemeProvider } from '@aws-amplify/ui-react'
import { Navigate } from 'react-router-dom'
import { authTheme } from '../config/authTheme'
import { authFormFields, authComponents } from '../config/authConfig'
import './Signup.css'

function Signup() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus])

  // Redirect to home if already authenticated
  if (authStatus === 'authenticated') {
    return <Navigate to="/" replace />
  }

  return (
    <div className="signup-page">
      <div className="signup-container">
        <ThemeProvider theme={authTheme}>
          <Authenticator
            formFields={authFormFields}
            components={authComponents}
            variation="default"
            socialProviders={[]}
            initialState="signUp"
          />
        </ThemeProvider>
      </div>
    </div>
  )
}

export default Signup
