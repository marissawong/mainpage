import React, {useState} from 'react';
//import {CSSTransition} from 'react-transition-group';
import './../styles/accordion.scss';

export default function AccordionPanel({title, type, url, description, institution}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion" >
            <div className="acctitle"
                style={isOpen ? {backgroundColor: '#e0f1f1'} : null}
                 onClick={() => setIsOpen(!isOpen)}
            >
                {title}
            </div>
            {isOpen &&
            (<div className="accdescription"
                  onClick={() => setIsOpen(!isOpen)}>
                {description}
            </div>)
            }
            {type.toLowerCase().includes('article') && (
            <a href={url} target="_blank">
                <div className="additional" style={!isOpen ? {marginTop: '-5px'} : null}>
                GO TO ARTICLE
                </div>
            </a>
            )}
            <div className="accinstitution" onClick={() => setIsOpen(!isOpen)}>
            {institution}
            </div>
        </div>
    )
}