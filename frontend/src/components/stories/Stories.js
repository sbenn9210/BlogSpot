import React, { Fragment, useEffect, useContext } from 'react';
import { Row, Tabs, Tab, Button, Col, Card } from 'react-bootstrap';
import PublishContext from '../../context/publish/publishContext';

const Stories = () => {
  const publishContext = useContext(PublishContext);
  const { drafts, publishes, getDrafts, getPublishes } = publishContext;

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

  
  return (
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
                  <Button className='edit' >EDIT ARTICLE →</Button>
                </div>
              </Row>
              <h6>Last edited about {draft.updatedAt} • 1 min read</h6>
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
                    <Button className='edit'>EDIT ARTICLE →</Button>
                  </div>
                </Row>
                <h6>Last edited about {publish.updatedAt} • 1 min read</h6>
                <hr />
              </Card>
            ))}
          </Fragment>
        </Tab>
      </Tabs>
    </Fragment>
  );
};

export default Stories;
