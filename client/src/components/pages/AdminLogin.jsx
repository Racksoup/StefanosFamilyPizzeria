import React, { useState } from 'react';
import '../../styles/adminLogin.scss';
import { login } from '../../actions/auth';
import Header from '../Header';
import ItalianButton from '../italianButton';

import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AdminLogin = ({ login, user }) => {
  const [formInput, setFormInput] = useState({
    username: '',
    password: '',
  });
  const { username, password } = formInput;

  const onChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  if (user) {
    return <Navigate to='/admin-dashboard' />;
  }

  return (
    <div className='adminLogin'>
      <Header />
      <div className='adminLoginForm'>
        <div className='adminLoginLabel LargeBlack'>Login</div>
        <input
          className='adminLoginInput'
          placeholder='Username'
          autoComplete='false'
          name='username'
          onChange={(e) => onChange(e)}
        />
        <input
          className='adminLoginInput'
          placeholder='Password'
          autoComplete='false'
          type='password'
          name='password'
          onChange={(e) => onChange(e)}
        />
      </div>
      <div onClick={(e) => onSubmit(e)}>
        <ItalianButton text='Enter' width='320px' />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { login })(AdminLogin);
