import React, { useContext } from 'react';
// import homepage from "../Images/homepage.jpg";
import homepage from '../Images/homepage.jpg';
// import { Box, Image } from '@chakra-ui/react';
import Navbar from './Navbar';
import { Box, Image } from '@chakra-ui/react';


const Home = () => {

 

  return (
    <Box
      m={0}
      p={0}
      height="100vh"
      overflow="hidden" 
      w={"100%"}
      pos={"relative"}
    >
    <Navbar />
      <Image
        m={0}
        p={0}
        src={homepage}
        objectFit="cover" 
        height="100%" 
        width="100%" 
      />
    </Box>
  );
}

export default Home;
