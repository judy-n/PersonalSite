import React from 'react';
import {Badge, Box, Flex, HStack, Image, ScaleFade, Spacer, Text, VStack, Stack, Center} from "@chakra-ui/react";
import logo from '../img/big.png'

function Footer() {

    return (<Box bg={'gray.50'} p={5}
        _dark={{bgColor:'gray.700'}}>
            <Center>
                <Image
                    src={logo}
                    boxSize={25}
                />
                <Text
                    _dark={{color: 'white'}}
                >
                    © 2024 Judy Naamani
                </Text>
            </Center>
        </Box>

    )
} export default Footer;
