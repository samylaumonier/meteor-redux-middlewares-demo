import React from 'react';
import PropTypes from 'prop-types';

export const MainLayoutComponent = ({ children }) => (
  <div className="container">
    {children}
  </div>
);

MainLayoutComponent.propTypes = {
  children: PropTypes.node,
};

MainLayoutComponent.defaultProps = {
  children: null,
};
