import { Backdrop, Button, Checkbox, Divider, Fade, FormControl, FormControlLabel, Grid, IconButton, InputBase,  makeStyles, Modal, Select, TextareaAutosize, TextField, Typography, withStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import SideBar from "../sideBar";
import Table from "../table";
const useStyles = makeStyles((theme) => ({

    containerMenu: { 
        backgroundColor: '#e4e4e4',
        padding: 20,
    },
    link: { 
      color: '#000',
      textDecoration: 'none',
      fontSize: 11,
    },
    linkPrimary: { 
        color: '#44c7ee',
        textDecoration: 'none',
        fontSize: 11,
      },
    sideBarItem: { 
        display: 'flex',
        alignItems: 'center',
        marginBottom: 15,
    },
    icon: {
     marginRight: 5,
    },
    button: {
        color:'#55D5FF',
        backgroundColor: 'white',
        textTransform: 'capitalize',
        marginTop: 7,
        marginBottom: 15,
    },
    buttonMargin: {
        backgroundColor:'white',
      marginTop: 7,
      marginBottom: 15,
      marginLeft: 20,
    },
    buttonNext:{ 
        textAlign: 'right',
    },
      end: { 
          marginTop: 15,
      },
      modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: '50%',
      },
      input: { 
        width: '100%',
      },
      formGroup: { 
          display: 'flex',
          justifyContent: 'space-between',
      },
      formControl: {
        width: '100%',
      },
      marginRight: { 
          marginRight: '20px',
      },
      marginLeft: { 
        marginLeft: '20px',
    },
    workExp:{
        margin:'15px 0'
    },
    textColor:{
        color:'#55D5FF'
    }
  }));

  const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
     
        'Roboto',
       
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);



