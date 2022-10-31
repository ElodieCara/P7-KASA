import React, { useState, useRef } from 'react';
import Icon from "../assets/arrow-top.png"


function Collapse(props) {
    const [visible, setVisible] = useState(false);

    const contentRef = useRef();

    return (

        <div className='collapse'>
            <button className='collapse__toggle' onClick={() => setVisible(!visible)}>
                {props.label}
                <img
                    className="collapse__toggle__icon"
                    src={Icon}
                    alt="Icon flèche"
                    style={visible ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg' }} />
            </button>
            <div
                className="collapse__content"
                ref={contentRef}
                style={visible ? { height: contentRef.current.scrollHeight + "px", } : { height: "0px" }}>
                <div className="collapse__content__text">{props.children}</div>
            </div>
        </div>
    );
}

export default Collapse;