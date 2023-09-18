import { Box, Container, Flex, Heading, Image, ListItem, UnorderedList, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Details = ({ }) => {

  let id = localStorage.getItem("id");
  const [instructions, setInstructions] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [nutrients, setNutrients] = useState([]);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");

  let getData = async () => {
    let resp = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=b2c5093321aa45e0bade4ce0c988e8dd`);

    setImage(resp.data.image);
    // console.log(resp.data);

    setInstructions(resp.data.analyzedInstructions[0].steps);

    setIngredients(resp.data.nutrition.ingredients);

    setNutrients(resp.data.nutrition.nutrients);

    setTitle(resp.data.title);
  }

  useEffect(() => {
    getData();
  }, [])


  return (
    <Box bg={'#7FC7E7'}>
    
    <Container maxW='90%'  alignItems={'center'}
    p={'20px'} m={'auto'} >
      
      <Flex justifyContent={'space-evenly'} bg={'rgb(255,171,171)'} alignItems={'center'}
       m={'20px'} p={'20px'} borderRadius={'10px'} boxShadow={'0 0 15px rgb(255,171,171)'}> 
        <Heading fontSize={'50px'} color={'rgb(246,100,100)'}>{title}</Heading>

      <Image src={image} borderRadius={'10px'}></Image>
      </Flex>

      <Box className='ingredients' bg={'rgb(255,171,171)'} p={'20px'} borderRadius={'10px'} boxShadow={'0 0 15px rgb(255,171,171)'}  m={'20px'}>
        <Heading color={'rgb(18,134,168)'}  m={'20px'}>Ingredients</Heading>
        <UnorderedList>
          {
            ingredients?.map((ingredient, index) => (
              <ListItem key={index}>
                <Text fontSize={'20px'} color={'rgb(18,149,186)'}>{ingredient.name}</Text>
              </ListItem>
            ))
          }
        </UnorderedList>
      </Box>


      <Box className='instructions' bg={'rgb(255,171,171)'} p={'20px'} borderRadius={'10px'} boxShadow={'0 0 15px rgb(255,171,171)'}  m={'20px'}>
        <Heading color={'rgb(18,134,168)'}  m={'20px'}>Instructions</Heading>
        <UnorderedList>
          {instructions.map((step, index) => (
            <ListItem key={index}>
              <Text fontSize={'20px'} color={'rgb(18,149,186)'}>{step.step}</Text>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>




      <Box className='nutrients' bg={'rgb(255,171,171)'} p={'20px'} borderRadius={'10px'} boxShadow={'0 0 15px rgb(255,171,171)'}  m={'20px'}>
        <Heading color={'rgb(18,134,168)'}  m={'20px'}>Nutrients</Heading>
        {
          nutrients?.map((nutrient, index) => (
            <UnorderedList>
              <ListItem key={index}>
                <Text fontSize={'20px'} color={'rgb(18,149,186)'}>{nutrient.name} : {nutrient.amount} {nutrient.unit}</Text>
              </ListItem>
            </UnorderedList>
          ))
        }
      </Box>
    </Container>
    </Box>
  
  )
}

export default Details
