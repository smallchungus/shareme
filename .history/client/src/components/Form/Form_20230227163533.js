import React from 'react';

import {TextField, Button, Typography, Paper} from '@mui/material'
import useStyles from './styles';
   
const Form = () => {
    
    const classes = useStyles();

    return (

        <Paper className = {classes.paper}>
            <form autoComplete="off" noValidate className={class}>


            </form>
        </Paper>

    );
}
export default Form;