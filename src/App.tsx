import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Link from '/next/Link';

function App() {
  return (
    <React.Fragment>
   <Button variant = "contained" > Hello World </Button>
   <Link href="/">
     <a>Home</a>
   </Link>
   </React.Fragment>
      
  );
}

export default App;
