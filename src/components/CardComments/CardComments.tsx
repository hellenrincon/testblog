import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";


export default function CardComments(props: any) {
  
  const item:any = props.props.data;
  const owner:any= props.props.data.owner;
  const navigate = useNavigate();

  React.useEffect(() => {
    console.log("props card ", props) 
  }, []);

  const handleRedirect = () => {
    
      navigate(`/home`);
   
  };
   return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {owner?.firstName.substring(0,1)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${owner?.firstName} ${owner?.lastName}`}
        subheader={item?.publishDate}
      />    
      <CardContent>           
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <h4>Comentario: </h4>
          {item?.message}
        </Typography>       
      </CardContent>
      <CardActions disableSpacing>
<IconButton aria-label="Regresar">
          <ArrowBackIcon onClick={() => handleRedirect()} />
        </IconButton > 
      </CardActions>     
    </Card>
  );
}