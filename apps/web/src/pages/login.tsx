import { Fade, Flex, useColorModeValue } from '@chakra-ui/react'
import { SignInLayout } from '@components/Layouts/SignIn'
import { SignUpLayout } from '@components/Layouts/SignUp'
import { useRouter } from 'next/router'

export default function Login() {
  const {
    query: { type },
  } = useRouter()

  return (
    <Flex
      css={{ height: 'calc(100vh - 230px)' }}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('brand.50', 'gray.800')}
    >
      {type === 'signIn' && (
        <Fade in={type === 'signIn'} transition={{ enter: { duration: 0.5 } }}>
          <SignInLayout />
        </Fade>
      )}
      {type === 'signUp' && (
        <Fade in={type === 'signUp'} transition={{ enter: { duration: 0.5 } }}>
          <SignUpLayout />
        </Fade>
      )}
    </Flex>
  )
}
