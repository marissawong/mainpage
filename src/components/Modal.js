import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {CSSTransition} from 'react-transition-group';
import './../styles/modal.scss';

const Modal = ({children, showModal, closeModal}) => {
    
    return (
        <CSSTransition
            in={showModal && !closeModal}
            classNames="modalEvents"
            timeout={100}
            unmountOnExit
        >
        <div className="modal">
            
            <div className="dialog">

                {children}

            </div>
            
        </div>
        </CSSTransition>
    );

}

export default Modal;