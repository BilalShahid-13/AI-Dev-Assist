import { Button, FormControl, FormHelperText, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import React, { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';

const InputField = ({ placeholder, Icon, color, w, height, value, type, onChange, name, error }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const handleInputChange = (e) => {
    if (onChange) {
      onChange(e); // Pass the event object to the parent onChange function
    }
  };

  return (
    <>
      <FormControl display={'flex'} flexDirection={'column'}
        justifyContent={'center'} alignItems={'center'} >
        <InputGroup bgColor={'#121212'} w={w} shadow={'lg'}
          h={height} rounded={'lg'}>
          <InputLeftElement h={height}>
            <Icon color={color} />
          </InputLeftElement>
          <Input
            placeholder={placeholder}
            _placeholder={{
              fontSize: 'sm',
            }}
            border={`1px solid ${error ? 'red' : color}`}
            color={color}
            value={value}
            onChange={handleInputChange} // Handle the change and update the value
            type={show && type === 'password' ? 'password' : 'text'}
            fontSize='sm'
            h={height}
            name={name} // Pass name to identify the field
          />
          {type === 'password' && (
            <InputRightElement width='4.5rem' h={height}>
              <Button h='1.75rem' size='sm'
                rounded={'3xl'} onClick={handleClick} bgColor={'gray.100'}
                _hover={{
                  bgColor: 'gray.300'
                }}>
                {show ? <IoEyeOff /> : <IoEye />}
              </Button>
            </InputRightElement>
          )}
        </InputGroup>
        {error && <FormHelperText textAlign={'left'} w={'80%'} color={'red.500'}>{error}</FormHelperText>}
      </FormControl>
    </>
  );
};

export default InputField;
