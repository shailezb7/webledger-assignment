import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardDiv = ({ e }) => {
  let navigate = useNavigate();

  return (
    <Box textAlign={'center'}
       color={'rgb(0,90,105)'}
      boxShadow={'0 0 5px rgb(95,191,179)'}
      bg={'rgb(95,191,179)'}
      onClick={() => {
        localStorage.setItem("id", e.id);
        navigate('/details');
      }}
      borderRadius={'10px'}
      p={'20px'}
      m={'20px'}
      alignItems={'center'}
    >
      <Image src={e.image} m={'auto'} />
      <Heading size={'lg'} color={'rgb(66,95,87)'} mt={'10px'}>
        {e.title}
      </Heading>
    </Box>
  );
}

export default CardDiv;
