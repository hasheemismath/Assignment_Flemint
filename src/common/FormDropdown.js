import { FormControl,  makeStyles, Select } from '@material-ui/core';
import React from 'react';
import InputLabel from "@material-ui/core/InputLabel";
const useStyles = makeStyles((theme) => ({

    formControl: {
        width: '100%',
    },
    marginRight: {
        marginRight: '20px',
    }
}));


const FormDropdown = ({name,option,type,onChange}) => {
    const classes = useStyles();

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