import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Contextapi/AuthContext';
import { Box, Grid, SimpleGrid } from '@chakra-ui/react';
import CardDiv from './CardDiv';


const Result = () => {

  const { searchData, setsearchData } = useContext(AuthContext); 
  let [data,setData] = useState([]);

  
  useEffect(()=>{
    setData(searchData);
  },[]);

 
  return (
    <SimpleGrid columns={2} gap={'20px'} bg={'rgb(157,229,213)'}>
      {
        data?.map((e)=>{
           return <CardDiv e={e} key={e.id}/>
        })
      }
    </SimpleGrid>
  )
}

export default Result
