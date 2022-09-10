import './style.css'
import React from "./Contact"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {Link} from 'wouter'

function Alfa(props) {


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



// Se Utilizo MUI para hacer Grids que sirvieran como marco para las

  return (
    <>
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
      
    </Box>
    <div className='main'>
    
    <Link className="linkhome" href='/'>
    <button id="back">Volver a Incio</button>
    <br/>
    </Link>
    </div ></>
  );
}

export default Alfa;

