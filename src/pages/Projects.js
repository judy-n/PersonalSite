import {AspectRatio, Button, Center, HStack, Image, Text, VStack, Wrap, WrapItem} from "@chakra-ui/react";
import React from "react";
import four from '../img/four.png'
import {FaGithub, FaLinkedinIn, FaRegEnvelope, FaAngleDown, FaLink, FaExternalLinkAlt} from 'react-icons/fa';

function Projects() {

    return (
        <Wrap width={'100%'} spacing={'3rem'}>
            <WrapItem>
                <VStack padding={5}
                        boxShadow={'rgba(0, 0, 0, 0.1) 0px 0px 0px 0px,rgba(0, 0, 0, 0.2) 0px 5px 10px,rgba(0, 0, 0, 0.1) 0px 15px 40px'}
                        borderRadius={20}
                        bgColor={'gray.50'}>
                    <Image
                    src={four}
                    w={'300px'}
                    borderRadius={15}
                    objectFit='cover'
                    />
                    <HStack>
                        <Text>
                            Four Quadrant
                        </Text>

                        <Button
                            variant={'ghost'}>
                        <FaGithub/>
                        </Button>
                        <Button leftIcon={<FaExternalLinkAlt />} variant={'ghost'}>
                            Link
                        </Button>



                    </HStack>

                </VStack>
            </WrapItem>

            <WrapItem>
                <Center w='180px' h='80px' bg='green.200'>
                    Box 2
                </Center>
            </WrapItem>
        </Wrap>

    )

} export default Projects
