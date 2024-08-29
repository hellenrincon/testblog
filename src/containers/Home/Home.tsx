import React, { useEffect, useState } from "react";
import "./Home.css";
import { Button, Container } from "react-bootstrap";
import axiosInstance from "../../contexts/Interceptors/axiosInstance";
import RecipeReviewCard from "../../components/Card/Card";

const Home = () => {
  const [dataList, setData] = useState<any[]>([]);
  useEffect(() => {
    axiosInstance.get('/post?limit=10')
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Container>
     <>
      {dataList?.length>0?(
        dataList.map((item:any, index:number)=>{
            return <RecipeReviewCard props={{data:  item }} ></RecipeReviewCard>   
          })
      ):(
        <>
        </>
      )
      }
      </>
    </Container>
  );
};

export default Home;