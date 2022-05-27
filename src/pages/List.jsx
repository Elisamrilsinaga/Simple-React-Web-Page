import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/card";
import { Button, Grid, Skeleton } from "@mui/material";
// import Skeleton from "../components/Skeleton"
import { getCars } from "../features/store/Cars";

const List = () => {
   const [data, setData] = useState([]);
   const [isLoading, setLoading] = useState(false);
   const history = useNavigate();

   const fetchData = async () => {
      setLoading(true);
      await getCars().then((res) => {
         setData(res);
      });
      setLoading(false);
   };

   useEffect(() => {
      fetchData();
   }, []);

   return(
      <Grid>
         <Grid container spacing={2}>
         {data.map((row, i) => (
            <Grid item xs={4}>
                  <Card
                     key={i}
                     image ={row.image}
                     name ={row.manufacture}
                     model ={row.model}
                     price ={row.rentPerDay}
                     description ={row.description}
                     capacity ={row.capacity}
                     transmission ={row.transmission}
                     year ={row.year}
                     isDetail ={true}/>
            </Grid>
         ))}
         {isLoading && (
            <>
               {[1,2,3,4,5,6,7,8].map((row) => (
                  <Skeleton key={row}/>
               ))}
            </>
         )}
      </Grid>
      </Grid>
   )
}

export default List;