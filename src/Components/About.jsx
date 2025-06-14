import React from 'react';
import { Box, Heading, Text, Stack, Image, Flex } from '@chakra-ui/react';
import img from "../Assests/tree.png"
import { keyframes } from "@emotion/react";


const AboutUs = () => {
   const colorChange = keyframes`
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
  `;
  return (
    <Box maxW="960px" mx="auto" p={5}>
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        About Us
      </Heading>
      <Flex direction={{ base: 'column', md: 'row' }} align="center" mb={6}>
        <Box flex="1" pr={{ base: 0, md: 6 }}>
          <Text fontSize="lg" mb={4}>
            Welcome to our organization! We are a dedicated team passionate about creating memorable experiences for our visitors. Our mission is to educate, entertain, and inspire people of all ages through our diverse range of exhibits and programs.
          </Text>
          <Text fontSize="lg">
            With years of experience and a commitment to excellence, we strive to provide the highest quality services and create a welcoming environment for everyone. Whether you are here for a day of fun, to learn something new, or to explore our unique exhibits, we are here to ensure you have an unforgettable experience.
          </Text>
        </Box>
        <Box  mt={{ base: 8, md: 0 }} ml={{ md: 8 }}>
          <Image
             boxSize="350px"
             src={img}
             alt="Profile Image"
             borderRadius="full"
             objectFit="cover"
             // boxShadow="0 0 20px rgba(255, 255, 255, 0.7)"
             animation={`${colorChange} 5s infinite linear`}
             boxShadow="0px 10px 15px rgba(0, 0, 0, 0.4)"
          />
        </Box>
      </Flex>
      <Stack spacing={4}>
        <Heading as="h2" size="lg">
          Our Story
        </Heading>
        <Text fontSize="md">
          Our organization was founded on the belief that everyone deserves to explore and learn in a fun and engaging environment. Starting from humble beginnings, our dedicated team has grown into a community of experts and enthusiasts committed to delivering exceptional experiences.
        </Text>
        <Heading as="h2" size="lg">
          Our Values
        </Heading>
        <Text fontSize="md">
          We value integrity, innovation, and inclusivity. Our team works together to foster a culture where every individual feels valued and empowered to contribute their unique talents. We are continually seeking new ways to improve and expand our offerings, ensuring a rich experience for our visitors.
        </Text>
      </Stack>
    </Box>
  );
};

export default AboutUs;
