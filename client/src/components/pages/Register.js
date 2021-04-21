import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../actions/auth';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import useStyles from '../../utils/allStyles';
import Login from './Login';



const Register = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const { name, email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    return  dispatch(register({ name, email, password }));
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Container component='main' maxWidth='md'>
      <div className={classes.root}>
          <CssBaseline />
      <h1 style={{color: 'black', textAlign:'center'}}>Register Here</h1>
        <form className={classes.form} onSubmit={(e) => onSubmit(e)} >
          <Grid container spacing={12}>
            <Grid item xs={12}>
              <TextField autoComplete='name' name='name' variant='outlined' fullWidth required placeholder='Enter your Name' autoFocus 
              value={name} onChange={(e) => onChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField variant='outlined' required fullWidth placeholder='Enter your email here' name='email' autoComplete='email' 
              value={email} onChange={(e) => onChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField variant='outlined' required fullWidth placeholder='Enter your password here' name='password' type='password' 
              value={password} onChange={(e) => onChange(e)}
              />
            </Grid>
          </Grid>
          <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
            Register
          </Button>
        </form>
      </div>
      <Login />
    </Container>
  );
};

export default Register;
