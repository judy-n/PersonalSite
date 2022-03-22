import React, {useState} from 'react';
import {Button, HStack, Image, Link, VStack} from "@chakra-ui/react";
import {FaExternalLinkAlt, FaGithub} from "react-icons/fa";

function ProjectCard(props) {

    return (
        <VStack padding={5}
                boxShadow={'rgba(0, 0, 0, 0.1) 0px 0px 0px 0px,rgba(0, 0, 0, 0.2) 0px 5px 10px,rgba(0, 0, 0, 0.1) 0px 15px 40px'}
                borderRadius={20}
                alignItems={['flex-start']}
                _light={{bgColor:'white', boxShadow: 'none', borderWidth:'1px', shadow:'lg'}}
                bgColor={'gray.700'}
                flexShrink={0}
                w={'fit-content'}
                mr={'2rem'}
        >

            <Image
                src={props.img}
                w={['200px', '250px']}
                borderRadius={15}
                objectFit='cover'
            />

            <HStack paddingTop={2}>
                <Link
                    target={'_blank'}
                    href={props.link}>
                <Button
                    leftIcon={<FaExternalLinkAlt />}>
                    Link
                </Button>
                </Link>
                <Link
                    target={'_blank'}
                    href={props.github}>
                <Button>
                    <FaGithub/>
                </Button>
                </Link>
            </HStack>
        </VStack>
    )



} export default ProjectCard;
