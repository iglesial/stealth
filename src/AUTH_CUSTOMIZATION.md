# Authentication Customization Guide

This guide explains how to customize the login and signup pages in your application.

## Configuration Files

### 1. Theme Configuration (`src/config/authTheme.ts`)

Customize colors, fonts, and component styles:

```typescript
export const authTheme: Theme = {
  tokens: {
    colors: {
      brand: {
        primary: {
          // Customize brand colors (10-100)
          90: '#3f51b5',  // Primary brand color
        },
      },
    },
    components: {
      button: {
        primary: {
          backgroundColor: '#646cff',  // Button background
          _hover: {
            backgroundColor: '#535bf2',  // Button hover state
          },
        },
      },
    },
  },
}
```

**What you can customize:**
- Brand colors (primary, secondary, etc.)
- Font colors and styles
- Button styles (background, hover, active states)
- Input field styles
- Border colors and widths
- Spacing and padding

### 2. Form Fields Configuration (`src/config/authConfig.tsx`)

Customize form fields for each authentication step:

```typescript
export const authFormFields = {
  signUp: {
    email: {
      label: 'Email Address',           // Field label
      placeholder: 'Enter your email',  // Placeholder text
      isRequired: true,                 // Required field
      order: 1,                         // Field order
    },
    // Add custom fields like:
    // name, phone_number, birthdate, etc.
  },
  signIn: {
    username: {
      label: 'Email Address',
      placeholder: 'Enter your email',
    },
  },
}
```

**Available form field options:**
- `label`: Display label for the field
- `placeholder`: Placeholder text
- `isRequired`: Whether field is required
- `order`: Display order of fields
- `type`: Input type (text, email, password, tel, etc.)

### 3. Custom Components (`src/config/authConfig.tsx`)

Add custom header and footer components:

```typescript
export const authComponents = {
  Header() {
    return (
      <div>
        <h2>Your Custom Header</h2>
        <p>Welcome message or logo here</p>
      </div>
    )
  },
  Footer() {
    return (
      <div>
        <p>Custom footer with links or info</p>
      </div>
    )
  },
}
```

**Available custom components:**
- `Header`: Shown at the top of the authenticator
- `Footer`: Shown at the bottom
- `SignIn.Header`: Custom header for sign-in page only
- `SignUp.Header`: Custom header for sign-up page only

## Common Customizations

### Change Primary Color

Edit `src/config/authTheme.ts`:
```typescript
colors: {
  brand: {
    primary: {
      90: '#YOUR_COLOR',  // Change this
    },
  },
}
```

### Add Custom Fields to Sign Up

Edit `src/config/authConfig.tsx`:
```typescript
signUp: {
  email: { /* ... */ },
  password: { /* ... */ },
  name: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
    isRequired: true,
    order: 1,
  },
  phone_number: {
    label: 'Phone Number',
    placeholder: '+1234567890',
    isRequired: false,
    order: 4,
  },
}
```

### Customize Button Text

Use the `Authenticator` prop in `src/pages/Home.tsx`:
```typescript
<Authenticator
  formFields={authFormFields}
  components={authComponents}
  loginMechanisms={['email']}
  signUpAttributes={['email']}
/>
```

## Advanced Customization

For more advanced customization, refer to the AWS Amplify UI documentation:
- [Theming Guide](https://ui.docs.amplify.aws/react/connected-components/authenticator/customization#theming)
- [Custom Components](https://ui.docs.amplify.aws/react/connected-components/authenticator/customization#header--footer)
- [Form Fields](https://ui.docs.amplify.aws/react/connected-components/authenticator/customization#sign-up-fields)
