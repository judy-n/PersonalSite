import React, {useEffect, useState} from 'react';
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
    Center, HStack, Button,
    Icon, Image, Spacer,
    Badge,
    useColorMode,
    useColorModeValue, Wrap, WrapItem, AspectRatio,
} from '@chakra-ui/react';

import { CircleGrid, Circle } from 'react-awesome-shapes'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import theme from './theme.js'
import Nav from "./components/Nav";
import { Fade, ScaleFade, Slide, SlideFade } from '@chakra-ui/react'
import {FaGithub, FaLinkedinIn, FaRegEnvelope, FaAngleDown} from 'react-icons/fa';
import ScrollButton from "./components/ScrollButton";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
    const [shapeColor, setShapeColor] = useState('#8378e9')
    const updateColorMode = (colorMode) => {
        colorMode === 'light' ? setShapeColor('#8378e9') : setShapeColor('#80233b')
        console.log('cm', colorMode);
    }

  return (

    <ChakraProvider theme={theme}>
            <Nav
                updateColorMode={updateColorMode}
            />
        <Center h={'100vh'} overflow={'hidden'} width={'100%'}>
        <Flex borderBottomRightRadius={35} borderBottomLeftRadius={35} align="center" justify="center" w='100%' h='100vh'
              bgGradient='linear(to-l, #6CD4FF, #8B80F9)'
        _dark={{bgGradient: 'linear(to-l, #3a6186, #89253e)'}}>
            <Box w={['80%','60%','50%','40%']}>
            <ScaleFade in={true} offsetY='40px' style={{ transitionDuration: '1s'}}
            >

            <VStack position={'relative'} zIndex={2} spacing={8} boxShadow='md' w={'100%'} borderRadius={25}
                    bgColor='white' paddingY={'2rem'}
                    paddingX={'2rem'}
                    _dark={{bgColor: 'gray.800'}}
            >
                <Box  zIndex={3} width={'100%'}>
                    <Heading w={'100%'}
                             fontWeight={'medium'}
                            fontSize={['3xl', '4xl', '6xl']}
                    >
                        Hi, I'm Judy
                    </Heading>
                    <Text w={'100%'}
                          fontFamily={"fontMono"}
                          fontSize={['md', 'lg', 'xl']}
                    >
                        I'm an aspiring web developer with an eye for design
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
            </Box>

        </Flex>

            <CircleGrid
                position="absolute"
                left="0px"
                color={shapeColor}
                size="200px"
                zIndex={0}
            />
        </Center>

        <Center>
        <VStack id="about"  spacing={10} marginY={'5rem'} width={['80%','70%','60%','50%']}>

            <Heading fontWeight={'medium'}>
                About Me
            </Heading>
            <About/>
        </VStack>
            <ScrollButton/>
        </Center>

        <Center>
            <VStack id="projects"  spacing={10} marginY={'5rem'} width={['80%','70%','60%','50%']}>
                <Heading fontWeight={'medium'}>
                    Projects
                </Heading>
                <Projects/>
            </VStack>
        </Center>

    </ChakraProvider>
  );
}

export default App;
