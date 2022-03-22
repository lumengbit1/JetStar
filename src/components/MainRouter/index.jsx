import React from 'react';
import PropTypes from 'prop-types';
import { Route, Outlet } from 'react-router-dom';
import HomePage from '../Home';
import { assign } from 'lodash';
import {
  MainBodyContainer,
  Root,
} from './MainRouter.styles';

const MainRouter = () => {
  return (
    <Root>
      <MainBodyContainer>
        <div>Header</div>
        <Outlet />
      </MainBodyContainer>
    </Root>
  );
};

MainRouter.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.func,
  ]),
};

MainRouter.defaultProps = {
  component: null,
};

export default MainRouter;
