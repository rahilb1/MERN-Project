import { Button, Container, HStack, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Course = ({views,title,imageSrc,id,addToPlaylistHandler, creator, description, lectureCount}) => {
    return (
        <VStack className='course' alignItems={['center', 'flex-start']}>
            <Image src={imageSrc} boxSize="60" objectFit={"contain"} />
            <Heading textAlign={['center', 'left']} maxW="200px" size={"sm"} fontFamily={"sans-serif"} noOfLines={3} children={title} />
            <Text noOfLines={2} children={description} />
            <HStack>
            <Text fontWeight={'bold'} textTransform="uppercase" children={"Creator"} />
            <Text fontFamily={'body'} textTransform="uppercase" children={creator} />
            </HStack>

            <Heading  textAlign={"center"} size='xs' textTransform="uppercase" children={`Lectures - ${lectureCount}`}/>
            <Heading  size='xs' textTransform="uppercase" children={`Views - ${views}`}/>
            <Stack direction={['column', 'row']} alignItems="center">
            <Link to={`/course/${id}`}>
            <Button colorScheme={'yellow'}>Watch Now</Button>
            </Link>
            <Button variant={"ghost"} colorScheme={'yellow'} onClick={()=> addToPlaylistHandler(id)}>Add to Playlist</Button>
            </Stack>
        </VStack>
    )
}

const Courses = () => {
  const [keyword, setKeyword] = React.useState('')
  const [category, setCategory] = React.useState('')

    const addToPlaylistHandler = () => {
        console.log("Added to Playlist")
    }

  const categories=["Web Development","Data Structures and Algorithms", "App Development", "Data Science", "Machine Learning"]
    return (
    <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
    <Heading children="All Courses" m={'8'}/>
    <Input value = {keyword} onChange={e=>setKeyword(e.target.value)} placeholder="Search a Course..." type={"text"} focusBorderColor="yellow.500" />
    
    <HStack overflowX={"auto"} paddingY='8'>
        {
            categories.map((item, index)=>(
                <Button key={index} onClick={()=>setCategory(item)} minW ={'60'}>
            <Text children={item} />
        </Button>
            ))}
    </HStack>
    <Stack
    direction={['column', 'row']}
    flexWrap={'wrap'}
    justifyContent={['flex-start', 'space-evenly']}
    alignItems={['center', 'flex-start']}

    >
<Course
title = {"Sample"}
description={"Sample"}
views={23}
creator={"SampleBoy"}
imageSrc={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"}
id={"Sample"}
lectureCount={2}
addToPlaylistHandler={addToPlaylistHandler}
/>

    </Stack>

    </Container>
    );
}

export default Courses