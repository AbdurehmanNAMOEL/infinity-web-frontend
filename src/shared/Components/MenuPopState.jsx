import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { IconButton } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
export default function MenuPopupState({handleLogOut,children}) {
    const navigate = useNavigate()
  return (
    <PopupState 
      sx={{width:'300px',position:'relative'}} 
      variant="popover" 
      popupId="demo-popup-menu"
      >
      {(popupState) => (
       <Box sx={{position:'absolute',width:'200px'}}>
        <IconButton {...bindTrigger(popupState)} sx={{borderRadius:'0px'}}>
           {children}
        </IconButton>
          <Menu sx={{width:'400px',position:'absolute',zIndex:8000}} {...bindMenu(popupState)}>
             <MenuItem onClick={()=>navigate('/profile')}>My Profile</MenuItem>
             <MenuItem onClick={()=>navigate('/myWallet')}>My Wallet</MenuItem>
             <MenuItem onClick={()=>navigate('/mySurveyList')}>My Survey</MenuItem>
             <MenuItem onClick={handleLogOut}>Logout</MenuItem>           
          </Menu>
       </Box>
      )}
    </PopupState>
  );
}