import { FormControl,  makeStyles, Select } from '@material-ui/core';
import React from 'react';


import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
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


const FormDropdown = ({name,option,type,value,onChange}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

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
        <FormControl variant="outlined"  size='small'  className={classes.formControl} disabled={type} >
            <InputLabel id="demo-simple-select-outlined-label">{name}</InputLabel>
            <Select
                isSearchable
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                className={classes.marginRight}
                native
                onChange={onChange}
                label="Age"
                inputProps={{
                    name: 'age',
                    id: 'outlined-age-native-simple',
                }}
            >
                <option aria-label="None" value="" />
                {option}
            </Select>
        </FormControl>

    )
}

export default FormDropdown;