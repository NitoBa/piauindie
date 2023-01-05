import { Flex, Text } from '@chakra-ui/react'
import { CarouselCourses } from '@components/CarouselPopularCourses'
import { Hero } from '@components/Layouts/Hero'
export default function HomePage() {
  return (
    <Flex pt={32} flexDir="column">
      <Hero />

      <Flex mt="20" px={{ md: '36', base: 4 }} flexDir="column" gap={10}>
        <Flex flexDir={'column'}>
          <Text fontWeight={600} color="brand.700" mb="3">
            Explore Courses
          </Text>
          <Text
            fontWeight={600}
            color="gray.900"
            fontSize={'4xl'}
            lineHeight="122%"
            letterSpacing={'tighter'}
            mb="5"
          >
            Our Most Popular Courses
          </Text>
          <Text
            color="gray.500"
            fontSize={'lg'}
            lineHeight="122%"
            letterSpacing={'tighter'}
          >
            Let&apos;s join our famous class, the knowledge provided will
            definitely be useful for you.
          </Text>
        </Flex>
        <Flex align={'center'} justifyContent="center">
          <CarouselCourses />
        </Flex>
      </Flex>
    </Flex>
  )
}
