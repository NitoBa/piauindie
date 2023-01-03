import { Flex } from '@chakra-ui/react'
import { Hero } from '@components/Layouts/Hero'
export default function HomePage() {
  return (
    <Flex minH="container.md" mt={{ base: 20, md: 0 }}>
      <Hero />
    </Flex>
  )
}
