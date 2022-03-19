import React from 'react';
import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    Flex, Heading,
    Center, HStack, Button, Icon
} from '@chakra-ui/react';
import { CircleGrid, Circle } from 'react-awesome-shapes'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import theme from './index.js'
import Nav from "./components/Nav";
import { Fade, ScaleFade, Slide, SlideFade } from '@chakra-ui/react'
import {FaGithub, FaLinkedinIn, FaRegEnvelope, FaAngleDown} from 'react-icons/fa';

function App() {
  return (
    <ChakraProvider theme={theme}>


            <Nav/>
        <Center h={'100vh'} overflow={'hidden'} width={'100%'}>
        <Flex borderBottomRightRadius={35} borderBottomLeftRadius={35} align="center" justify="center" w='100%' h='100vh' bgGradient='linear(to-l, #6CD4FF, #8B80F9)'>
            <ScaleFade in={true} offsetY='40px' style={{ transitionDuration: '1s', width:'40%' }} >
            <VStack position={'relative'} zIndex={2} spacing={8} boxShadow='md' w={'100%'} borderRadius={25} bgColor='white' paddingY={'2rem'} paddingX={'2rem'}>
                <Box  zIndex={3} width={'100%'}>
                    <Heading w={'100%'} fontWeight={'medium'} fontSize={'6xl'} color='black'>
                        Hi, I'm <span bgColor={'pink'}>Judy</span>
                    </Heading>
                    <Text w={'100%'} fontFamily={"fontMono"} fontSize={'xl'} color='black'>
                        Open source maintainer
                    </Text>
                </Box>
                <HStack w={'100%'} mt={'5%'}>
                    <Button>
                        <FaGithub/>
                    </Button>
                    <Button>
                        <FaLinkedinIn/>
                    </Button>
                    <Button>
                        <FaRegEnvelope/>
                    </Button>
                </HStack>

        </VStack>
                <Button
                        position={"relative"}
                        borderRadius={'50%'}
                        left={'1rem'}
                        top={'8rem'}
                        opacity={0.8}
                        w={'3rem'}
                        h={'3rem'}
                >

                    <FaAngleDown/>
                </Button>
            </ScaleFade>

        </Flex>

            <CircleGrid
                position="absolute"
                left="0px"
                color="#8378e9"
                size="200px"
                zIndex={0}
            />
        </Center>

        <Flex id="about">
            <Heading >
                About Me
            </Heading>
        </Flex>

    </ChakraProvider>
  );
}

export default App;
