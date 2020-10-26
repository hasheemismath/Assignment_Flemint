import React from 'react';
import { makeStyles} from "@material-ui/core";
import { Link } from 'react-router-dom';

import ArrowDropUpRoundedIcon from '@material-ui/icons/ArrowDropUpRounded';

const useStyles = makeStyles((theme) => ({

    sideBarItem: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 15,
    },
    icon: {
        marginRight: 5,
    },
    link: {
        color: '#000',
        textDecoration: 'none',
        fontSize: 11,
    },
    roundIcon:{
        borderRadius: '25px',
        backgroundColor:"#DFCE97",
        width:'18px',
        height:'18px',
        margin:'0 5px 0 1px'
    }

}));

const SideBar = ({
    name
}) => {
    const classes = useStyles();

    return (
        <div className={classes.sideBarItem}>
            <div className={classes.roundIcon}>
                <ArrowDropUpRoundedIcon style={{ color: '#bc796e', fontSize:'20px' }}  className={classes.icon}/>
            </div>
            <Link to="/" className={classes.link}>
                {name}
            </Link>
        </div>
    )
}

export default SideBar;