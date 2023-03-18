import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/features/adminSlice';
export default function MenuPopupState({handleLogOut,children}) {
    const dispatch = useDispatch()
  return (
    <PopupState sx={{zIndex:8000,width:'300px'}} variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
        <IconButton {...bindTrigger(popupState)}>
           {children}
        </IconButton>
          <Menu sx={{width:'400px',position:'absolute'}} {...bindMenu(popupState)}>
            <MenuItem onClick={()=>dispatch(logOut())}></MenuItem>
             <MenuItem onClick={handleLogOut}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}