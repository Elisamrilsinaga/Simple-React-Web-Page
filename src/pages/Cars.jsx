import Button from '@mui/material/Button';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Container from '@mui/material/Container';
import { spacing } from '@mui/system';
import { useNavigate } from "react-router-dom";
import SelectDriver from "../components/selectDriver";
import SelectDate from "../components/selectDate";
import SelectTime from "../components/selectTime";
import SelectPassenger from "../components/selectPassenger";

function Cars(){

   const history = useNavigate();

   return(
      <Grid className='filter'>
         <Card sx={{display:"flex", felxDirection:"row"}}>
            {/* <p>INI CARD</p> */}
            <SelectDriver />
            <SelectDate />
            <SelectTime />
            <SelectPassenger />
            <Box sx={{mt:4}}>
            <Button 
               style={{ color: "white", display: "flex", fontSize:12, fontWeight:"bold", background:'#5CB85F' }} 
               onClick={() => history(`/get/cars/list`)}
               sx={{ m: 1, width: 150, height:50}}>
               Mulai Sewa Mobil
            </Button>
            </Box>
         </Card>
      </Grid>
   );
}

export default Cars;