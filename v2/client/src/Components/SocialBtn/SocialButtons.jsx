import { Button, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'

const props = {
  py: { md: 6, lg: 7, base: 6 },
  px: { md: '7vw', lg: '4vw', base: '7vw' },
  icon: '/icons/google-icon-logo-svgrepo-com.svg'
}

const SocialButtons = ({ py = props.py, px = props.px, bgColor, icon = props.icon, name, borderColor }) => {
  return (
    <>
      <Button fontFamily={'Montserrat'} rounded={'full'}
        textColor={'black'}
        bgColor='white'
        border={`1px solid ${borderColor}`}
        py={py}
        px={px}
        overflow='hidden'
        sx={{
          _after: {
            content: "''",
            top: '10vh',
            width: '100%',
            height: '10vh',
            borderRadius: '50%',
            position: 'absolute',
            transition: 'all ease 0.4s',
            backgroundColor: bgColor,
            zIndex: -1,
          },
          _hover: {
            textColor: 'white',
            zIndex: 1,
            _after: {
              top: '0vh',
              borderRadius: '0',
            },
          },
        }}
        gap='4'
        transition={'all 0.3s ease'} >
        <Icon as={icon} dropShadow={'xl'} />
        <Text fontWeight={'medium'}>{name}</Text>
      </Button>
    </>
  )
}

export default SocialButtons
