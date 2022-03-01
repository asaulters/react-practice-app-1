import React, {useState} from "react";
import ReactDom from "react-dom";
// import Modal from "react-modal";

import classes from './Modal.modules.css';

// Modal.setAppElement("#root");

// export default function App(props) {

const Modal = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState()

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = (props) =>{
        setIsOpen(false)
        setError(false)
    }

    return(
        <div>
            <div className={classes.backdrop} onClick={props.onConfirm}/>
        
            <section className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <button onClick={props.onConfirm}>OK</button>
                </footer>
            </section>
        </div>
    )

}

export default Modal;