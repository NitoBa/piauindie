import { extendTheme } from '@chakra-ui/react'
import { BaseButton } from '@components/Button'

export const theme = extendTheme({
  components: {
    Button: BaseButton,
  },
  sizes: { 'h-screen': '100vh', 'w-screen': '100vw' },
  fonts: {
    body: `'Inter', sans-serif`,
  },
  colors: {
    brand: {
      50: '#F9F5FF',
      100: '#F4EBFF',
      200: '#E9D7FE',
      300: '#D6BBFB',
      400: '#B692F6',
      500: '#9E77ED',
      600: '#7F56D9',
      700: '#6941C6',
      800: '#53389E',
      900: '#42307D',
    },
  },
})
