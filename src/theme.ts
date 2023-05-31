import { extendTheme } from '@chakra-ui/react'

export const colors = {
    brand: {
        primary: 'hsl(337,79%,60%)',
        primaryLight: 'hsl(337,79%,70%)',
        primaryDark: 'hsl(337,79%,50%)',
    },
};

export const theme = extendTheme({ colors });

const props = {
  '--ms-white': '#fff',
  '--ms-black': '#1a1a1a',
  '--brand-primary': colors.brand.primary,
  '--brand-primary-light': colors.brand.primaryLight,
  '--brand-primary-dark': colors.brand.primaryDark,
  '--ms-gray': '#666666',
};


