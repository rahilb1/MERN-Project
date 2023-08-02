import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import introVideo from '../../assets/videos/intro.mp4';
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsAndConditions from '../../assets/docs/termsAndCondition.js';

const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar
        src="https://avatars.githubusercontent.com/u/75832793?s=400&u=e2b1b452963c05967143770b57b273c4e245a5eb&v=4"
        boxSize={['40', '48']}
      />
      <Text children="Co-Founder" opacity={0.7} />
    </VStack>
    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Rahil Budhwani" size={['md', 'xl']} />
      <Text
        textAlign={['center', 'left']}
        children="Hi, I am a full-stack developer and a teacher. Our mission is to provide quality content at a reasonable price"
      />
    </VStack>
  </Stack>
);

const VideoPlayer = () => (
  <Box>
    <video
      autoPlay
      muted
      loop
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      src={introVideo}
    ></video>
  </Box>
);

const TandC = ({ termsAndConditions }) => (
    <Box>
        <Heading size={"md"} children="Terms and Conditions" textAlign={["center", "left"]} my="4" />
        <Box h="sm" p="4" overflowY={"scroll"} >
    <Text fontFamily={"heading"} letterSpacing={"widest"} textAlign={["center", "left"]}>
        {termsAndConditions}
    </Text>
    <Heading my="4" size={'xs'} children="Refund only applicable for cancellation within 7 days" />
        </Box>
    </Box>
    
)

const About = () => {
  return (
    <Container maxW="container.lg" padding="16" boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Founder />
      <Stack m="8" direction={['column', 'row']} alignItems="center">
        <Text fontFamily={'cursive'} m="8" textAlign={['center', 'left']}>
          We are a team of developers and teachers who are passionate about
          teaching and coding. We believe that anyone can learn to code and that
          too without spending a lot of money. We have created this platform to
          provide quality content at a reasonable price.
        </Text>
        <Link to="/subscribe">
          <Button
            variant={'ghost'}
            colorScheme="yellow"
            children="Checkout our plan"
          />
        </Link>
      </Stack>
      <VideoPlayer />
      <TandC termsAndConditions={termsAndConditions} />
      <HStack my="4" p="4">
        <RiSecurePaymentFill />
        <Heading size={"xs"} fontFamily="sans-serif" textTransform={"uppercase"} children="Payments secured through Razorpay" />
      </HStack>
    </Container>
  );
};

export default About;
