import Image from 'next/image'
import {
  Box,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'
import { AVATAR_PLACEHOLDER } from '../../gql/utils/contants'

type Props = {
  title: string
  thumbnail: string
  tag: string
  description: string
  teacher: {
    name: string
    avatarUrl?: string | undefined
  }
}

export default function CourseCard({
  title,
  thumbnail,
  tag,
  description,
  teacher,
}: Props) {
  return (
    <Box
      maxW={'445px'}
      w={'full'}
      bg={'white'}
      boxShadow={'2xl'}
      rounded={'md'}
      p={4}
      overflow={'hidden'}
      cursor="pointer"
      opacity={0.9}
      transition="all 0.3s"
      _hover={{ opacity: 1 }}
    >
      <Box
        h={'210px'}
        bg={'gray.100'}
        mt={-6}
        mx={-6}
        mb={4}
        pos={'relative'}
        transition="all 0.3s"
        overflow="hidden"
        _hover={{ transform: 'scale(1.05)' }}
      >
        <Image src={thumbnail} fill alt={''} />
      </Box>
      <Stack>
        <Text
          color={'brand.500'}
          textTransform={'uppercase'}
          fontWeight={800}
          fontSize={'sm'}
          letterSpacing={1.1}
        >
          {tag}
        </Text>
        <Heading
          color={useColorModeValue('gray.700', 'white')}
          fontSize={'2xl'}
          fontFamily={'body'}
        >
          {title}
        </Heading>
        <Text color={'gray.500'} noOfLines={3} minH="16">
          {description}
        </Text>
      </Stack>
      <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
        <Avatar src={teacher.avatarUrl ?? AVATAR_PLACEHOLDER} size="sm" />
        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
          <Text fontWeight={600}>{teacher.name}</Text>
        </Stack>
      </Stack>
    </Box>
  )
}
