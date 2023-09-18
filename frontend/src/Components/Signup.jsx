import React, { useState } from 'react'
import { Button, Container, Flex, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';


const Signup = () => {

  let navigate=useNavigate();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let handleSignup = async () => {
     let resp= await axios.post('http://localhost:7000/signup',{name,email,password});
      navigate('/login');
  }



  return (
    <Container mt={'100px'} size={'500px'} boxShadow={'0 0 10px rgb(231,56,65)'} p={'25px'} borderRadius={'10px'}>
      <FormControl>
        <FormLabel color={'rgb(231,56,65)'}>Name</FormLabel>
        <Input type='text' onChange={(e) => { setName(e.target.value) }}/><br /><br />

        <FormLabel color={'rgb(231,56,65)'}>Email address</FormLabel>
        <Input type='email' onChange={(e) => { setEmail(e.target.value) }} /><br /><br />

        <FormLabel color={'rgb(231,56,65)'}>Password</FormLabel>
        <Input type='password' onChange={(e) => { setPassword(e.target.value) }} /><br /><br />

        <Flex justifyContent={"space-between"} >
          <Button colorScheme={'red'} onClick={handleSignup}>Submit</Button>
          <Text> Already signed up? <Link to={"/login"} style={{ color: "green", textDecoration: "underline" }}>Login</Link></Text>
        </Flex>
      </FormControl>
    </Container>
  )
}

export default Signup