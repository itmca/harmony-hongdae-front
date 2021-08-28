import React, { Component } from 'react';
import MTable from './components/MTable'
import TextButtons from './components/TextButtons'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './App.css';



function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography component="div" style={{ height: '100vh' }}>
          <TextButtons/>
          <MTable/>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
    
export default App;