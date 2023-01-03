import { Text, Flex, Image } from '@chakra-ui/react'
import { Button } from '@components/Button'

export function Hero() {
  return (
    <Flex
      w="full"
      alignItems="center"
      px={{ md: '36', base: 4 }}
      gap="5"
      flexDir={{ md: 'row', base: 'column-reverse' }}
    >
      <Flex flexDir={'column'} flex="1">
        <Text
          as={'h1'}
          fontSize={{ md: '7xl', base: '4xl' }}
          fontWeight={'bold'}
          color="gray.900"
          lineHeight={'128%'}
          letterSpacing="-0.5px"
        >
          Up your{' '}
          <Text as={'span'} color="brand.600">
            Skills
          </Text>{' '}
          <br />
          to{' '}
          <Text as={'span'} color="brand.600">
            Advance
          </Text>{' '}
          your <br />
          <Text as={'span'} color="brand.600">
            Career
          </Text>{' '}
          path
        </Text>

        <Text color="gray.500" lineHeight={'180%'} mt="5" maxW="450px">
          Provides you with the latest online learning system and material that
          help your knowledge growing.
        </Text>

        <Button w={{ md: '261px' }} mt="8" minH={'50px'}>
          Get Stated
        </Button>
      </Flex>

      <Flex flex={'1'}>
        <Image src="./ilustration.png" alt="Illustration" fit="contain" />
      </Flex>
    </Flex>
  )
}
