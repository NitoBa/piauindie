import { ComponentProps, ReactNode } from 'react'
import NextLink from 'next/link'
import { Link as CkLink, LinkProps } from '@chakra-ui/react'

type Props = {
  nextLinkProps: ComponentProps<typeof NextLink>
  linkProps?: LinkProps
  children: ReactNode
}

export function Link({ children, nextLinkProps, linkProps }: Props) {
  return (
    <NextLink {...nextLinkProps}>
      <CkLink {...linkProps}>{children}</CkLink>
    </NextLink>
  )
}
