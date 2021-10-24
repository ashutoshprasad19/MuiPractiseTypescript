import React from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';

function App() {
  return (
    <React.Fragment>
   <Button variant = "contained" > Hello World </Button>
   <Link href="/about">
     <a>About</a>
   </Link>
   </React.Fragment>
      
  );
}

export default App;
