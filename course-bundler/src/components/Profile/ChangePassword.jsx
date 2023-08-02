import React, { useState } from 'react';
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  return (
    <Container py="16" minH={'90vh'}>
      <form>
        <Heading
          children="Change Password"
          my="16"
          textAlign={['center', 'left']}
          textTransform={'uppercase'}
        />
        <VStack spacing={'8'}>
          <Input
            required
            type="password"
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
            focusBorderColor="yellow.500"
            placeholder="Old Password"
          />
          <Input
            required
            type="password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            focusBorderColor="yellow.500"
            placeholder="New Password"
          />
          <Button w="full" colorScheme={'yellow'} type="submit">
            Change
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ChangePassword;
