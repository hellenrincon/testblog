import { Chip } from "@mui/material";
import * as React from "react";
import { Stack } from "react-bootstrap";

const Tag = (props:any) => {
 const tags:[]=  props.props.data; 
    return(
        <>
        <Stack direction="horizontal">
        {

            tags.map((tag:any,index:number)=>{
             return (
                
             <Chip label={tag} variant="outlined" />
          
             )
            })
        }
        </Stack>
        
        </>
        
    )

}

export default Tag;