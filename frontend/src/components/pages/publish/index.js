import React, { Fragment, useState, useEffect, useContext } from 'react';
import { Container, Row, Button, Col, Tabs, Card, Tab } from 'react-bootstrap';
import MyVerticallyCenteredModal from '../../modal/index';
import PublishContext from '../../../context/publish/publishContext';
import timeSince from '../../../utils/time'
import './publish.scss';

const Publish = () => {
  const [modalShow, setModalShow] = useState(false);
  const publishContext = useContext(PublishContext);
  const { drafts, publishes, getDrafts, getPublishes, setCurrent, clearCurrent} = publishContext;

  useEffect(() => {
    getDrafts();
    getPublishes();
    // eslint-disable-next-line
  }, []);

  if (drafts !== null && drafts.length === 0) {
    return (
      <h1 className='text-center'>
        <em>loading...</em>
      </h1>
    );
  }

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
            onHide={() => {setModalShow(false); clearCurrent()}}
            onSubmit={onStoryFormSubmit}
          />
        </Row>
        <br /> <br />
        <Fragment>
          <Tabs defaultActiveKey='drafts' id='controlled-tab-example'>
            <Tab eventKey='drafts' title='DRAFTS'>
              <br />
              {drafts.map(draft => (
                <Card key={draft.id} className='d-flex mb-4 border-0'>
                  <Card.Title>
                    <h3>{draft.title}</h3>
                  </Card.Title>
                  <Row>
                    <Col>
                      <p className='clamp'>{draft.body}</p>
                    </Col>
                    <div className='d-flex justify-content-end  '>
                      <Button
                        className='edit'
                        onClick={() => {setCurrent(draft); setModalShow(true); }}
                      >
                        EDIT ARTICLE →
                      </Button>
                    </div>
                  </Row>
                  <h6>Last edited about {timeSince(new Date(draft.updatedAt).getTime())} ago • 1 min read</h6>
                  <hr />
                </Card>
              ))}
            </Tab>

            <Tab eventKey='published' title='PUBLISHED'>
              <br />
              <Fragment>
                {publishes.map(publish => (
                  <Card key={publish.id} className='d-flex mb-4 border-0'>
                    <Card.Title>
                      <h3>{publish.title}</h3>
                    </Card.Title>
                    <Row>
                      <Col>
                        <p className='clamp'>{publish.body}</p>
                      </Col>
                      <div className='d-flex justify-content-end  '>
                        <Button className='edit' onClick={() => {setCurrent(publish); setModalShow(true)}}>EDIT ARTICLE →</Button>
                      </div>
                    </Row>
                    <h6>Last edited about {timeSince(new Date(publish.updatedAt).getTime())} ago • 1 min read</h6>
                    <hr />
                  </Card>
                ))}
              </Fragment>
            </Tab>
          </Tabs>
        </Fragment>
      </Container>
      <br />
    </Fragment>
  );
};

export default Publish;
