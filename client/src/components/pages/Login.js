import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../actions/auth';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import useStyles from '../../utils/allStyles';

const Login = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const { email, password } = formData;

  useEffect(() => {
    document.title = 'TODO | Sign In';
  }, []);

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
      <h1 style={{color: 'black', textAlign:'center'}}>Login Here</h1>
        <form className={classes.form} onSubmit={(e) => onSubmit(e)}>
          <TextField variant='outlined' margin='normal' required fullWidth
            placeholder='Enter email address' name='email' autoComplete='email' autoFocus
            value={email} onChange={(e) => onChange(e)}
          />
          <TextField variant='outlined' margin='normal' required fullWidth name='password'
            placeholder='Enter Password' type='password' autoComplete='current-password'
            value={password} onChange={(e) => onChange(e)}
          />
          <Button type='submit' fullWidth  variant='contained' color='primary' className={classes.submit}>
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
