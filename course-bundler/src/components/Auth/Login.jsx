import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent="center" spacing={'16'}>
        <Heading children={'Welcome to CourseBundler'} />
        <form style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <Input
              required
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              focusBorderColor="yellow.500"
              placeholder="abc@gmail.com"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              required
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              focusBorderColor="yellow.500"
              placeholder="Enter Your Password"
            />
          </Box>
          <Box>
            <Link to="/forgotpassword">
              <Button fontSize={'sm'} variant="link">
                Forgot Password?
              </Button>
            </Link>
          </Box>
          <Button my="4" colorScheme={'yellow'} type="submit">
            Login
          </Button>
          <Box my="4">
            New User?{' '}
            <Link to="/register">
              <Button colorScheme={'yellow'} variant="link">
                Sign Up
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
