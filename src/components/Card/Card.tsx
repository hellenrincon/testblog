import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CommentIcon from '@mui/icons-material/Comment';
import Tag from "../Tags/Tag";
import { useNavigate } from "react-router-dom";


export default function RecipeReviewCard(props: any) {  
  const item:any = props.props.data;
  const owner:any= props.props.data.owner;
  const navigate = useNavigate();

  const handleRedirect = (commentsId: any) => { 
      navigate(`/comments/${commentsId}`);
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
      <CardMedia
        component="img"
        height="194"
        alt={owner?.firstName}
        src={item?.image!=null?item.image:""}
      />
      <CardContent>    
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <h4>Tags: </h4>
          <Tag props={{data:  item?.tags }}></Tag>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
<IconButton aria-label="Ver comentarios">
          <CommentIcon onClick={() => handleRedirect(item.id)}/>
        </IconButton > 
      </CardActions>     
    </Card>
  );
}