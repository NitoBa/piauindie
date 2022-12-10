import Image from 'next/image'
import {
  Box,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'

export default function CourseCard() {
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
        <Image
          src={
            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
          layout={'fill'}
          alt={''}
        />
      </Box>
      <Stack>
        <Text
          color={'brand.500'}
          textTransform={'uppercase'}
          fontWeight={800}
          fontSize={'sm'}
          letterSpacing={1.1}
        >
          C++
        </Text>
        <Heading
          color={useColorModeValue('gray.700', 'white')}
          fontSize={'2xl'}
          fontFamily={'body'}
        >
          C++ for games
        </Heading>
        <Text color={'gray.500'} noOfLines={3}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </Text>
      </Stack>
      <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
        <Avatar src={'https://github.com/tolstenko.png'} size="sm" />
        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
          <Text fontWeight={600}>Alexandre Tolstenko</Text>
        </Stack>
      </Stack>
    </Box>
  )
}
