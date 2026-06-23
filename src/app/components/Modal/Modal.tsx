import React from 'react';
import styles from './Modal.module.css'

interface ModalProps{
   hideModalHandler:()=>void;
   children: React.ReactNode;
}

function Modal(props: ModalProps) {
  return (
    <>
      <div className= {styles.backdrop} onClick={props.hideModalHandler}>
      <dialog open className={styles.modal}>{props.children}</dialog>
      </div>
    </>
  );
}

export default Modal;
