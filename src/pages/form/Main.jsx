import { Backdrop, Button, Checkbox, Fade, FormControl, FormControlLabel, Grid,  makeStyles, Modal, TextareaAutosize, Typography } from '@material-ui/core';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import SideBar from "../sideBar";
import Table from "../table";
import FormDropdown from "../../common/FormDropdown";
import FormField from "../../common/FormField";
import {countries} from "../../common/countries";
import {postData} from "../../apiReq/helper";
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

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


const Demo = () => {
    const classes = useStyles();

    const [values, setValues] = useState({
        company: "",
        title: "",
        description: "",
        period:"",
        period_year: "",
        period_month:"",
        is_currently:false,
        country:"",
        through:"",
        through_month: "",
        through_year:"",
        location: "",
        loading: false,
        error: false,
        isSuccess:false,
        success:""
    });

    const [open, setOpen] = React.useState(false);
    const [loadings, setLoading] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setChecked(false)
    setValues({...values,company: "",description: "",title: "",location: "",through: "",period: "",loading: false,error: false,isSuccess: false,is_currently: false})
};
    const thisYear = (new Date()).getFullYear();

    const minOffset = 0;
    const maxOffset = 60;

  const handleChange = name =>event => {
    const value = event.target.value;
    setValues({ ...values, [name]: value});
  };

   const [isCheck,setChecked] = useState(false);

   const dataSubmit = event =>{
       event.preventDefault();

       setLoading(false);

       values.period = `${values.period_year}-${values.period_month}`;

       if(!is_currently){
           values.through = `${values.through_year}-${values.through_month}`;
       }
       else{
           values.through="";
       }

       setValues({...values})
   }

    const handleSubmit = (evt) => {
       dataSubmit(evt)

        postData(values)
            .then(data=>{
                console.log(data)
                if(data.status===400 || data.status===404){
                    setValues({...values,error: true,isSuccess: false})
                    setLoading(true);

                }else{
                    setValues({...values,company: "",description: "",title: "",location: "",through: "",period: "",loading: false,success: data.message,error: false,isSuccess: true,is_currently: false})
                    handleClose();
                    setLoading(true)
                }
            })
            .catch(e=>{
                setLoading(true);
                console.log(e)
            })
    }

    const saveAndMore =(event)=>{
        dataSubmit(event)

        postData(values)
            .then(data=>{
                console.log(data)
                if(data.status===400 || data.status===404){
                    setValues({...values,error: true,isSuccess: false})
                }else{
                    setValues({...values,company: "",description: "",title: "",location: "",country: "",through: "",period: "",loading: false,success: data.message,error: false,isSuccess: true})}
                    setLoading(true);

            })
            .catch(e=>{
                console.log(e)
            })
    }

    const tableContent = ()=>{
        return (<Table/>)
    }

    const checkClick = ()=>{
        setChecked(!isCheck);
        setValues({...values,is_currently: !is_currently})
    }

    const options = [];
    const monthOptions = [];

    for (let i = minOffset; i <= maxOffset; i++) {
        const year = thisYear - i;
        options.push(<option value={year}>{year}</option>);
    }
    const months = [
        {id:1,month:"January"},
        {id:2,month:"February"},
        {id:3,month:"March"},
        {id:4,month:"April"},
        {id:5,month:"May"},
        {id:6,month:"June"},
        {id:7,month:"July"},
        {id:8,month:"August"},
        {id:9,month:"September"},
        {id:10,month:"October"},
        {id:11,month:"November"},
        {id:12,month:"December"}
    ]

    months.forEach(result=>{
        monthOptions.push(<option value={result.id}>{result.month}</option>)
    });

    const countriesArray =[]

    countries.forEach(res=>{
        countriesArray.push(<option value={ res.value}>{res.label}</option>)
    })

    const {
        company,
        title,
        description,
        location,
        is_currently,
        error,
        isSuccess,
    } = values;

    const errorMessage = ()=>{
        if(error){
            return (<Alert severity="error">Fields should not be empty!</Alert>)
        }
    }

    const successMessage = ()=>{
        if(isSuccess){
            return (<Alert severity="success">Successfully Saved</Alert>)
        }
    }

    const isLoading = ()=>{
            return (<CircularProgress/>)
    }
   
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

                {loadings? tableContent() : isLoading() }

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
                <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                    <Grid container>
                     <Grid item xs='12'>
                      <Typography variant='h6'><small>Company</small></Typography>
                      <FormField value={company} onChange={handleChange("company")}  variant={"outlined"} size={"small"} className={classes.input}/>
                     </Grid>
                      <div style={{width: '100%',}}>
                      <Typography variant='h6'><small>Location</small></Typography>
                     <Grid item xs='12' className={classes.formGroup}>
                     <Grid item xs='6' style={{marginRight:'25px'}}>
                        <FormField value={location} onChange={handleChange("location")}  label={"city"} variant={"outlined"} size={"small"} className={classes.input}/>
                     </Grid>
                     <Grid item xs='6'>
                         <FormDropdown name={"Country"} option={countriesArray}  onChange={handleChange("country")} />
                     </Grid>
                     </Grid>
                      </div>
                      <Grid item xs='12'>
                      <Typography variant='h6'><small>Title</small></Typography>

                     <FormControl variant="outlined"  size='small' className={classes.formControl}>
                         <FormField value={title} onChange={handleChange("title")}  variant={"outlined"} size={"small"} className={classes.input}/>
                     </FormControl>
                     </Grid>

                     <div style={{width: '100%',}}>
                      <Typography variant='h6'><small>Period</small></Typography>
                     <Grid item xs='12' className={classes.formGroup}>
                     <Grid item xs='6'>
                         <FormDropdown name={"Month"} option={monthOptions} onChange={handleChange("period_month")}/>
                     </Grid>
                     <Grid item xs='6'>
                         <FormDropdown name={"Year"} option={options} onChange={handleChange("period_year")}/>
                     </Grid>
                     </Grid>
                      </div>

                      <div style={{width: '100%',}}>
                      <Typography variant='h6'><small>Throught</small></Typography>
                     <Grid item xs='12' className={classes.formGroup}>
                     <Grid item xs='6'>
                         {isCheck? <FormDropdown type={true} name={"Month"}option={monthOptions} onChange={handleChange("through_month")}/>:<FormDropdown name={"Month"}option={monthOptions} onChange={handleChange("through_month")}/>}
                     </Grid>
                     <Grid item xs='6'>
                         {isCheck? <FormDropdown type={true} name={"Year"} option={options} onChange={handleChange("through_year")}/>:<FormDropdown name={"Year"} option={options} onChange={handleChange("through_year")}/>}
                     </Grid>
                     </Grid>
                      </div>

                    </Grid>

                    <div>
                          <FormControlLabel
                              control={<Checkbox name="checkedC" color="primary"
                                                 onChange={handleChange}
                                                onClick={checkClick}
                              />}
                              label="I currently work here"
                          />
                    </div>

                      <div>
                      <Typography variant='h6'><small>Description (Optional)</small></Typography>
                      <TextareaAutosize style={{width: '100%',}} rowsMin={4} value={description} onChange={handleChange("description")} />
                      </div>

                      <div style={{ textAlign: 'right', marginTop: 15,}}>
                      <Button className={classes.button} size='small' onClick={handleClose}>
                           Cancel
                </Button>
                      <Button variant="contained" onClick={saveAndMore} className={classes.buttonMargin} size='small'>
                        <small className={classes.textColor}> Save & Add More</small>
                           </Button>
                      <Button
                          type="submit"
                          style={{
                              backgroundColor: "#55D5FF",
                          }}
                          variant="contained" className={classes.buttonMargin} size='small'>
                      <small> Save</small>
                       </Button>
                          {errorMessage()}
                          {successMessage()}
                      </div>

                </form>
              </div>
            </Fade>
        </Modal>
      </Grid>
      
   )
}

export default Demo;