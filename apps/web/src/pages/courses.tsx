import { Center, Flex, Grid, Heading } from '@chakra-ui/react'
import CourseCard from '@components/Cards/CourseCard'
import Link from 'next/link'
import { useGetAllCoursesQuery } from '../gql/generated'

export default function CoursesPage() {
  const { data } = useGetAllCoursesQuery()

  return (
    <Flex
      direction={'column'}
      mt="60px"
      maxW={1200}
      mx="auto"
      py="6"
      px="6"
      gap="6"
    >
      <Center>
        <Heading>Choose your course</Heading>
      </Center>
      <Grid
        templateColumns={{
          sm: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        gap="4"
      >
        {data?.courses?.map((course) => (
          <Link href={`/course/slug-course`} prefetch={false} key={course.id}>
            <CourseCard />
          </Link>
        ))}
      </Grid>
    </Flex>
  )
}
