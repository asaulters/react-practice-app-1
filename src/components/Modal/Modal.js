import React, {useState} from "react";
import ReactDom from "react-dom";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function App(props) {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () =>{
        setIsOpen(false)
    }

    return(
        <div>
            <Modal
                isOpen={props.openModal}
                onClose={closeModal}
            />
            <h2>Modal JS</h2>
        </div>
    )

}

