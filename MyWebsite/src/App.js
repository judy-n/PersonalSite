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
    Center, HStack
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import theme from './index.js'
import Nav from "./components/Nav";


function App() {
  return (
    <ChakraProvider theme={theme}>

            <Nav/>
        <Center h={'100vh'}>
        <Flex borderBottomRightRadius={35} borderBottomLeftRadius={35} align="center" justify="center" w='100%' h='100vh' bgGradient='linear(to-l, #6CD4FF, #8B80F9)'>
            <VStack boxShadow='md' spacing={'0px'} borderRadius={25} bgColor='white' paddingRight={'10rem'} paddingY={'2rem'} paddingLeft={'2rem'}>
            <Heading w={'100%'} fontWeight={'medium'} fontSize={'5xl'} color='black'>
              Hi, I'm Judy
            </Heading>
            <Text w={'100%'} fontFamily={'Space Mono'} fontSize={'lg'} color='black'>
            I create things sometimes
            </Text>
        </VStack>
        </Flex>
        </Center>
        <Flex>
            <Heading>
                blah blah
            </Heading>
        </Flex>

    </ChakraProvider>
  );
}

export default App;
