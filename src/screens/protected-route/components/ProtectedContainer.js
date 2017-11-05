import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import userContext from '../../../modules/userContext';

const { isAuthenticated } = userContext.selectors;

const ProtectedContainer = ({ isAuthenticated, location }) => (
  <div>
    {!isAuthenticated ? (
      <Redirect
        to={{
          // Not authenticated so redirect to /sign-in
          pathname: '/sign-in',
          state: { from: location }
        }}
      />
    ) : (
      // Authenticated so show content
      <h1>Protected Page</h1>
    )}
  </div>
);

const mapStateToProps = state => ({
  isAuthenticated: !!isAuthenticated(state)
});

export default connect(mapStateToProps)(ProtectedContainer);
