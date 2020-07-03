import React, {useState, useEffect, useRef} from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import useCurrentWidth from '../utils/width';
import {CSSTransition} from 'react-transition-group';
import './../styles/header.scss';

import Modal from './Modal.js'

const Logo = () => {
    return (
        <div className="logo">
            over
            <div className="subLogo1">aligned</div>
            
        </div>
    )
};


export default function Header() {
    var windowWidth = useCurrentWidth();
    var windowHeight = null;
    var [expandedMenu, setExpandedMenu] = useState(false);
    const menu = useRef(0);
    const maxWidth = 750;

    const [openModal, setOpenModal] = useState(false);
    const [closeModal, setCloseModal] = useState(false);

    const MenuItems = () => {
        return (
            <>
                <div className="navBut" onClick={() => setOpenModal(true)}>about</div>
                <a href="/">projects</a>
                <a href="/">contact</a>
    
            </>
        )
    };

    useEffect(() => {
      if (expandedMenu) {
        document.addEventListener('mousedown', onClickMenu);
      }
    }, [expandedMenu]);

    useScrollPosition(({ currPos }) => {
        windowHeight = Math.abs(currPos.y);
        if (windowHeight >= 75) {
            setExpandedMenu(false);
        }
    });
  
    const onClickMenu = e => {
        document.removeEventListener('mousedown', onClickMenu);
        setExpandedMenu(false);
    };

    const Navigation = () => {
        if (windowWidth > maxWidth) {
            return <MenuItems />
        } else if (windowWidth <= maxWidth) {
            return (
            <div className="plus"
                onClick={() => setExpandedMenu(!expandedMenu)}
            >
                [{expandedMenu ? '-' : '+'}]
            </div>
            )
        }
    };

    function handleClose() {
        setOpenModal(false);
        setCloseModal(true);
        setTimeout(setCloseModal(false), 100);
    }

    return(
        <>
        <div className="headerNav">
            <Logo />

            <div className="nav">
                <Navigation />
            </div>
        </div>
        <CSSTransition
            in={expandedMenu && windowWidth <= maxWidth}
            classNames="menuEvents"
            timeout={300}
            unmountOnExit
        >
            <div className="verticalMenu" ref={menu}>
                <MenuItems />
            </div>
        </CSSTransition>

        <Modal
            showModal={openModal}
            closeModal={closeModal}
        >
        
            <button onClick={() => handleClose()}>close</button>
        </Modal>
        </>
    );
}
