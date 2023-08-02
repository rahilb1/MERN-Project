import { Button, Container, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { RiErrorWarningFill } from 'react-icons/ri';

const NotFound = () => {
  return (
    <Container h="90vh">
      <VStack justifyContent={"center"} h="full" spacing={"4"} >
        <RiErrorWarningFill size={"5rem"} />
        <Heading>
          Page Not Found
        </Heading>
        <Link to="/">
          <Button variant={'ghost'}>Go Home</Button>
        </Link>
        <Heading size={'xs'}>Reference: shfksjhfkjshfksdhf</Heading>
      </VStack>
    </Container>
  );
};

export default NotFound;
