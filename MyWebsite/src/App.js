import React from 'react';
import './App.css'
import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    Flex, Heading,
    Center, HStack, Button, Icon, Image, Spacer
} from '@chakra-ui/react';
import judy from './img/judy2.png'
import TrackVisibility from 'react-on-screen';
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
            <VStack position={'relative'} zIndex={2} spacing={8} boxShadow='md' w={'100%'} borderRadius={25} bgColor='white' paddingY={'2rem'}
                    paddingX={'2rem'}
                    _dark={{bgColor: 'gray.800'}}
            >
                <Box  zIndex={3} width={'100%'}>
                    <Heading w={'100%'} fontWeight={'medium'} fontSize={'6xl'}>
                        Hi, I'm Judy
                    </Heading>
                    <Text w={'100%'} fontFamily={"fontMono"} fontSize={'xl'}>
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
                        onClick={
                            (e) => {
                                e.preventDefault();
                                window.location.href='/#about'
                            }
                        }
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

        <Center>
        <VStack id="about"  spacing={10} marginY={'5rem'} width={'50%'}>
            <Heading fontWeight={'medium'}>
                About Me
            </Heading>
            <TrackVisibility once>
                {({ isVisible }) => isVisible &&
                    <ScaleFade
                in={true} offsetY='40px' style={{ transitionDuration: '1s', width:'100%' }}
                       viewport={{ once: true, amount: 0.8 }}>
            <Flex w={'100%'} align={'center'} borderRadius={25}>
                <Image
                    src={judy}
                    boxSize='150px'
                    borderRadius={20}
                    boxShadow={'rgba(0, 0, 0, 0.1) 0px 0px 0px 0px,rgba(0, 0, 0, 0.2) 0px 5px 10px,rgba(0, 0, 0, 0.2) 0px 15px 40px'}
                    border={'none'}
                    zIndex={1}
                />
                <Box
                    bgGradient='linear(to-l, #6CD4FF, #8B80F9)'
                    transform={'rotate(10deg)'}
                    borderRadius={20}
                    boxSize='150px'
                    position={'absolute'}
                    zIndex={0}
                />
                <Spacer/>
                <Box marginLeft={10}
                    _hover={{ bg: 'gray.50', transition: "background-color 0.2s" }}
                     padding={5}
                     borderRadius={20}
                     bg={'gray.50'}
                     >
                    <Text  fontFamily={'fontSans'} fontSize={'xl'} _dark={{color: 'black'}}>
                        Hey! I'm Judy Naamani, a 3rd year student at the University of Toronto specializing in Computer Science.
                        <br/>
                        I'm interested in web development and UI/UX, and some of my hobbies include graphic design and digital art.
                    </Text>
                </Box>

            </Flex>
            </ScaleFade>}
            </TrackVisibility>

        </VStack>
        </Center>

    </ChakraProvider>
  );
}

export default App;
