import {Divider, Grid, IconButton, makeStyles } from '@material-ui/core';
import React from 'react';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
const useStyles = makeStyles((theme) => ({

    buttonNext:{
        textAlign: 'right',
    },
    line: {
        margin: '0 5px',
    },
    divider: {
        margin: '15px 0',
    },
    tableItem: {
        marginBottom: 15,
        fontSize: 11,

    },
    delete: {
        marginLeft: 'auto',
        textAlign: 'right',
        padding: 0,
    }
}));


const Table = () => {
    const classes = useStyles();
    return (
        <div>
            <header>
                <Grid container>
                    <Grid item xs={6} md={4}>
                        <small>
                            <b>Title</b>
                            <span className={classes.line}>|</span>
                            <b>Company</b>
                        </small>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <small>
                            <b>Duration</b>
                        </small>
                    </Grid>
                </Grid>
            </header>
            <Divider className={classes.divider} />
            <section>
                <Grid container>
                    <Grid item xs={5} md={4}>
                        <div className={classes.tableItem}>
                            Software Engineer
                            <span className={classes.line}>|</span>
                            BlueTac
                        </div>
                        <div className={classes.tableItem}>
                            Software Engineer
                            <span className={classes.line}>|</span>
                            BlueTac
                        </div>
                    </Grid>
                    <Grid item xs={5} md={7}>
                        <div className={classes.tableItem}>
                            May 2005 - May 2007
                        </div>
                        <div className={classes.tableItem}>
                            May 2005 - May 2007
                        </div>
                    </Grid>
                    <Grid item xs={1}>
                        <div className={classes.tableItem}>
                            <div className={classes.buttonNext}>
                                <IconButton aria-label="delete" className={classes.delete}>
                                    <DeleteOutlineIcon fontSize="small" />
                                </IconButton>
                            </div>
                        </div>
                        <div className={classes.tableItem}>
                            <div className={classes.buttonNext}>
                                <IconButton aria-label="delete" className={classes.delete}>
                                    <DeleteOutlineIcon fontSize="small" />
                                </IconButton>
                            </div>
                        </div>

                    </Grid>
                </Grid>
            </section>
        </div>
    )
}

export default Table;