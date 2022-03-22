import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { useImmerReducer } from 'use-immer';
import reducer from './reducers/reducer';

export const initialState = {
  isPlaced: false,
  coordinate: null,
  facing: { x: 0, y: 1 },
  rotateDeg: 0,
  commands: [],
  errorMessage: '',
};

export const RootContext = createContext({});

const App = (props) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  return (
    <div className="App">
      <RootContext.Provider value={{ state, dispatch }}>
        {props.children}
      </RootContext.Provider>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
