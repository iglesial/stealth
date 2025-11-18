import type { Theme } from '@aws-amplify/ui-react'

export const authTheme: Theme = {
  name: 'auth-theme',
  tokens: {
    colors: {
      brand: {
        primary: {
          10: '#e8eaf6',
          20: '#c5cae9',
          40: '#9fa8da',
          60: '#7986cb',
          80: '#5c6bc0',
          90: '#3f51b5',
          100: '#3949ab',
        },
      },
      font: {
        interactive: '#646cff',
      },
    },
    components: {
      authenticator: {
        router: {
          borderWidth: '0',
          backgroundColor: '#1a1a1a',
        },
      },
      button: {
        primary: {
          backgroundColor: '#646cff',
          _hover: {
            backgroundColor: '#535bf2',
          },
          _focus: {
            backgroundColor: '#535bf2',
          },
          _active: {
            backgroundColor: '#4548b8',
          },
        },
      },
      fieldcontrol: {
        _focus: {
          borderColor: '#646cff',
        },
      },
      tabs: {
        item: {
          color: '#888',
          _hover: {
            color: '#fff',
          },
          _active: {
            color: '#646cff',
            borderColor: '#646cff',
          },
        },
      },
    },
  },
}
