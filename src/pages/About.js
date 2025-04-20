import React from 'react';
import {Badge, Box, Flex, HStack, Image, ScaleFade, Spacer, Text, VStack} from "@chakra-ui/react";
import judy from "../img/judy3.png";
import TrackVisibility from "react-on-screen";

function About() {

    return (
        <Box>
    <TrackVisibility once>
        {({ isVisible }) => isVisible &&
            <ScaleFade
                in={true} offsetY='40px' style={{ transitionDuration: '1s', width:'100%' }}
                viewport={{ once: true, amount: 0.8 }}
                position={'relative'}
            >
                <Flex
                    display={{ md: 'flex' }}
                    w={['100%']}  borderRadius={25}
                    position={'relative'}

                >
                    <Box flexShrink={0}
                         zIndex={1}
                         position={'relative'}
                         ml={['35%', '35%', 0]}
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
                            alt={""}
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
                        ml={['35%', '35%', 0]}
                        _dark={{bgGradient: 'linear(to-l, #3a6186, #89253e)'}}
                    />

                    <Spacer/>
                    <VStack width={'100%'}>
                        <Box marginLeft={[0,10]}
                             position={'relative'}
                             _hover={{ bg: 'gray.50', transition: "background-color 0.2s" }}
                             padding={5}
                             borderRadius={20}
                             bg={'gray.50'}
                             _dark={{bg: 'gray.900'}}
                        >
                            <Text  fontFamily={'fontSans'}
                                   fontSize={['sm','md', 'lg', 'xl']} >
                                Hey! I'm Judy Naamani, a Full Stack Developer at Procom with <Text as="span" fontWeight={'medium'}>2+</Text> years of experience. 
                                I graduated from the University of Toronto in 2024 with a BSc in Computer Science. 
                                <br/>
                                I'm interested in <Text as="span" fontWeight={'medium'}>web development, UI/UX, and game development</Text>. 
                            </Text>
                        </Box>


                    </VStack>

                </Flex>
                <VStack mt={5}
                >
                    <Text
                        flexShrink={0}
                        fontFamily={'fontSans'}
                        fontSize={['s','md']}
                    >Developing in:</Text>
                    <HStack>
                        <Badge
                            bg={'blue.100'}
                            _dark={{bg: 'blue.900'}}

                        >JavaScript</Badge>
                        <Badge
                            bg={'blue.100'}
                            _dark={{bg: 'blue.900'}}

                        >TypeScript</Badge>
                        <Badge
                            bg={'blue.100'}
                            _dark={{bg: 'blue.900'}}

                        >C#</Badge>
                        <Badge bg={'blue.100'}
                               _dark={{bg: 'blue.900'}}>HTML/CSS</Badge>
                        <Badge bg={'blue.100'}
                               _dark={{bg: 'blue.900'}}>React</Badge>
                        <Badge bg={'blue.100'}
                               _dark={{bg: 'blue.900'}}>Python</Badge>
                        <Badge bg={'blue.100'}
                               _dark={{bg: 'blue.900'}}>Java</Badge>
                    </HStack>
                </VStack>
            </ScaleFade>}
    </TrackVisibility>
        </Box>
)
} export default About;
