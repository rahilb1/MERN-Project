import React, { useState } from 'react';
import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import introVideo from '../../assets/videos/intro.mp4';

const CoursePage = () => {
  const [lectureNumber, setLectureNumber] = useState(0);
  const lectures = [
    {
      _id: 'sdkjfhsakdfh',
      title: 'Sample',
      description: 'Sample dsjhfksjdnf',
      video: {
        url: 'ksjdfhksh',
      },
    },
    {
        _id: 'sdkjfhsakdfh2',
        title: 'Sample2',
        description: 'Sample dsjhfksjdnf',
        video: {
          url: 'ksjdfhksh',
        },
      },
      {
        _id: 'sdkjfhsakdfh3',
        title: 'Sample3',
        description: 'Sample dsjhfksjdnf',
        video: {
          url: 'ksjdfhksh',
        },
      }
  ];
  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          width="100%"
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
        <Heading
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
          m="4"
        />
        <Heading children="Description" m="4" />
        <Text m="4" children={lectures[lectureNumber].description} />
      </Box>
      <VStack>
        {lectures.map((item, index) => (
          <button
          onClick={() => setLectureNumber(index)}
          key={item._id}
          style={{
            width: '100%',
            padding: '1rem',
            textAlign: 'center',
            margin:0,
            borderBottom: '1px solid rgba(0,0,0,0.2',
          }}
          >
            <Text>
              #{index + 1} {item.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;
