import {
    Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel,
    Box,
    Button,
    Center,
    Flex,
    Spacer,
} from "@chakra-ui/react";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectDesc from "../components/ProjectDesc";
import four from "../img/four.png";
import waw from "../img/waw.png"
import linki from "../img/linki3.jpg"
import health from "../img/health.jpg"
import money from "../img/ms.png"
import tdt from "../img/tdt.png"

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
                    img={linki}
                    link={'https://www.producthunt.com/posts/linki'}
                    github={'https://github.com/judy-n/linki'}
                />

                <ProjectDesc
                    title={'Linki'}
                    desc={'Linki is a cross-platform menu bar app that gives quick access to your recurring meeting links!'}
                    tags={['JavaScript','Electron']}
                />

            </Flex>


            <Accordion
                my={10}
                allowToggle
            borderStyle={'none'}
            >
                <AccordionItem
                    borderStyle={'none'}
                >
                    {({ isExpanded }) => (
                        <>
                    <Center>
                    <h2>
                        <AccordionButton
                        _hover={{ background: 'none'}}
                        p={0}
                        >
                            <Button
                                bg='#8B80F9'
                                fontFamily={'fontSans'}
                                fontWeight={500}
                                _hover={{bg: '#776bea'}}
                                _dark={{bg: '#3a6186',  color: 'white', _hover:{bg: '#2b547b'}}}
                                rightIcon={<AccordionIcon />} colorScheme='purple' variant='solid'>
                                {isExpanded ? 'Less Projects' : "More Projects"}
                            </Button>

                        </AccordionButton>
                    </h2>
                    </Center>
                    <AccordionPanel
                    p={0}>
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
                                img={health}
                                link={'https://teambch.herokuapp.com/'}
                                github={'https://github.com/JLambertazzo/healthkit'}
                            />

                            <Spacer m={'1rem'}/>
                            <ProjectDesc
                                title={'Health Kit'}
                                desc={"Health Kit is a form creation web app that my team started in collaboration with Boston Children's Hospital. The goal is to create a " +
                                    "solution for healthcare professionals to create or fill out forms that assess hospitals based on certain standards."}
                                tags={['React','Chakra UI','JavaScript', 'Node.js']}
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
                                img={tdt}
                                link={'https://todotrackerjs.herokuapp.com'}
                                github={'https://github.com/judy-n/TodoTracker'}
                            />

                            <ProjectDesc
                                title={'TodoTracker.js'}
                                desc={'A JavaScript library that displays productivity over time. It consists of a to-do list and' +
                                    ' a GitHub-like contribution graph.'}
                                tags={['JavaScript','HTML', 'CSS']}
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
                                noLink
                                img={money}
                                github={'https://github.com/judy-n/MoneySaver'}
                            />

                            <ProjectDesc
                                title={'Money Saver'}
                                desc={'An iOS/Android app made to help users limit their spending. It keeps track of savings on would-be purchases.'}
                                tags={['JavaScript','React Native']}
                            />

                        </Flex>
                    </AccordionPanel>
                        </>
                        )}
                </AccordionItem>
            </Accordion>
        </Box>
    )

} export default Projects
