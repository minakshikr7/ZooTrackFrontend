import React from 'react'
import {HStack,Button, Link, Stack,Heading,Image} from "@chakra-ui/react";
import img1 from '../Assests/tl.webp'
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
 
  // next one 
  <Stack  bgColor={'gray.300'}  direction={'row'}>
  <Image mx={4} my={5} zIndex={1} height={10} width={10} src={img1}/>
  <Heading my={15} fontSize={25}>Zoo Management</Heading>
  <HStack gap={5} mx={530}>
      <Button color="black" variant="link" onClick={() => navigate("/")}>
        Home
      </Button>
      <Button color="black" variant="link" onClick={() => navigate("/contact")}>
        Contact
      </Button>
      <Button color="black" variant="link" onClick={() => navigate("/about")}>
        About Us
      </Button>
      <Button color="black" variant="link" onClick={() => navigate("/faq")}>
        Frequent Questions
      </Button>
      <Button color="black" variant="link" onClick={() => navigate("/register")}>
        Register
      </Button>
    </HStack>
  </Stack>
   
  )
}

export default Header