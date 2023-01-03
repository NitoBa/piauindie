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

    gray: {
      50: '#F9FAFB',
      100: '#F2F4F7',
      200: '#EAECF0',
      300: '#D0D5DD',
      400: '#98A2B3',
      500: '#667085',
      600: '#475467',
      700: '#344054',
      800: '#1D2939',
      900: '#101828',
    },
  },
})
