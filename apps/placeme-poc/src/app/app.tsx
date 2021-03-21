import React, {useEffect, useState} from 'react';

import styled from 'styled-components';

import {AppHeader, firebaseClient} from "@placeme-poc/common";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import firebase from "firebase";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const StyledApp = styled.div`
  font-family: sans-serif;
  min-width: 300px;
  max-width: 600px;
  margin: 50px auto;
`;

export function App() {
  const [isSignIn, setSignIn] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const classes = useStyles();
  const {email, password} = formData;

  const onFormValueChange = name => event => setFormData({
    ...formData,
    [name]: event.target.value,
  });

  useEffect(() => {
    // TODO: Do odkomentowania po osadzeniu na serwerze z reverse proxy.
    // firebaseClient.auth().signOut().then((response) => {
    //   console.log('Logging out', response);
    // })
  }, []);

  const onSignIn = async () => {
    try {
      await firebaseClient.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      const authResponse = await firebaseClient.auth().signInWithEmailAndPassword(email, password);
      console.log('Auth response from form component: ', authResponse);
      afterSignIn();
    } catch (error) {
      const {code, message} = error;
      alert(`Error! Code: ${code}. Message: ${message}`);
    }
  }

  const onSignUp = async () => {
    try {
      await firebaseClient.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      const authResponse = await firebaseClient.auth().createUserWithEmailAndPassword(email, password)
      console.log('Auth response from form component: ', authResponse);
      afterSignIn();
    } catch (error) {
      const {code, message} = error;
      alert(`Error! Code: ${code}. Message: ${message}`);
    }
  }

  const afterSignIn = () => {
    // Tutaj jakiś redirect do miejsca, gdzie ma przekierować po zalogowaniu
    // window.location.replace(env.AUTHORIZED_APP_1_URL);
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    if (isSignIn) {
      await onSignIn();
    } else {
      await onSignUp();
    }
  }

  return (
    <StyledApp>
      <AppHeader/>
      <CssBaseline/>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignIn ? 'Sign in' : 'Sign up'}
        </Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={onFormValueChange('email')}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={onFormValueChange('password')}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignIn ? 'Sign in' : 'Sign up'}
          </Button>
          <Grid container>
            <Grid item>
              <Link variant="body2" onClick={() => setSignIn(!isSignIn)}>
                {isSignIn ? "Don't have an account? Sign Up" : "You have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </StyledApp>
  );
}

export default App;
