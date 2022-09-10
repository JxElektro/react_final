import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function ActionAreaCard(props) {
  return (
    <Card sx={{ minWidth: 230 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="130"
          image={props.url}
          alt={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" textAlign={"center"} component="div">
            {props.name}
          </Typography>
          <Typography variant="Poppins" color="text.secondary">
            {props.parra}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}