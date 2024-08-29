import React, { useEffect, useState } from "react";
import "./Home.css";
import {  Container } from "react-bootstrap";
import RecipeReviewCard from "../../components/Card/Card";
import { Box, Divider, Grid, Grid2, TextField } from "@mui/material";
import ButtonAppBar from "../../components/AppBar/AppBar";
import axiosInstance from "../../contexts/Interceptors/axiosInstance";

const Home = () => {
  const [dataList, setData] = useState<any[]>([]);
 const [dataFilter, setDataFilter] = useState<any[]>([]);

   const DataFilterClick = (data: any) => {
        const temData: any[] = dataList;
        if (data?.target?.value.length > 3) {
            const dataFIlter = temData?.filter(x => x.owner.firstName.toLowerCase().includes(data?.target?.value)); 
            setDataFilter(dataFIlter);
            if (dataFilter.length === 0) {              
            }
        } else {
            setDataFilter(temData);
            
        }
    };

  useEffect(() => {
    axiosInstance
      .get("/post")
      .then((response) => {        
        setData(response.data.data);
        setDataFilter(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (   
    <Container>
      <ButtonAppBar props={{title:"Inicio"}} ></ButtonAppBar>    
      <>
      <Box className="box-autocomplete">
                <TextField
                    sx={{ input: { color: 'black' }}}
                    variant="filled"
                    className="input-search"
                    fullWidth
                    label="Busca tu post favorito por nombre!"
                    id="fullWidth" 
                    onChange={DataFilterClick} 
                />
                <Divider className="divider-custom" textAlign="center" color="red">
                    <span className="text-black">Post</span>
                </Divider>
            </Box>
      <div style={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'left' }}>
        <Grid2 container spacing={3} justifyContent="center">
      {dataFilter?.length>0?(
        dataFilter.map((item:any, index:number)=>{
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