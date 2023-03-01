import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

 const LoadingAnimation=()=> {
  return (
    <Box sx={{display: 'flex',position:'absolute'}}>
      <CircularProgress />
    </Box>
  );
}

export default LoadingAnimation