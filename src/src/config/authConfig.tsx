export const authFormFields = {
  signUp: {
    email: {
      label: 'Email Address',
      placeholder: 'Enter your email',
      isRequired: true,
      order: 1,
    },
    password: {
      label: 'Password',
      placeholder: 'Enter your password',
      isRequired: true,
      order: 2,
    },
    confirm_password: {
      label: 'Confirm Password',
      placeholder: 'Confirm your password',
      isRequired: true,
      order: 3,
    },
  },
  signIn: {
    username: {
      label: 'Email Address',
      placeholder: 'Enter your email',
      isRequired: true,
    },
    password: {
      label: 'Password',
      placeholder: 'Enter your password',
      isRequired: true,
    },
  },
  resetPassword: {
    username: {
      label: 'Email Address',
      placeholder: 'Enter your email',
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      label: 'Confirmation Code',
      placeholder: 'Enter your code',
      isRequired: true,
    },
    password: {
      label: 'New Password',
      placeholder: 'Enter your new password',
      isRequired: true,
    },
    confirm_password: {
      label: 'Confirm Password',
      placeholder: 'Confirm your new password',
      isRequired: true,
    },
  },
}

export const authComponents = {
  Header() {
    return (
      <div style={{ textAlign: 'center', padding: '2rem 0' }}>
        <h2 style={{ color: '#646cff', margin: 0 }}>Welcome</h2>
        <p style={{ color: '#888', marginTop: '0.5rem' }}>
          Sign in to your account or create a new one
        </p>
      </div>
    )
  },
  Footer() {
    return (
      <div style={{ textAlign: 'center', padding: '1rem 0', color: '#888', fontSize: '0.9rem' }}>
        <p>Secure authentication powered by AWS Cognito</p>
      </div>
    )
  },
}
