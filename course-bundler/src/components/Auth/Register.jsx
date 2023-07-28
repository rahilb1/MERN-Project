import {
  Avatar,
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

export const fileUploadCss = {
  cursor: 'pointer',
  marginleft: '-5%',
  width: '110%',
  border: 'none',
  height: '100%',
  color: '#ECC94B',
  backgroundColor: 'white',
};

const fileUploadStyle = {
  '&::file-selector-button': fileUploadCss,
};

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const [image, setImage] = useState('');


  const changeImageHandler = (e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  }

  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent="center" spacing={'16'}>
        <Heading textTransform={'uppercase'} children={'Registration'} />
        <form style={{ width: '100%' }}>
          <Box my={'4'} display={'flex'} justifyContent="center">
            <Avatar src={imagePrev} size={'2xl'} />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              required
              id="name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              focusBorderColor="yellow.500"
              placeholder="abc"
            />
          </Box>
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
          <Box my={'4'}>
            <FormLabel htmlFor="chooseAvatar">Choose Avatar</FormLabel>
            <Input
              accept="image/*"
              required
              id="chooseAvatar"
              type="file"
              focusBorderColor="yellow.500"
              css={fileUploadStyle}
              onChange={changeImageHandler}
            />
          </Box>

          <Button my="4" colorScheme={'yellow'} type="submit">
            Sign Up
          </Button>
          <Box my="4">
            Already Signed Up?{' '}
            <Link to="/login">
              <Button colorScheme={'yellow'} variant="link">
                Login Here
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;
