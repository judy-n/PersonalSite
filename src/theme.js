import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    fonts: {
        heading: "DM Sans, sans-serif",
        fontMono: "Source Code Pro",
        fontSans: "DM Sans, sans-serif"
    },
    config: {
        useSystemColorMode: true
    }
})
export default theme
