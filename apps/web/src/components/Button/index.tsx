import {
  Button as CkButton,
  ComponentStyleConfig,
  ButtonProps,
} from '@chakra-ui/react'

export const BaseButton: ComponentStyleConfig = {
  baseStyle: {
    cursor: 'pointer',
    fontWeight: 'semibold',

    gap: '2',
    borderRadius: '8px',
    lineHeight: '20px',
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

  sizes: {
    sm: {
      px: '3',
      py: '2',
      gap: '1',
      fontSize: 'xs',
    },

    md: {
      px: '4',
      py: '3',
      fontSize: 'sm',
    },
  },

  variants: {
    primary: {
      fontSize: 'sm',
      border: '1px',
      bg: 'brand.600',
      borderColor: 'transparent',
      color: 'white',
      _hover: {
        bg: 'brand.700',
      },
      _active: {
        bg: 'brand.700',
      },
    },
    secondary: {
      fontSize: 'sm',
      border: '1px',
      bg: 'transparent',
      borderColor: 'brand.600',
      color: 'brand.600',
      _hover: {
        bg: 'brand.700',
      },
      _active: {
        bg: 'brand.700',
      },
    },
    tertiary: {
      border: '1px',
      bg: 'transparent',
      borderColor: 'transparent',
      fontSize: 'md',
      _hover: {
        color: 'brand.700',
      },
      _active: {
        borderColor: 'brand.700',
      },
    },
  },

  defaultProps: {
    variant: 'primary',
    size: 'md',
  },
}

export function Button({ ...props }: ButtonProps) {
  return (
    <CkButton
      alignItems="center"
      justifyContent="center"
      size={{ base: 'sm', md: 'md' }}
      {...props}
    />
  )
}
