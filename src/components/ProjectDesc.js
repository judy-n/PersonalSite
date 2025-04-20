import React, {useState} from 'react';
import {Badge, Box, Divider, Heading, HStack, Text, VStack} from "@chakra-ui/react";
import {FaTrophy} from 'react-icons/fa'


function ProjectDesc(props) {

    return (
        <Box mt={5}>
            <Heading
                fontWeight={'medium'}
                fontSize={'2xl'}
            >{props.title}</Heading>
            <Divider
                w={'30%'}
                m={4}/>
            <Text
                fontSize={['md','lg']}
                fontFamily={'fontSans'}

                mb={'1rem'}>
                {props.desc}
            </Text>
            {props.highlight && (
                <HStack
                p={1}
                width={'fit-content'}
                mb={4}
                borderRadius={10}
                >
                    <HStack borderRadius={10} color={"teal.600"}>
                        <Box bg={'teal.100'} p={2} borderRadius={'50%'}>
                    <FaTrophy />
                    </Box>
                        <Text
                            fontSize={['xs','sm']}
                            fontFamily={'fontSans'}
                            color={"teal.600"}
                            _dark={{color: 'teal.100'}}
                            fontWeight={'medium'}
                            mb={'1rem'}>
                            {props.highlight}
                        </Text>
                    </HStack>
                </HStack>
            )}
            <HStack mb={'2rem'}>
                {props.tags.map((tag) => {
                    return (<Badge
                        bg={'blue.100'}
                        _dark={{bg: 'blue.900'}}
                    >{tag}</Badge>)
                    }
                )}
            </HStack>

        </Box>
    )
} export default ProjectDesc;
