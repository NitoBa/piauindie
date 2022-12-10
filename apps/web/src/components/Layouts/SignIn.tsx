import {
  Stack,
  Heading,
  useColorModeValue,
  Box,
  Text,
  HStack,
  Divider,
} from '@chakra-ui/react'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { Link } from '@components/Link'
import { OAuthButtons } from '@components/OAuthButtons'

export function SignInLayout() {
  return (
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={4}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'} textAlign="center">
          Sign in to your account
        </Heading>
        <Text fontSize={'lg'} color={'gray.600'}>
          to enjoy all of our cool ✌️
        </Text>
      </Stack>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={6}
      >
        <Stack spacing={4}>
          <Input type="email" label="Email address" />
          <Input type="password" label="Password" />
          <Stack spacing={10}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}
            >
              <Link
                nextLinkProps={{ href: '/' }}
                linkProps={{ color: 'brand.400' }}
              >
                Forgot Password?
              </Link>
            </Stack>
            <Button>Sign in</Button>
            <Stack>
              <Text align={'center'}>
                Don&apos;t have an account?{' '}
                <Link
                  nextLinkProps={{ href: '/login?type=signUp' }}
                  linkProps={{ color: 'brand.400' }}
                >
                  Sing Up
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Stack>

        <Stack spacing="6" mt={4}>
          <HStack>
            <Divider />
            <Text fontSize="sm" whiteSpace="nowrap" color="muted">
              or continue with
            </Text>
            <Divider />
          </HStack>
          <OAuthButtons />
        </Stack>
      </Box>
    </Stack>
  )
}
