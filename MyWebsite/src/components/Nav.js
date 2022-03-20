import {ReactNode, useEffect} from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    useColorMode,
    Stack, color,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

const Links = {
    home: {title: "Home", link: '#'},
    about: {title: "About", link: '#about'},
    projects: {title: "Projects", link: '#projects'}
}

const NavLink = ({ children }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={children.link}>
        {children.title}
    </Link>
);

export default function Nav(props) {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    console.log("nav color mode", colorMode)

    useEffect(() => {
        props.updateColorMode(colorMode);
    }, [colorMode])

    return (
        <>
            <Box boxShadow='sm' marginX={'auto'} marginY={'1rem'} right={0} left={0} bg={useColorModeValue('gray.100', 'gray.900')} width={'95%'} borderRadius={20} position={'fixed'}

                 zIndex={5} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'} >
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Object.entries(Links).map(([link, value]) => {
                                return (<NavLink key={value.title}>{value}</NavLink>)
                                })}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'} justifyItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>
                        </Stack>
                            <Menu>
                            <MenuList>
                                <MenuItem>Link 1</MenuItem>
                                <MenuItem>Link 2</MenuItem>
                                <MenuDivider />
                                <MenuItem>Link 3</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Object.keys(Links).map((link) => {
                                return (<NavLink key={link}>{link.title}</NavLink>)
                            })}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}
