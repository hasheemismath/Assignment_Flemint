import React from 'react'
import { makeStyles, withStyles } from "@material-ui/core";

// withStyles & makeStyles

const style = {
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: '#ffffff'
    },
    sideItem:{
        display: 'flex',
        flexDirection: 'column',
        padding :'60px 0  0 100px',
    },
    text:{
        font: 'bold 15px Arial, sans-serif'
    },
    items:{
        display:'flex',
        flexDirection:'column',
        marginTop:'90px'
    }
}

const SideMenu = (props) => {
    const { classes } = props;
    return (
        <div className={classes.sideMenu}>

         <div className={classes.sideItem}>
             <div className={classes.text}>BlueTec</div>
             <div className={classes.items}>
                 <text>user</text>
                 <text>user</text>
                 <text>user</text>
                 <text>user</text>
                 <text>user</text>
             </div>
         </div>


        </div>
    )
}

export default withStyles(style)(SideMenu);
