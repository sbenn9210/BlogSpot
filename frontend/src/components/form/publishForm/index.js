import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import PublishContext from '../../../context/publish/publishContext';

const PublishForm = () => {
  const publishContext = useContext(PublishContext);
  const {
    addDraft,
    addPublish,
    current,
    clearCurrent,
    getPublishes,
    getDrafts,
  } = publishContext;
  const { handleSubmit, register, setError, errors } = useForm();

  let buttonName = null;

  const handleClick = e => {
    buttonName = e.target.name;
  };

  const handleStory = async data => {
    try {
      if (buttonName === 'publishButton') {
        if (current.id === '') {
          data.published = true;
          const res = await axios.post('/publish', data);
          if (res.data.story) {
            addPublish(res.data.story);
          }
          if (res.data.msg === 'Please enter title') {
            setError('title', { type: 'server', message: res.data.msg });
          }
        } else {
          data.id = current.id;
          data.published = true;
          const res = await axios.put('/publish', data);
          if (res.data.story) {
            getPublishes();
            getDrafts();
            clearCurrent();
          }
          if (res.data.msg === 'Please enter title') {
            setError('title', { type: 'server', message: res.data.msg });
          }
        }
      } else if (buttonName === 'saveButton') {
        if (current.id === '') {
          const res = await axios.post('/publish', data);
          if (res.data.story) {
            addDraft(res.data.story);
          }
          if (res.data.msg === 'Please enter title') {
            setError('title', { type: 'server', message: res.data.msg });
          }
        } else {
          data.id = current.id;
          data.published = false;
          const res = await axios.put('/publish', data);
          if (res.data.story) {
            getPublishes();
            getDrafts();
            clearCurrent();
          }
          if (res.data.msg === 'Please enter title') {
            setError('title', { type: 'server', message: res.data.msg });
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className='mx-auto' onSubmit={handleSubmit(handleStory)}>
      <Form.Group>
        <Form.Control
          type='text'
          placeholder='Title Article Here'
          name='title'
          ref={register()}
          defaultValue={current.title}
          className={`form-control ${errors.title ? 'is-invalid' : ''}`}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.title && errors.title.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Control
          as='textarea'
          rows={15}
          placeholder='Write Your Story'
          name='body'
          ref={register()}
          defaultValue={current.body}
        />
      </Form.Group>
      <Button
        variant='outline-dark'
        type='submit'
        name='cancelButton'
        onClick={handleClick}
        value={`${buttonName}`}
      >
        Cancel
      </Button>

      <Button
        variant='outline-primary'
        type='submit'
        name='saveButton'
        onClick={handleClick}
      >
        Save as Draft
      </Button>
      <Button
        variant='primary'
        type='submit'
        name='publishButton'
        onClick={handleClick}
      >
        Publish
      </Button>
    </Form>
  );
};

export default PublishForm;
