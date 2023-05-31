import { Box } from '@chakra-ui/react';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';


export const NavBar = () => {
  return (
    <>
    <Box className='navbar-wrapper' h="120px">
     <Box pos="fixed" w="100%" bgColor="white" mb="1rem" zIndex={10}>
        <DesktopNav />
        <MobileNav />
     </Box>
    </Box>
    </>
  )
}