const Demo = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

   
   return (
    <Grid container  className={classes.container}>
                <Grid item sm={4} md={2}>
                        <SideBar name={"Personal info"}/>
                        <SideBar name={"Certifications"}/>
                        <SideBar name={"Employment"}/>
                        <SideBar name={"Education"}/>
                        <SideBar name={"Language"}/>
                </Grid>

            <Grid item sm={8} md={10} className={classes.containerMenu} >
              <Typography variant='h6' gutterBottom>Employment</Typography>
              <Typography className={classes.workExp} variant="subtitle2" gutterBottom><small><b>Add your past work experience</b></small></Typography>
              <Typography variant="subtitle2" gutterBottom><small>Build your credibility by showcasing the projects or jobs you have completed.</small></Typography>
              <Button
                onClick={handleOpen}
                variant="contained"
                className={classes.button}
                startIcon={<AddCircleOutlineIcon style={{ color: '#55D5FF' }}  />}
              >
                <small>Add Employment</small>
              </Button>

                <Table/>

                 <Link to='/' className={classes.linkPrimary}>Skip this step for now</Link>

                   <Grid container className={classes.end}>
                     <Grid item xs={6} md={10}>
                         <Link to='/' className={classes.linkPrimary}>Back</Link>

                     </Grid>
                     <Grid item xs={1} md={2}>
                         <div className={classes.buttonNext}>
                            <Button
                                style={{
                                    backgroundColor: "#55D5FF",

                                }}
                                variant="contained">
                                      <small>Next</small>
                                   </Button>
                            </div>

                     </Grid>
                    </Grid>

            </Grid>

        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
            >
            <Fade in={open}>
              <div className={classes.paper}>
                <h2 id="transition-modal-title">Add Employment</h2>
                <form className={classes.root} noValidate autoComplete="off">
                    <Grid container>
                     <Grid item xs='12'>
                      <Typography variant='h6'><small>Company</small></Typography>
                     <TextField   variant="outlined" size="small" className={classes.input} />
                     </Grid>

                      <div style={{width: '100%',}}>
                      <Typography variant='h6'><small>Location</small></Typography>
                     <Grid item xs='12' className={classes.formGroup}>
                     <Grid item xs='6'>
                     <TextField  label='City'  variant="outlined" size="small" className={classes.input} />
                     </Grid>
                     <Grid item xs='6'>
                     <FormControl variant="outlined"  size='small' className={classes.formControl}>

                        <Select
                        className={classes.marginLeft}
                          native
                          value={state.age}
                          onChange={handleChange}
                          label="Age"
                          inputProps={{
                            name: 'age',
                            id: 'outlined-age-native-simple',
                          }}
                           input={<BootstrapInput />}
                        >
                          <option aria-label="None" value="" />
                          <option value={10}>Ten</option>
                          <option value={20}>Twenty</option>
                          <option value={30}>Thirty</option>
                        </Select>
                      </FormControl>
                     </Grid>
                     </Grid>
                      </div>
                      <Grid item xs='12'>
                      <Typography variant='h6'><small>Title</small></Typography>
                     <FormControl variant="outlined"  size='small' className={classes.formControl}>

                        <Select
                          native
                          value={state.age}
                          onChange={handleChange}
                          label="Age"
                          inputProps={{
                            name: 'age',
                            id: 'outlined-age-native-simple',
                          }}
                           input={<BootstrapInput />}
                        >
                          <option aria-label="None" value="" />
                          <option value={10}>Ten</option>
                          <option value={20}>Twenty</option>
                          <option value={30}>Thirty</option>
                        </Select>
                      </FormControl>
                     </Grid>

                     <div style={{width: '100%',}}>
                      <Typography variant='h6'><small>Period</small></Typography>
                     <Grid item xs='12' className={classes.formGroup}>
                     <Grid item xs='6'>
                     <FormControl variant="outlined"  size='small' className={classes.formControl}>

                        <Select
                         className={classes.marginRight}
                          native
                          value={state.age}
                          onChange={handleChange}
                          label="Age"
                          inputProps={{
                            name: 'age',
                            id: 'outlined-age-native-simple',
                          }}
                           input={<BootstrapInput />}
                        >
                          <option aria-label="None" value="" />
                          <option value={10}>Ten</option>
                          <option value={20}>Twenty</option>
                          <option value={30}>Thirty</option>
                        </Select>
                      </FormControl>
                     </Grid>
                     <Grid item xs='6'>
                     <FormControl variant="outlined"  size='small' className={classes.formControl}>
                        <Select
                          native
                          value={state.age}
                          onChange={handleChange}
                          label="Age"
                          inputProps={{
                            name: 'age',
                            id: 'outlined-age-native-simple',
                          }}
                           input={<BootstrapInput />}
                        >
                          <option aria-label="None" value="" />
                          <option value={10}>Ten</option>
                          <option value={20}>Twenty</option>
                          <option value={30}>Thirty</option>
                        </Select>
                      </FormControl>
                     </Grid>
                     </Grid>
                      </div>

                      <div style={{width: '100%',}}>
                      <Typography variant='h6'><small>Throught</small></Typography>
                     <Grid item xs='12' className={classes.formGroup}>
                     <Grid item xs='6'>
                     <FormControl variant="outlined"  size='small' className={classes.formControl}>

                        <Select
                         className={classes.marginRight}
                          native
                          value={state.age}
                          onChange={handleChange}
                          label="Age"
                          inputProps={{
                            name: 'age',
                            id: 'outlined-age-native-simple',
                          }}
                           input={<BootstrapInput />}

                        >
                          <option aria-label="None" value="" />
                          <option value={10}>Ten</option>
                          <option value={20}>Twenty</option>
                          <option value={30}>Thirty</option>
                        </Select>
                      </FormControl>
                     </Grid>
                     <Grid item xs='6'>
                     <FormControl variant="outlined"  size='small' className={classes.formControl}>
                        <Select
                          native
                          value={state.age}
                          onChange={handleChange}
                          label="Age"
                          inputProps={{
                            name: 'age',
                            id: 'outlined-age-native-simple',
                          }}
                           input={<BootstrapInput />}
                        >
                          <option aria-label="None" value="" />
                          <option value={10}>Ten</option>
                          <option value={20}>Twenty</option>
                          <option value={30}>Thirty</option>
                        </Select>
                      </FormControl>
                     </Grid>
                     </Grid>
                      </div>

                    </Grid>

                    <div>
                      <FormControlLabel control={<Checkbox name="checkedC" color="primary"
                 />}  label="I currently work here"   />
                      </div>

                      <div>
                      <Typography variant='h6'><small>Description (Optional)</small></Typography>
                      <TextareaAutosize style={{width: '100%',}} rowsMin={4}  />
                      </div>

                      <div style={{ textAlign: 'right', marginTop: 15,}}>
                      <Button className={classes.button} size='small' onClick={handleClose}>
                           Cancel
                </Button>
                      <Button variant="contained" className={classes.buttonMargin} size='small'>
                        <small className={classes.textColor}> Save & Add More</small>
                           </Button>
                      <Button
                          style={{
                              backgroundColor: "#55D5FF",

                          }}
                          variant="contained" className={classes.buttonMargin} size='small'>
                      <small> Save</small>
                       </Button>
                      </div>

                </form>
              </div>
            </Fade>
        </Modal>
      </Grid>
      
   )
}

export default Demo;