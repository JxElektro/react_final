import './style.css'
import React from "./Contact"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {Link} from 'wouter'

function Alfa(props) {
/*
  const {
    iframeSource = '<div class="sketchfab-embed-wrapper"> <iframe title="Alfa01" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="600" height="500" src="https://sketchfab.com/models/32ba02a55a90417aa4ba98fcac06e052/embed"> </iframe></div>'
  } = props;

  const {
    iframeVideo = '<div style="height: 0; padding-bottom: calc(100.00%); position:relative; width: 100%;"><iframe allow="autoplay; gyroscope;" referrerpolicy="strict-origin" src="https://www.kapwing.com/e/6316de6121b7d20aeeb1a73b?autoplay=true" style="border:0; height:100%; left:0; overflow:hidden; position:absolute; top:0; width:"100%" width="100%" controls loop ></iframe></div>'
  } = props;*/

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



// Se Utilizo MUI para hacer Grids que sirvieran como marco para las imagenes.

  return (
    <Box sx={{ width: '100%' }}>
    <br/>
    <h1> Renderizado 3D</h1>
    <h5>Proyectos 3D en base a Blender. </h5>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          <Item ><img className="alfaimg" width="100%" height="90%" src="https://images2.imgbox.com/fd/50/kBzUXNfq_o.jpg" alt="alfa" /><h3 className='gridname'>Uso del Espacio</h3></Item>
        </Grid>
        <Grid item xs={4}>
          <Item> <img className="alfaimg" width="100%" height="90%" src="https://images2.imgbox.com/9e/38/TfJx2gTb_o.jpg" alt="alfa" /><h3 className='gridname'>Objetos Reflectantes</h3></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><img className="alfaimg" width="100%" height="90%"  src="https://images2.imgbox.com/27/4c/VhmfwO4N_o.png" alt="alfa" /><h3 className='gridname'>Uso de Sombras</h3></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><img className="alfaimg" width="100%" height="90%"  src="https://images2.imgbox.com/83/3b/4fBy7EaD_o.png" alt="alfa" /><h3 className='gridname'>Recreaciones Certeras</h3></Item>
        </Grid>
        <Grid item xs={4}>
        <Item><img className="alfaimg" width="100%" height="90%"  src="https://images2.imgbox.com/74/e1/PB3nYciN_o.png" alt="alfa" /><h3 className='gridname'>Uso de Transparencia</h3></Item>
      </Grid>
      <Grid item xs={4}>
      <Item><img className="alfaimg" width="100%" height="90%"  src="https://images2.imgbox.com/cf/cf/X7MVadiT_o.png" alt="alfa" /><h3 className='gridname'>Luz Realista</h3></Item>
    </Grid>
      </Grid>
      <br/>
      <Link href='/'>
    <button className="back">Volver a Incio</button>
    </Link>
    </Box>
  
  );
}

export default Alfa;

