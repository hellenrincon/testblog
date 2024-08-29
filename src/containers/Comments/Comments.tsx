import { Grid, Grid2 } from "@mui/material";
import * as React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import RecipeReviewCard from "../../components/Card/Card";
import ButtonAppBar from "../../components/AppBar/AppBar";
import axiosInstance from "../../contexts/Interceptors/axiosInstance";
import CardComments from "../../components/CardComments/CardComments";

const Comments = (props:any) => {
 const { commentId } = useParams<{ commentId: string }>(); 

  const [dataComments, setDataComments] = React.useState<any[]>([]);
  React.useEffect(() => {
    axiosInstance
      .get(`/post/${commentId}/comment`)
      .then((response) => {
          setDataComments(response.data.data);
          console.log("dataComments 1", response.data.data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

 
    return(
        
         <Container>
             <ButtonAppBar props={{title:"Comentarios"}} ></ButtonAppBar>        
      <>
      <div style={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'left' }}>
        <Grid2 container spacing={3} justifyContent="center">
      {dataComments?.length>0?(
        dataComments.map((item:any, index:number)=>{
            console.log("antes ", item)
            return <>            
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CardComments props={{data:  item }} ></CardComments>
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
        
    )

}

export default Comments;