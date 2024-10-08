import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar(props:any) {
    const navigate = useNavigate();

 const handleRedirect = () => { 
      navigate(`/home`);
  };

  return (
    <Box sx={{ flexGrow: 1 }} style={{marginBottom:25}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props?.props?.title}
          </Typography>
          <Button color="inherit" onClick={()=>{handleRedirect()}}>Home</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}