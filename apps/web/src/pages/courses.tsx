import { Center, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import CourseCard from '@components/Cards/CourseCard'
import Link from 'next/link'
import { useGetAllCoursesQuery } from '../gql/generated'

export default function CoursesPage() {
  const { data, isLoading } = useGetAllCoursesQuery()

  if (!data && isLoading) {
    return (
      <Center>
        <Text>Loading...</Text>
      </Center>
    )
  }

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
            <CourseCard
              title={course.title!}
              thumbnail={course.thumbnailUrl!}
              tag={''}
              description={course.description!}
              teacher={{
                name: course.teacher?.name!,
                avatarUrl: course.teacher?.avatarUrl as string | undefined,
              }}
            />
          </Link>
        ))}
      </Grid>
    </Flex>
  )
}
