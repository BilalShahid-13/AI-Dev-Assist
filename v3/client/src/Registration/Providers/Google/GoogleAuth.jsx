import { Button, Text } from '@chakra-ui/react'
import { useGoogleLogin } from '@react-oauth/google'
import React from 'react'
import { FaGoogle } from 'react-icons/fa'

const GoogleAuth = () => {

  const signedIn = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log('Success:', tokenResponse),
    onError: (error) => console.error('Error:', error),
  });

  return (
    <>
      <Button bgColor={'red.400'} display={'flex'}
      w={'80%'}
        flexDirection={'row'} gap={3} px={'6vw'} py={'2vh'}
        _hover={{
          backgroundColor: 'red.500'
        }}
        justifyContent={'center'} alignItems={'center'}>
        <FaGoogle />
        <Text onClick={() => signedIn()}>Google</Text>
      </Button>
    </>
  )
}

export default GoogleAuth
