import Button from '@mui/material/Button';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { spacing } from '@mui/system';
import { useNavigate } from "react-router-dom";


import "../App.css";
import carImage from "../assets/img/img_car.png";

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const token = localStorage.getItem("token");
    const nav = useNavigate();
    const history = useNavigate();

    const handleClick = (path) =>{
        nav(path);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        nav("/login");
    };

    return (
        <AppBar position="static" sx={{ py: 2 }} style={{ background: '#f1f3ff'}}>
            <Container maxWidth="x1">
                <Box style={{ml: "auto", float:"right"}}>
                    <Button sx={{ mr: "44rem", width: 100 }} style={{color: "blue", display:"flex", float:"left", background:"blue"}} onClick={() => history(`/`)}>
                    BCR
                    </Button>
                    <Button style={{color: "black", display:"flex", float:"left"}} onClick={() => history(`/`)}>
                        Our Service
                    </Button>
                    <Button style={{ color: "black", display: "flex", float: "left" }} onClick={handleLogout}>
                        Why Us
                    </Button>
                    <Button style={{ color: "black", display: "flex", float: "left" }} onClick={() => history(`/users`)}>
                        Testimonial
                    </Button>
                    <Button style={{ color: "black", display: "flex", float: "left" }} onClick={() => history(`/posts`)}>
                        FAQ
                    </Button>
                    <Button style={{ color: "white", display: "flex", float: "left", background:'#5CB85F' }}>
                        Register
                    </Button>

                    <Grid container spacing={2} sx={{ alignSelf: 'flex-start' }}>
                        <Grid item xs={6} direction="column" style={{ color: "black"}} >
                            <h2>Sewa & Rental Mobil Terbaik di kawasan Ciledug</h2>
                            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                            <Button style={{ color: "white", display: "flex", float: "left", background:'#5CB85F' }} onClick={() => history(`/get/cars`)}>
                                 Mulai Sewa Mobil
                            </Button>
                        </Grid>
                        <Grid item xs={6} style={{ color: "black"}}>
                        <CardMedia
                            component="img"
                            // sx={{
                            // height: 233,
                            // width: 350,
                            // maxHeight: { xs: 233, md: 167 },
                            // maxWidth: { xs: 350, md: 250 },
                            // }}
                            src={carImage}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </AppBar>
    )
}

export default Navbar;