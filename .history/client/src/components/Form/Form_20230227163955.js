import React from 'react';

import {TextField, Button, Typography, Paper} from '@mui/material'
import useStyles from './styles';
   
const Form = () => {
    
    const classes = useStyles();

    const handleSubmit = () => {}
    return (

        <Paper className = {classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
            <Typography variant="h6">Creating a Memory </Typography>
            <TextField name="creator" 
            variant="outlined" 
            label="Creator" 
            fullWidth
            value={postData.creator}
            />


            </form>
        </Paper>

    );
}
export default Form;