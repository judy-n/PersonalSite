import React, {useState} from 'react';
import {FaAngleUp} from 'react-icons/fa';
import {Button} from '@chakra-ui/react';
const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
        }
        else if (scrolled <= 300){
            setVisible(false)
        }
    };

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        window.location.href='#'
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <Button borderRadius={'50%'}
                w={'3rem'}
                h={'3rem'}
                onClick={scrollToTop}
        style={{position: 'fixed',
            left:'50%',
            bottom: '20px',
            display: visible ? 'inline' : 'none'}}>
            <FaAngleUp />
        </Button>
    );
}

export default ScrollButton;
