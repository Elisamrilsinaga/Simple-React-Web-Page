import React, { useState } from "react";
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from "react-router-dom";
import { deleteCar } from "../features/store/Cars";


const Card = (props) => {
   const {image, name, model, price, description, capacity, transmission, year, isDetail} =props;
   const history = useNavigate();
   const [status, setStatus] = useState();
   const [isLoading, setLoading] = useState(false);

   setTimeout(() =>{
      setStatus(null);
   }, 2000);

   return(

      <div className="card" sx={{ p: 2 }}>
         {status &&(
            <div className="alert">{status == 200 ? "Success" : "Failed"}</div>
         )}
         {isLoading && <div className="alert">Please wait...</div>}
         <CardMedia
         component="img"
         src= {image}
         />
         {/* <CardMedia src={image}>

         </CardMedia> */}
         <h5>{name} {model}</h5>
         <h5>Rp {price}/Day</h5>
         <p>{description}</p>
         <p>{capacity}</p>
         <p>{transmission}</p>
         <p>{year}</p>
         <Button style={{ color: "white", display: "flex", alignItems:"center", float: "left", background:'#5CB85F' }}>
            Pilih Mobil
         </Button>
      </div>
      
   );
};

export default Card;