//import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState, useEffect } from "react";
import Cookies from 'universal-cookie';





function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://r.mtdv.me/ronaldvandevelde">
      Ronald van de Velde
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  //const {link2, setLink2} = useContext(AppContext);


  const [moetRedirecten, setMoetRedirecten] = useState(false);

  // Functie om de redirect te activeren
  const activeerRedirect = () => {
    setMoetRedirecten(true);
  };
  {moetRedirecten && <redirect to="/dashboard" />}

  const cookies = new Cookies();
  let time = new Date().toLocaleTimeString();

  if (cookies.get('data')) {
    activeerRedirect();
    //window.location.href = "/dashboard";
  }
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(JSON.stringify({
      email: data.get('email'),
      password: data.get('password'),
      device_name: time,
    }));
    fetch('http://127.0.0.1:8000/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/login',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.get('email'),
        password: data.get('password'),
        device_name: time,
      })
    }).then((response) => response.json())
    .then((data) => {
      if (data.error) {
        alert(data.error);
        return;
      }else{
        // zet de gegevens in een cookie en surrt je na het dashboard
        cookies.set('data', data, { path: '/' });
        window.location.href = "/dashboard";
      }
    }).catch((error) => {
      alert("Kan niet verbinden met de server");
      console.error('Error:', error);
    });
      

    
  };

  return (
    <ThemeProvider theme={defaultTheme}>

      <Container  component="main" maxWidth="xs" className='bg-gray-200'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                
              </Grid>
              <Grid item>
                <Link href="/Register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
