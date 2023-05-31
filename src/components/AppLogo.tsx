import Link from 'next/link'
import { Text } from '@chakra-ui/react'

export const AppLogo = () => {
  return (
    <Link href='/'>
      <Text color="gray.800" fontWeight="bold">
            Easy For{' '}
         <Text as="span" color="brand.primary">
            Pocket
         </Text>
      </Text>
    </Link>
  )
}
