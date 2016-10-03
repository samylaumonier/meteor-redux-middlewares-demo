import React from 'react';

export const MainLayoutComponent = ({ children }) => (
  <div className="container">
    {children}
  </div>
);

MainLayoutComponent.propTypes = {
  children: React.PropTypes.node,
};
