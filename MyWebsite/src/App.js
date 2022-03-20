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
    Center, HStack, Button, Icon, Image, Spacer,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react';
// import { useColorMode, useColorModeValue} from '@chakra-ui/color-mode'
import judy from './img/judy2.png'
import TrackVisibility from 'react-on-screen';
import { CircleGrid, Circle } from 'react-awesome-shapes'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import theme from './theme.js'
import Nav from "./components/Nav";
import { Fade, ScaleFade, Slide, SlideFade } from '@chakra-ui/react'
import {FaGithub, FaLinkedinIn, FaRegEnvelope, FaAngleDown} from 'react-icons/fa';


function App() {
    const [shapeColor, setShapeColor] = useState('#8378e9')
    const { colorMode, toggleColorMode } = useColorMode();
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
            <Box w={['60%','50%','40%']}>
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
            <TrackVisibility once>
                {({ isVisible }) => isVisible &&
                    <ScaleFade
                in={true} offsetY='40px' style={{ transitionDuration: '1s', width:'100%' }}
                       viewport={{ once: true, amount: 0.8 }}
                position={'relative'}
                    >
            <Flex display={{ md: 'flex' }} w={['100%']}  borderRadius={25}
        position={'relative'}

            >
                <Box flexShrink={0}
                    zIndex={1}
                     position={'relative'}
                     ml={['30%', '30%', 0]}
                     marginBottom={[5, 5, 0]}
                >
                <Image
                    src={judy}
                    boxSize={['100px','150px']}
                    borderRadius={20}
                    boxShadow={'rgba(0, 0, 0, 0.1) 0px 0px 0px 0px,rgba(0, 0, 0, 0.2) 0px 5px 10px,rgba(0, 0, 0, 0.2) 0px 15px 40px'}
                    border={'none'}
                    zIndex={1}
                    position={'relative'}
                />
                </Box>

                <Box
                    bgGradient='linear(to-l, #6CD4FF, #8B80F9)'
                    transform={'rotate(10deg)'}
                    borderRadius={20}
                    boxSize={['100px','150px']}
                    position={'absolute'}
                    top={'0px'}
                    left={'0px'}
                    zIndex={0}
                    ml={['30%', '30%', 0]}
                    _dark={{bgGradient: 'linear(to-l, #3a6186, #89253e)'}}
                />

                <Spacer/>
                <Box marginLeft={10}
                    _hover={{ bg: 'gray.50', transition: "background-color 0.2s" }}
                     padding={5}
                     borderRadius={20}
                     bg={'gray.50'}
                     _dark={{bg: 'gray.900'}}
                     >
                    <Text  fontFamily={'fontSans'}
                           fontSize={['sm','md', 'lg', 'xl']} >
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
