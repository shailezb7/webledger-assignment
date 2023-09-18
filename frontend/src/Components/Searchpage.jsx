import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import searchImg from '../Images/searchImg.jpg';
import { Box, Button, Flex, Image, Input, Text } from '@chakra-ui/react';
import { AuthContext } from '../Contextapi/AuthContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar'

const Searchpage = () => {

  let navigate = useNavigate();
  let [ing, setIng] = useState([]);
  let [str, setStr] = useState("");
  const { searchData, setsearchData } = useContext(AuthContext);

  let apikey = "b2c5093321aa45e0bade4ce0c988e8dd";
  let getdata = async () => {
    let url = `https://api.spoonacular.com/recipes/complexSearch?query=${search}&apiKey=${apikey}`;
    let res = await axios.get(url);
    let data = res.data.results;
    setsearchData(data);
    navigate('/results');
  }

  let getdata2 = async () => {
    let arr = str.split(",").map(item => item.trim()); // Split and trim whitespace
    let formattedStr = arr.join(",+"); // Join with ",+"
    setStr(formattedStr);
    let url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=b2c5093321aa45e0bade4ce0c988e8dd&ingredients=${str}`;
    let res = await axios.get(url);
    setsearchData(res.data);
    navigate('/results');

  }

  useEffect(() => {
    console.log(searchData);
  }, [searchData])



  let [search, setsearch] = useState("");
  let handlechange = (e) => {
    setsearch(e.target.value);
  }
  let handlechange2 = (e) => {
    setStr(e.target.value);
  }
  return (
    <Box
      m={0}
      p={0}
      height="100vh"
      overflow="hidden"
      w={"100%"}
      pos={"relative"}
    >


      <Image
        m={0}
        p={0}
        src={searchImg}
        objectFit="cover"
        height="100%"
        width="100%"
      />

      <Box position={'absolute'} top={'30px'} right={'5px'}>
        <Button colorScheme='green' p={"10px"} w={"110px"} fontSize={"18px"} fontWeight={"600"} 
          borderRadius={"15px"} 
          onClick={() => { navigate('/') }}
        >Dashboard</Button>
      </Box>


      <Flex justifyContent={'space-evenly'} alignItems={'center'}
        position={'absolute'} top={'200px'} right={'250px'} >

        <Input onChange={handlechange} placeholder='Search by Dish'
          color={'C8C8C8'} variant='outline' boxShadow={'2px 2px green inset'}
          fontSize={'15px'} fontWeight={'bold'}
        ></Input>
        <Button colorScheme='green' w={'120px'}  fontSize={'17px'}
          ml={'20px'} onClick={getdata}
        >Search</Button>
      </Flex>




      <Box alignItems={'center'}
        position={'absolute'} top={'300px'} right={'250px'} >
        <Flex justifyContent={'space-evenly'} >
          <Input placeholder='Search by Ingredients'
            onChange={handlechange2}
            color={'C8C8C8'} variant='outline' boxShadow={'2px 2px green inset'}
            fontSize={'15px'} fontWeight={'bold'}
          ></Input>
          <Button onClick={getdata2} colorScheme='green' w={'120px'}  fontSize={'17px'}
            ml={'20px'}
          >Search</Button>
        </Flex>
        <Text color={'green'} mt={'6px'}>(eg:flour,sugar,apples)</Text>
      </Box>
    </Box>
  )
}

export default Searchpage


// width={'200px'} height={'35px'} borderRadius={'10px'} border={'none'}
//          boxShadow={'2px 2px green inset'} p={'0 10px'} color={'C8C8C8'}
//          fontSize={'15px'} fontWeight={'bold'}


// button
// ml={'20px'}
//          width={'100px'} h={'35px'} border={'none'} borderRadius={'10px'} color={'red'}
//          fontFamily={'sans-serif'} fontSize={'17px'} fontWeight={'bold'}