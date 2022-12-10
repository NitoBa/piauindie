import { Button as CkButton, ButtonProps } from '@chakra-ui/react'

type Props = {
  buttonType?: 'primary' | 'secondary'
} & ButtonProps

export function Button({ buttonType = 'primary', ...props }: Props) {
  const isPrimary = buttonType === 'primary'
  return (
    <CkButton
      cursor={'pointer'}
      bg={isPrimary ? 'brand.500' : 'transparent'}
      border="1px"
      borderColor={isPrimary ? 'transparent' : 'brand.500'}
      color={isPrimary ? 'white' : 'brand.500'}
      size={{ base: 'sm', md: 'md' }}
      _hover={{ bg: isPrimary ? 'brand.600' : 'brand.500', color: 'white' }}
      _active={{ bg: isPrimary ? 'brand.700' : 'brand.500', color: 'white' }}
      _focusVisible={{ boxShadow: 'none', outlineColor: 'brand.700' }}
      {...props}
    />
  )
}
