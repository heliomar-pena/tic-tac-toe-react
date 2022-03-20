import "./Modal.css";
import { hide } from '../../utils/game.js';
import ModalLayout from './Modal.layout';
import { useEffect, useState } from "react";

const Modal = ({ children, isOpen, setIsOpen, timeout = 3000 }) => {
    const [animation, setAnimation] = useState('');
    
    useEffect(() => {
        if(isOpen) {
            setTimeout(() => {
                hide(200, setAnimation, setIsOpen)
            }, timeout);
        }
    }, [isOpen, setIsOpen, timeout]);

    return (
        isOpen && (
            <ModalLayout animation={animation}>
                {children}
            </ModalLayout>       
        )
    );
}

export default Modal;