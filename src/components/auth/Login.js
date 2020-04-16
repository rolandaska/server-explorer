import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth-action';
import Error from './../ui/Error';

import './login.scss';

const Login = ({ login, isAuthenticated, error }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const { username, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(username, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  const errorComponent = error && <Error message={error} />;

  return (
    <div className="login-page flex-center">
      <div data-testid="form-sign-in" className="login-form flex-column flex-center">
        <h1>Sign In</h1>
        <div className="mt-1 mb-1">
          {error ? errorComponent : <p>Please enter your name and password</p>}
        </div>
        <form className="flex-column" onSubmit={e => onSubmit(e)}>
          <div className="form-group mt-1">
            <input
              data-testid="username"
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className="form-group mt-1">
            <input
              data-testid="password"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
              minLength="5"
            />
          </div>
          <input
            data-testid="btn-sign-in"
            type="submit"
            className="btn-primary mt-2"
            value="SIGN IN" />
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
});

export default connect(mapStateToProps, { login })(Login);
