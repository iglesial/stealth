import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Amplify } from 'aws-amplify'
import './index.css'
import App from './App.tsx'

// Configure Amplify
// Note: This will use amplify_outputs.json when backend is deployed
// For now, we'll check if the config exists
async function configureAmplify() {
  try {
    const outputs = await import('../amplify_outputs.json')
    Amplify.configure(outputs.default)
  } catch {
    // amplify_outputs.json doesn't exist yet - will be generated after backend deployment
    console.log('Amplify backend not deployed yet. Run "npx ampx sandbox" to deploy.')
  }
}

configureAmplify()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
