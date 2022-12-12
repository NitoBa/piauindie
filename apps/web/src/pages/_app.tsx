import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from '@lib/react-query'
import { DefaultLayout } from '@components/Layouts/Default'

import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp
