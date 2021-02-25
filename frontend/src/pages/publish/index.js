import React, { Fragment } from 'react';
import { Container, Row, Tabs, Tab, Button, Col, Modal } from 'react-bootstrap';
import './publish.scss';

const Publish = () => {
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const [modalShow, setModalShow] = React.useState(false);
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
          />
        </Row>
        <br /> <br />
        <Tabs defaultActiveKey='profile' id='controlled-tab-example'>
          <Tab eventKey='home' title='DRAFTS'>
            <br />
            <Container className='d-flex'>
              <Row>
                <Col>
                  <h3>hello</h3>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of
                </Col>

                <Button className='edit'>EDIT ARTICLE →</Button>
              </Row>
            </Container>
            <br />
            <h6 style={{ marginLeft: '20px' }}>
              Last edited about 10 hours ago • 1 min read
            </h6>

            <hr style={{ marginLeft: '20px' }} />
          </Tab>
          <Tab
            style={{ marginLeft: '100px', marginRight: '100px' }}
            eventKey='profile'
            title='PUBLISHED'
          >
            <br />
            <h3>hello</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <hr />

            <h3>hello</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Tab>
        </Tabs>
      </Container>
      <br />
    </Fragment>
  );
};

export default Publish;
