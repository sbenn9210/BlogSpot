import React from 'react';
import { Modal } from 'react-bootstrap';
import PublishForm from '../form/publishForm/index';
import './index.scss';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      backdrop='static'
    >
      <Modal.Header className='header' closeButton />
      <Modal.Body>
        <PublishForm />
      </Modal.Body>
      <Modal.Footer />
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
