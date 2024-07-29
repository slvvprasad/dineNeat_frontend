// import * as React from 'react';
// import axios from 'axios';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import video from '../startvid.mp4';
// import Homenav from "./Homenav";
// import orange from '../homebannerinv.png';
// import BannerBackground from '../homebanner.png';
// import homechef from '../homechef.png';
// // import * as React from 'react';




// // function Copyright(props) {
// //   return (
// //     <Typography variant="body2" color="text.secondary" align="center" {...props}>
// //       {'Copyright © '}
// //       <Link color="inherit" href="https://mui.com/">
// //         Your Website
// //       </Link>{' '}
// //       {new Date().getFullYear()}
// //       {'.'}
// //     </Typography>
// //   );
// // }

// const theme = createTheme();

// export default function Register() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//     axios.post("http://localhost:8082/insert", {
//       fn: data.get('firstName'),
//       ln: data.get('lastName'),
//       email: data.get('email'),
//       password: data.get('password')
//     }).then((response) => {
//       console.log("Data sent");
    
//     })
//   };
  

  

//   return (
//     <div>
//     <Homenav/>
//     <div className="home-bannerImage-container"> 
// <img src={BannerBackground} alt="" />
// </div>
//       <div className="orangecus"> 
// <img src={orange} alt="" />
// </div>
// <div className="home-cheflight">
//     <img src={homechef} alt="" />
//     </div>
//     <div className="home-container">
//       {/* <video autoPlay loop muted id="video-background">
//         <source src={video} type="video/mp4" />
//       </video> */}
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 30,
//             marginBottom:20,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
import * as React from 'react';
import axios from 'axios';
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
import Navbar from '../components/Navbar';

const theme = createTheme();

export default function Register() {
  const [registrationStatus, setRegistrationStatus] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    axios.post("http://localhost:8082/insert", {
      fn: data.get('firstName'),
      ln: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password')
    }).then((response) => {
      console.log("Data sent");
      setRegistrationStatus("success");
    })
  };
  
  let statusMessage;
  if (registrationStatus === "success") {
    statusMessage = (
      <Box sx={{ bgcolor: 'green', color: 'white', p: 2 }}>
        Registration successful
      </Box>
    );
  }

  return (
    <div>
      <Navbar/><br></br><br></br><br></br><br></br>
      <div className="home-container">
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                // marginTop: 30,
                // marginBottom:20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {statusMessage}
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I have read & accept all the terms & conditions"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
    </div>
    </div>
  );
  // </Stack>
}