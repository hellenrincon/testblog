import React, { useEffect, useState } from "react";
import "./Home.css";
import {  Container } from "react-bootstrap";
import RecipeReviewCard from "../../components/Card/Card";
import { Grid, Grid2 } from "@mui/material";
import axiosInstance from "../../contexts/Interceptors/axiosInstance";

const Home = () => {
  const [dataList, setData] = useState<any[]>([]);
  useEffect(() => {
    axiosInstance
      .get("/post")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (   
    <Container>
      <>
      <div style={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'left' }}>
        <Grid2 container spacing={3} justifyContent="center">
      {dataList?.length>0?(
        dataList.map((item:any, index:number)=>{
            return <>            
              <Grid item xs={12} sm={6} md={4} key={index}>
                <RecipeReviewCard props={{data:  item }} ></RecipeReviewCard>
              </Grid>             
            </>   
          })
        ):(
          <>
        </>
      )
    }
    </Grid2>            
      </div>
      </>
    </Container>
  );
};

export default Home;