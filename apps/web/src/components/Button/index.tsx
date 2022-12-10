import {
  Button as CkButton,
  ComponentStyleConfig,
  ButtonProps,
} from '@chakra-ui/react'

export const BaseButton: ComponentStyleConfig = {
  baseStyle: {
    cursor: 'pointer',
    fontWeight: 'medium',
    _focusVisible: {
      boxShadow: 'none',
      outlineColor: 'brand.700',
    },
    _hover: {
      color: 'white',
    },
    _active: {
      color: 'white',
    },
  },

  variants: {
    primary: {
      border: '1px',
      bg: 'brand.500',
      borderColor: 'transparent',
      color: 'white',
      _hover: {
        bg: 'brand.600',
      },
      _active: {
        bg: 'brand.700',
      },
    },
    secondary: {
      border: '1px',
      bg: 'transparent',
      borderColor: 'brand.500',
      color: 'brand.500',
      _hover: {
        bg: 'brand.500',
      },
      _active: {
        bg: 'brand.700',
      },
    },
  },

  defaultProps: {
    variant: 'primary',
  },
}

export function Button({ ...props }: ButtonProps) {
  return <CkButton size={{ base: 'sm', md: 'md' }} {...props} />
}
