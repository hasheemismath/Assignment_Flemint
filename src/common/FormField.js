import React from 'react';
import TextField from "@material-ui/core/TextField";

const FormField = ({label,variant,size,className,value,onChange}) => {

    return (
        <TextField value={value} onChange={onChange}  label={label}  variant={variant} size={size} className={className} />
    )
}

export default FormField;