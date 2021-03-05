import React, { Fragment, useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import MyVerticallyCenteredModal from '../../modal/index';
import Stories from '../../stories/Stories';
import './publish.scss';

const Publish = () => {
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => setModalShow(false);

  const onStoryFormSubmit = e => {
    if (
      e.target[0].value !== '' ||
      e.nativeEvent.submitter.name === 'cancelButton'
    ) {
      handleClose();
    }
  };

  return (
    <Fragment>
      <Container>
        <Row className='title'>
          <h1 className='yourArticle'> Your Articles </h1>
          <div>
            <Button className='write' onClick={() => setModalShow(true)}>
              WRITE AN ARTICLE
            </Button>
          </div>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            onSubmit={onStoryFormSubmit}
          />
        </Row>
        <br /> <br />
        <Stories />
      </Container>
      <br />
    </Fragment>
  );
};

export default Publish;
