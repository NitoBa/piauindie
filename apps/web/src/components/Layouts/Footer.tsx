import { Box, Text, Stack, ButtonGroup, IconButton } from '@chakra-ui/react'
import Image from 'next/image'
import LinkNext from 'next/link'
import { FaGithub, FaInstagram, FaDiscord, FaYoutube } from 'react-icons/fa'

export function Footer() {
  return (
    <Box
      as="footer"
      py={{ base: '12', md: '16' }}
      px="6"
      borderTop="1px"
      borderColor="brand.200"
      bg="brand.50"
      width="full"
    >
      <Stack spacing={{ base: '4', md: '5' }}>
        <Stack justify="space-between" direction="row" align="center">
          <LinkNext href="/">
            <Box pos="relative" w="10" h="10">
              <Image src={'/logo.jpg'} alt="logo" fill />
            </Box>
          </LinkNext>
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="https://www.instagram.com/piauindie/"
              aria-label="Instagram"
              icon={<FaInstagram fontSize="1.25rem" />}
              _hover={{ bg: 'brand.400', color: 'white' }}
            />
            <IconButton
              as="a"
              href="https://github.com/piauindie/piauindie"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
              _hover={{ bg: 'brand.400', color: 'white' }}
            />
            <IconButton
              as="a"
              href="https://discord.com/invite/TKUsrKs5Qb"
              aria-label="Discord"
              icon={<FaDiscord fontSize="1.25rem" />}
              _hover={{ bg: 'brand.400', color: 'white' }}
            />
            <IconButton
              as="a"
              href="https://www.youtube.com/channel/UChSrwvFjBscD_b7LKnNcYMw"
              aria-label="Youtube"
              icon={<FaYoutube fontSize="1.25rem" />}
              _hover={{ bg: 'brand.400', color: 'white' }}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm" color="GrayText">
          &copy; {new Date().getFullYear()} Piauindie. All rights reserved.
        </Text>
      </Stack>
    </Box>
  )
}
