import React from 'react'
import { Paper, Card, Typography, makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fdfdff'
    },
    pageHeader:{
        padding:theme.spacing(4),
        display:'flex',
        marginBottom:theme.spacing(2)
    },
    pageIcon:{
        padding:theme.spacing(2),
        color:'#867e71'
    },
    pageTitle:{
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-subtitle2':{
            opacity:'1'
        }
    },
    user:{
        paddingLeft:theme.spacing(80),
        display:'flex'
    }
}))

export default function PageHeader(props) {

    const classes = useStyles();
    const { title, subTitle, icon } = props;
    return (
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.pageHeader}>
                {/*<Card className={classes.pageIcon}>*/}
                {/*    {icon}*/}
                {/*</Card>*/}
                <div className={classes.pageTitle}>
                    {/*<Typography*/}
                    {/*    variant="h6"*/}
                    {/*    component="div">*/}
                    {/*    {title}</Typography>*/}
                    <Typography
                        variant="subtitle2"
                        component="div">
                        {subTitle}</Typography>
                </div>
                <div className={classes.user}>
                    <h4>User@gmail.com {icon}</h4>
                </div>
            </div>
        </Paper>
    )
}
