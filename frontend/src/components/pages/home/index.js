import React, { Fragment, useEffect, useContext } from 'react';
import { Container, Row, Button, Col, Tabs, Card, Tab, Image } from 'react-bootstrap';
import timeSince from '../../../utils/time';
import PublishContext from '../../../context/publish/publishContext';

const Home = () => {
  
  const publishContext = useContext(PublishContext);
  const { publishes, getPublishes, setCurrent } = publishContext;

  useEffect(() => {
    getPublishes();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
    <h1>Home</h1>
    <br/>
      {publishes.map(publish => (
        <Card key={publish.id} className='d-flex mb-4 border-0'>
        <Card.Body>
        <Image src={"https://picsum.photos/200?" + publish.id } />
          <Card.Title>
            <h3>{publish.title}</h3>
          </Card.Title>
          <Row>
            <Col>
              <p className='clamp'>{publish.body}</p>
            </Col>
            <Button className='edit' onClick={() => setCurrent(publish)}>
                        READ MORE →
                      </Button>
          </Row>
          <h6>Last edited about {timeSince(new Date(publish.updatedAt).getTime())} ago • 1 min read</h6>
          <hr />
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Home;
