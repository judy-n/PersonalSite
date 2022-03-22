import {
    AspectRatio, Badge, Box,
    Button,
    Center,
    Divider, Flex,
    Heading,
    HStack,
    Image, Link, Spacer,
    Text,
    VStack,
    Wrap,
    WrapItem
} from "@chakra-ui/react";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectDesc from "../components/ProjectDesc";
import four from "../img/four.png";
import waw from "../img/waw.png"
import linki from "../img/linki3.jpg"

function Projects() {
    return (
        <Box>
        <Flex
            display={{ lg: 'flex', }}
            spacing={'3rem'}
              alignItems={'flex-start'}
        _light={{bgColor: 'gray.50', padding: 5, borderRadius:20}}
        >
                <ProjectCard
                    img={four}
                    link={'https://www.fourquadrant.tech/'}
                    github={'https://github.com/judy-n/FourQuadrant'}
                />
                <ProjectDesc
                    title={'Four Quadrant'}
                    desc={'Four Quadrant is a productivity web app that follows the Eisenhower method of time management.\n' +
                        'Simply write your task in a sticky note and place it in the right quadrant based on priority!'}
                    tags={['JavaScript','HTML/CSS', 'Node.js']}
                />
        </Flex>
    <Flex
        mt={20}
        display={{ lg: 'flex', }}
        spacing={'3rem'}
        flexDir={'row-reverse'}
        alignItems={'flex-start'}
        _light={{bgColor: 'gray.50', padding: 5, borderRadius:20}}
    >

        <ProjectCard
            style={{marginLeft: '2rem'}}
            img={waw}
            link={'https://chatwrapped.herokuapp.com/'}
            github={'https://github.com/judy-n/WhatsAppWrapped'}
        />

        <Spacer m={'1rem'}/>
        <ProjectDesc
            title={'WhatsApp Wrapped'}
            desc={'A web app that lets you view and share cool stats about your chat with someone. Stats include ' +
                'message distribution, most used words/emojis and more.'}
            tags={['JavaScript','HTML/CSS', 'Node.js']}
        />

    </Flex>

            <Flex
                mt={20}
                display={{ lg: 'flex', }}
                spacing={'3rem'}
                alignItems={'flex-start'}
                _light={{bgColor: 'gray.50', padding: 5, borderRadius:20}}
            >

                <ProjectCard
                    style={{marginLeft: '2rem'}}
                    img={linki}
                    link={'https://www.producthunt.com/posts/linki'}
                    github={'https://github.com/judy-n/linki'}
                />

                <Spacer m={'1rem'}/>
                <ProjectDesc
                    title={'Linki'}
                    desc={'Linki is a cross-platform menu bar app that gives quick access to your recurring meeting links!'}
                    tags={['JavaScript','Electron']}
                />

            </Flex>
        </Box>
    )

} export default Projects
