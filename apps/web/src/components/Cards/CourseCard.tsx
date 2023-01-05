import Image from 'next/image'
import {
  Box,
  Heading,
  Text,
  Stack,
  Avatar,
  HStack,
  Icon,
} from '@chakra-ui/react'
import { AVATAR_PLACEHOLDER } from '../../gql/utils/contants'
import { FaArrowUp } from 'react-icons/fa'

type Props = {
  title: string
  thumbnail: string
  tag: string
  description: string
  price: number
  teacher: {
    name: string
    avatarUrl?: string | undefined
  }
}

export default function CourseCard({
  title,
  thumbnail,
  tag,
  price,
  description,
  teacher,
}: Props) {
  return (
    <Box
      maxW={{ md: '384px', base: '100%' }}
      w={'full'}
      bg={'white'}
      boxShadow={'xl'}
      rounded={'md'}
      p={6}
      overflow={'hidden'}
      cursor="pointer"
      opacity={0.9}
      transition="all 0.3s"
      _hover={{ opacity: 1 }}
    >
      <Box
        h={'240px'}
        bg={'white'}
        mb={4}
        rounded={'sm'}
        pos={'relative'}
        transition="transform 0.3s"
        overflow="hidden"
        _hover={{ transform: 'scale(1.05)' }}
      >
        <Image src={thumbnail} fill alt={''} style={{ objectFit: 'cover' }} />
      </Box>
      <Stack>
        <Text
          color={'brand.600'}
          fontWeight={600}
          lineHeight="143%"
          fontSize={'sm'}
          letterSpacing={1.1}
        >
          {tag}
        </Text>
        <HStack alignItems={'center'} justifyContent="space-between">
          <Heading color={'gray.900'} fontSize={'2xl'} noOfLines={1}>
            {title}
          </Heading>
          <Icon as={FaArrowUp} transform="rotate(45deg)" color="gray.900" />
        </HStack>
        <Text color={'gray.500'} noOfLines={3} minH="16" pt="3">
          {description}
        </Text>
      </Stack>
      <Stack mt={6} direction={'row'} align={'center'} justify="space-between">
        <Stack direction={'row'} spacing={2} align={'center'}>
          <Avatar src={teacher.avatarUrl ?? AVATAR_PLACEHOLDER} size="sm" />
          <Text fontWeight={600} fontSize={'sm'}>
            {teacher.name}
          </Text>
        </Stack>

        <Text fontWeight={700} fontSize={'2xl'} color="brand.600">
          {price > 0
            ? new Intl.NumberFormat('en-US', {
                currency: 'USD',
                style: 'currency',
                minimumSignificantDigits: 2,
              }).format(price)
            : 'Free'}
        </Text>
      </Stack>
    </Box>
  )
}
