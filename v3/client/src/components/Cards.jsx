import { Card, Image } from '@chakra-ui/react';
import React from 'react';

const Cards = ({ img = '1.png', w = '80%', onLoad }) => {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      border={'2px solid #2c0b82'}
      display={'flex'}
      flexDirection={'column'}
      gap={'2vh'}
      w={w}
      h={w}
      boxShadow="0 4px 6px 1px rgba(187, 112, 232,0.3)"
    >
      <Image
        objectFit='cover'
        w={{ base: '100%', sm: '100%', lg: '100%' }}
        h={{ base: '100%', sm: '100%', lg: '100%' }}
        src={`hero-marquee/${img}`}
        alt='Caffe Latte'
        onLoad={onLoad} // Trigger onLoad event
      />
    </Card>
  );
};

export default Cards;
