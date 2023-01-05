import { Splide, SplideSlide } from '@splidejs/react-splide'

import CourseCard from '@components/Cards/CourseCard'
import { useRef, useState } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { useGetHighlightCoursesQuery } from '../../gql/generated'

export function CarouselCourses() {
  const { data, isLoading } = useGetHighlightCoursesQuery()
  const carouselRef = useRef<Splide>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  if (isLoading) {
    return (
      <Flex>
        <Box>Loading...</Box>
      </Flex>
    )
  }

  return (
    <Flex
      flexDir="column"
      maxW="1250px"
      w="full"
      align="center"
      justify="center"
    >
      <Splide
        ref={carouselRef}
        options={{
          width: '100%',
          type: 'loop',
          gap: '1rem',
          perPage: 3,
          perMove: 1,
          pagination: false,
          mediaQuery: 'max',
          breakpoints: {
            600: {
              perPage: 1,
              gap: 0,
              arrows: false,
            },
          },
        }}
        onMove={(slide) => setCurrentSlide(slide.index)}
      >
        {data?.courses?.map((course, index) => {
          return (
            <SplideSlide key={course.id}>
              <CourseCard
                title={course.title!}
                thumbnail={course.thumbnailUrl!}
                tag={'Programming'}
                description={course.description!}
                price={course.price!}
                teacher={{
                  name: course.teacher?.name!,
                  avatarUrl: course.teacher?.avatarUrl!,
                }}
              />
            </SplideSlide>
          )
        })}
      </Splide>
      <Flex gap="4" align="center" w="full" justify="center" py="6">
        {data?.courses?.map((c, index) => (
          <Box
            key={index}
            w={index === currentSlide ? '12' : '3'}
            h="3"
            bg={index === currentSlide ? 'brand.600' : 'gray.300'}
            rounded="full"
            transition={'all .2s'}
          />
        ))}
      </Flex>
    </Flex>
  )
}
