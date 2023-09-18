// import { Button, Flex,Box, Spacer, Image } from '@chakra-ui/react'
import React, { useContext } from 'react'
import logo from "../Images/logo.png";
import { useNavigate } from 'react-router-dom';
import { Button, Flex, Box, Spacer, Image } from '@chakra-ui/react';
import { AuthContext } from '../Contextapi/AuthContext';

const Navbar = () => {

  const { isAuth, setIsAuth } = useContext(AuthContext)

  let navigate = useNavigate();
  return (
    <>
      <Flex pos={"absolute"} w={"100%"} justifyContent={"space-between"} alignItems={"center"} >
        <Box p={"10px 30px"}><Image src={logo} w={"180px"} h={"70px"}></Image></Box>
        <Box p={"10px 30px"}>
          {

            isAuth ? <Button bg={"rgb(246,202,176)"} color={"rgb(38,30,28)"}
              p={"10px"} w={"110px"} fontSize={"18px"} fontWeight={"600"} onClick={() => {setIsAuth(false)}} borderRadius={"15px"}>Logout</Button> : <Button bg={"rgb(246,202,176)"} color={"rgb(38,30,28)"} p={"10px"} w={"110px"} fontSize={"18px"} fontWeight={"600"} borderRadius={"15px"}
                onClick={() => {navigate('/search')}}
              >Login</Button>

          }
        </Box>
      </Flex>
    </>
  )
}

export default Navbar
