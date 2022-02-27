import React, {useState} from "react";
import ReactDom from "react-dom";

const Modal = ({isShowing, hide}) => isShowing? ReactDom.createPortal(
<React.Fragment>
    <h1>Modal!!</h1>
</React.Fragment>

) : null;


    


export default Modal;