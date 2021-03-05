import React, { useReducer } from 'react';
import PublishContext from './publishContext';
import publishReducer from './publishReducer';
import axios from 'axios';
import { GET_DRAFTS, GET_PUBLISHES, ADD_DRAFT, ADD_PUBLISH } from '../types';

const PublishState = props => {
  const initialState = {
    drafts: [],
    publishes: [],
  };
  const [state, dispatch] = useReducer(publishReducer, initialState);

  // Get drafts
  const getDrafts = async () => {
    try {
      const res = await axios.get('/drafts');
      dispatch({ type: GET_DRAFTS, payload: res.data.drafts });
    } catch (err) {
      console.log(err);
    }
  };

  // Get publishes
  const getPublishes = async () => {
    try {
      const res = await axios.get('/publishes');
      dispatch({ type: GET_PUBLISHES, payload: res.data.publishes });
    } catch (err) {
      console.log(err);
    }
  };

  // Add draft
  const addDraft = async story => {
    dispatch({ type: ADD_DRAFT, payload: story });
  };

  // Add publish
  const addPublish = async story => {
    dispatch({ type: ADD_PUBLISH, payload: story });
  };

  return (
    <PublishContext.Provider
      value={{
        drafts: state.drafts,
        publishes: state.publishes,
        story: state.story,
        getDrafts,
        getPublishes,
        addDraft,
        addPublish,
      }}
    >
      {props.children}
    </PublishContext.Provider>
  );
};

export default PublishState;
