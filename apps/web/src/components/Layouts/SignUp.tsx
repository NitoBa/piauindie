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

export function SignUpLayout() {
  return (
    <Stack spacing={8} mx={'auto'} maxW={'lg'} minW="450px" py={12} px={4}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'} textAlign="center">
          Sign up
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
        <Stack spacing={3}>
          <Input type="text" label="Name" />
          <Input type="email" label="Email address" />
          <Input type="password" label="Password" />
          <Stack spacing={4} pt="4">
            <Button>Sign Up</Button>
            <Stack>
              <Text align={'center'}>
                Already a user?{' '}
                <Link
                  nextLinkProps={{ href: '/login?type=signIn' }}
                  linkProps={{ color: 'brand.400' }}
                >
                  Login
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
