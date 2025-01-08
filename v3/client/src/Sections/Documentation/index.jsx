import { Flex } from '@chakra-ui/react'
import Sidebar from './components/Sidebar'
import TabsComponent from './components/TabsComponent'

export const index = () => {
  return (
    <>
      <Flex bgColor={'#070707'} h={'100vh'}
        justifyContent={'center'} alignItems={'center'}
        flexDir={'row'} w={'100%'}
      >
        {/* sidebar */}
        <Sidebar mainContent={<TabsComponent />} />

      </Flex>
    </>
  )
}
