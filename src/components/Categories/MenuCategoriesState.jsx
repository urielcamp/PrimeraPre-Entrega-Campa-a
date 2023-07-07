import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


import './Categories.css'

import { Link  } from "react-router-dom";

const MenuCategoriesState = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
    setAnchorEl(null);
};

    return (
    <div>
        <Button style={{color:"black"}}
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        >
        Estado
        </Button>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        >
        <MenuItem onClick={handleClose}><Link className='linkCat' to="/state/Nuevo">Nuevo</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link className='linkCat' to="/state/Usado">Usado</Link></MenuItem>
        </Menu>
    </div>
);
}

export default MenuCategoriesState;