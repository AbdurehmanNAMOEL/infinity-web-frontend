import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/features/adminSlice';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
export default function MenuPopupState({handleLogOut,children}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  return (
    <PopupState sx={{zIndex:8000,width:'300px',position:'absolute'}} variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
       <Box sx={{position:'absolute',width:'200px'}}>
        <IconButton {...bindTrigger(popupState)} sx={{borderRadius:'0px'}}>
           {children}
        </IconButton>
          <Menu sx={{width:'400px',position:'absolute'}} {...bindMenu(popupState)}>
            <MenuItem onClick={()=>dispatch(logOut())}></MenuItem>
             <MenuItem onClick={handleLogOut}>Logout</MenuItem>
             <MenuItem onClick={()=>navigate('/profile')}>My Profile</MenuItem>
              <MenuItem onClick={()=>navigate('/myWallet')}>My Wallet</MenuItem>
          </Menu>
       </Box>
      )}
    </PopupState>
  );
}