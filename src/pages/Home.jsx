import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useNavigate } from "react-router-dom";
import figure1 from "../assets/img/img_service.png";

function Home(){
   return(
    <Grid container spacing={2}>
      <Grid item xs={6} sx={{mt:10}}>
      <CardMedia
        component="img"
        src={figure1}
        />
      </Grid>
      <Grid item xs={6} sx={{mt:10}}>
      <h3>Best Car Rental for any kind of trip in Ciledug!</h3>
      <p>Sewa mobil di Ciledug bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
      <ul class="fa-ul">
            <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
            <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
            <li>Sewa Mobil Jangka Panjang Bulanan</li>
            <li>Gratis Antar - Jemput Mobil di Bandara</li>
            <li>Layanan Airport Transfer / Drop In Out</li>
          </ul>
      </Grid>
      <Grid item xs={12} sx={{mt:10}}>
         <h3 class="">Why Us</h3>
         <p class="lead">Mengapa harus pilih Binar Car Rental?</p>
      </Grid>
     
         <Grid item xs={3}>
               <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                  <Typography variant="h5" component="div">
                     Mobil Lengkap
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
                  </Typography>
                  </CardContent>
               </Card>
         </Grid>
         <Grid item xs={3}>
               <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                  <Typography variant="h5" component="div">
                  Harga Murah
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
                  </Typography>
                  </CardContent>
               </Card>
         </Grid>
         <Grid item xs={3}>
               <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                  <Typography variant="h5" component="div">
                  Layanan 24 Jam
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
                  </Typography>
                  </CardContent>
               </Card>
         </Grid>
         <Grid item xs={3}>
               <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                  <Typography variant="h5" component="div">
                  Sopir Profesional
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
                  </Typography>
                  </CardContent>
               </Card>
         </Grid>

         <Grid item xs={12} sx={{mt:10}} className="centerText">
         <h3 class="">Testimonial</h3>
         <p class="lead">Berbagai review positif dari para pelanggan kami</p>
      </Grid>

      <Grid item xs={4}>
               <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                  <Typography variant="h6" component="div">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  John Dee 32, Bromo
                  </Typography>
                  </CardContent>
               </Card>
         </Grid>
      <Grid item xs={4}>
               <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                  <Typography variant="h6" component="div">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  John Dee 32, Bromo
                  </Typography>
                  </CardContent>
               </Card>
         </Grid>
      <Grid item xs={4}>
               <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                  <Typography variant="h6" component="div">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  John Dee 32, Bromo
                  </Typography>
                  </CardContent>
               </Card>
         </Grid>

         <Grid item xs={12} sx={{mt:10}} style={{ color:"white", background: 'blue' }} className="centerText">
            <h1>Sewa Mobil di Ciledug Sekarang</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Box sx={{display: "flex", alignItems:"center"}}>
            <Button style={{ color: "white", display: "flex", alignItems:"center", float: "left", background:'#5CB85F' }}>
               Mulai Sewa Mobil
            </Button>
            </Box>
         </Grid>

         <Grid item xs={6} sx={{my:10}}>
            <h3>Frequently Asked Question</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
         </Grid>
         <Grid item xs={6}>
         {/* <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div> */}
         </Grid>

         <Grid item xs={3}>
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
         </Grid>
         <Grid item xs={3}>
         <p><a class="text-decoration-none text-dark fw-bold" aria-current="page" href="#ourService">Our Service</a></p>
          <p><a class="text-decoration-none text-dark fw-bold" href="#whyUs">Why Us</a></p>
          <p><a class="text-decoration-none text-dark fw-bold" href="#testimonial">Testimonial</a></p>
          <p><a class="text-decoration-none text-dark fw-bold" href="#faq">FAQ</a></p>
        
         </Grid>
         <Grid item xs={3}>
         <p>Connect with us</p>
          <i class="fa-brands fa-facebook-f fa-costum1 socmed"></i>
          <i class="fa-brands fa-instagram fa-costum1 socmed"></i>
          <i class="fa-brands fa-twitter fa-costum1 socmed"></i>
          <i class="fa-solid fa-envelope fa-costum1 socmed"></i>
          <i class="fa-brands fa-twitch fa-costum1 socmed"></i>
        
         </Grid>
         <Grid item xs={3}>
         <p>Copyright Binar 2022</p>
          <a class="navbar-brand" href="#"><div class="logo-footer"></div></a>
         </Grid>

      </Grid>

      

   )
}

export default Home;