import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import { React, useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  return (
    <Container py={"16"} h="90vh">
      <form>
        <Heading
          children="Forgot Password"
          my="16"
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'}>
          <Input
            required
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            focusBorderColor="yellow.500"
            placeholder="abc@gmail.com"
          />
          <Button type="submit" w={'full'} colorScheme="yellow">
            Send Reset Link
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ForgotPassword;
