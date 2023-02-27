import React from 'react';

import {TextField, Button, Typography, Paper} from '@mui/material'
import useStyles from './styles';
   
const Form = () => {
    
    const classes = useStyles();

    const handleSubmit = () => {}
    return (

        <Paper className = {classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
            <Typography =''> </Typography>


            </form>
        </Paper>

    );
}
export default Form;