import React from 'react';
import { AppBar,  Grid, IconButton, makeStyles, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';

// Icons
import PermIdentityTwoToneIcon from '@material-ui/icons/PermIdentityTwoTone';

const useStyles = makeStyles((theme) => ({
    
    appBar: { 
      backgroundColor: 'white',
      boxShadow: 'unset',
      color: "#000",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    logo: {
      fontWeight: 800,
    },
    container: { 
        alignItems: 'center',
    },
    containerMenu: { 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        fontSize: 12,
    },
    link: { 
      color: '#000',
      textDecoration: 'none',
    },
    line: { 
      margin: '0 5px',
    },
  }));

const Header = () => { 
const classes = useStyles();
const preventDefault = (event) => event.preventDefault();


 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);



  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
   
  return (
    <AppBar position="static" className={classes.appBar}>
    <Toolbar disableGutters>
    <Grid container spacing={1} className={classes.container}>
    <Grid item sm={2}>
    <Typography className={classes.logo}>
        BlueTac
      </Typography>
    </Grid>

    <Grid item sm={10} className={classes.containerMenu} >
    <span>
     <Link to="/" onClick={preventDefault} className={classes.link}>
    {'Dashboard'}
  </Link>
  <span className={classes.line}>|</span>
  <Link to="/" onClick={preventDefault} className={classes.link}>
    {'Cases'}
  </Link>
     </span>

    
     <div>
     <b>asdf@gmail.com</b>
    <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <PermIdentityTwoToneIcon />
              </IconButton>
     </div>
    <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
    </Grid>
     
   
      </Grid>
    </Toolbar>
  </AppBar>
  )
}

export default Header;