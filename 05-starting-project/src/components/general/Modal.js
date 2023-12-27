import React from 'react'
import ReactDOM from 'react-dom'
import ModalStyles from '../styles/Modal.module.css'

const ModalOverlay = (props) => {
    return (<div className={ModalStyles.backdrop} onClick={props.onHide} />)
}
const ModalComponent = (props) => {
    return (<div className={ModalStyles.modal}>
        <div className={ModalStyles.content}>{props.children}</div>
    </div>)
}
const setPortal = document.getElementById('root-modal')

const Modal = (props) => {
    return (<React.Fragment>
        {ReactDOM.createPortal(<ModalOverlay onHide={props.hideCart} />, setPortal)}
        {ReactDOM.createPortal(<ModalComponent>{props.children}</ModalComponent>, setPortal)}
        {/* <ModalOverlay />
        <ModalComponent>{props.children}</ModalComponent> */}
    </React.Fragment>)
}

export default Modal;