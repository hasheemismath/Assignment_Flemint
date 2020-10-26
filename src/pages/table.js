import {Divider, Grid, IconButton, makeStyles } from '@material-ui/core';
import React, {useEffect, useState} from 'react';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {getData} from "../apiReq/helper";
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
    const [data,setData] = useState([]);
    const [error, setError] = useState(false);

    const classes = useStyles();

    const loadAllData = ()=>{
        getData().then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setData(data.Employments);
            }
        });
    }
    useEffect(() => {
        loadAllData();
    }, []);

    const deleteItem = i=>{
        console.log(i)
    }
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
                {data.map((getData,index)=>{
                    return (
                        <Grid container>
                            <Grid item xs={5} md={4}>
                                <div className={classes.tableItem}>
                                    {getData.title}
                                    <span className={classes.line}>|</span>
                                    {getData.company}
                                </div>
                            </Grid>
                            <Grid item xs={5} md={7}>
                                <div className={classes.tableItem}>
                                    {getData.period}
                                </div>
                            </Grid>
                            <Grid item xs={1}>
                                <div className={classes.tableItem}>
                                    <div className={classes.buttonNext}>
                                        <IconButton aria-label="delete" className={classes.delete}>
                                            <DeleteOutlineIcon fontSize="small" onClick={()=>deleteItem(index)} />
                                        </IconButton>
                                    </div>
                                </div>

                            </Grid>
                        </Grid>
                    )
                })}
            </section>
        </div>
    )
}

export default Table;