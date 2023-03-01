import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/features/adminSlice';
export default function MenuPopupState() {
    const dispatch = useDispatch()
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
        <IconButton {...bindTrigger(popupState)}>
            <AccountCircleIcon sx={{color:'#1977FC', fontweight:'bold'}}/>
        </IconButton>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={()=>dispatch(logOut())}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}