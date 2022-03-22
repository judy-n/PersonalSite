import React, {useState} from 'react';
import {Badge, Box, Divider, Heading, HStack, Text} from "@chakra-ui/react";


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
            <HStack mb={'2rem'}>
                {props.tags.map((tag) => {
                    return (<Badge
                        bg={'blue.100'}
                        _dark={{bg: 'blue.900'}}
                    >{tag}</Badge>)
                    }
                )}
                {/*<Badge*/}
                {/*    bg={'blue.100'}*/}
                {/*    _dark={{bg: 'blue.900'}}*/}
                {/*>JavaScript</Badge>*/}
                {/*<Badge bg={'blue.100'}*/}
                {/*       _dark={{bg: 'blue.900'}}>HTML/CSS</Badge>*/}
                {/*<Badge bg={'blue.100'}*/}
                {/*       _dark={{bg: 'blue.900'}}>Node.js</Badge>*/}
            </HStack>

        </Box>
    )
} export default ProjectDesc;
