import React, {useEffect, useState} from 'react';
import './App.css'
import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Flex, Heading,
    Center, HStack, Button,
    useMediaQuery,
} from '@chakra-ui/react';

import { CircleGrid } from 'react-awesome-shapes'
import theme from './theme.js'
import Nav from "./components/Nav";
import { ScaleFade } from '@chakra-ui/react'
import {FaGithub, FaLinkedinIn, FaRegEnvelope, FaAngleDown} from 'react-icons/fa';
import ScrollButton from "./components/ScrollButton";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

function App() {
    const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')
    const [shapeColor, setShapeColor] = useState('#8378e9')
    const updateColorMode = (colorMode) => {
        colorMode === 'light' ? setShapeColor('#8378e9') : setShapeColor('#80233b')
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
            <ScaleFade
                in={true} offsetY='40px' style={{ transitionDuration: '1s'}}
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
                             className={'font-text'}
                    >
                        Hi, I'm Judy
                    </Heading>
                    <Text w={'100%'}
                          fontFamily={"fontMono"}
                          fontSize={['md', 'lg', 'xl']}
                          className={'font-sub'}
                    >
                        I'm a software engineer with an eye for design
                    </Text>
                </Box>
                <HStack w={'100%'} mt={'5%'}>
                    <Link
                        target={'_blank'}
                        href={'https://github.com/judy-n'}>
                    <Button>
                        <FaGithub/>
                    </Button>
                    </Link>
                    <Link
                        target={'_blank'}
                        href={'https://www.linkedin.com/in/judy-naamani/'}>
                    <Button>
                        <FaLinkedinIn/>
                    </Button>
                    </Link>
                    <Link
                        target={'_blank'}
                        href={'mailto:judynaamani@icloud.com'}>
                    <Button>
                        <FaRegEnvelope/>
                    </Button>
                    </Link>
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
            {isLargerThan1280 && (
                <CircleGrid
                    position="absolute"
                    left="0px"
                    color={shapeColor}
                    size="200px"
                    zIndex={0}
                />
            )}

        </Center>

        <Center id="about" >
        <VStack  spacing={10} marginY={'5rem'} width={['80%','70%','60%','50%']}>

            <Heading fontWeight={'medium'}
                     className={'font-text'}>
                About Me
            </Heading>
            <About/>
        </VStack>
            <ScrollButton/>
        </Center>

        <Center id="projects">
            <VStack   spacing={10} marginY={'5rem'} width={'70%'}>
                <Heading fontWeight={'medium'}
                         className={'font-text'}>
                    Projects
                </Heading>
                <Projects/>
            </VStack>
        </Center>
        <Footer/>
    </ChakraProvider>
  );
}

export default App;
