import './style.css'
import {Link} from 'wouter'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function Html() {

  return (
    < div >
    <h1>Web</h1>
    <h5>Maquetado responsivo de sitios Web para su empresa o su marca personal
    "Proyectos web"</h5>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 6,
          width: 400,
          height: 400,
        },
      }}
    >
      <Paper elevation={20}>Hola</Paper>
      <Paper elevation={20}>Hola</Paper>
      <Paper elevation={20}>Hola</Paper>
    </Box>
    <div className='main'>
    
    
    </div >
    <Link href='/'>
    <button>Volver a Incio</button>
    <br/>
    </Link>
    </div>
  );
}

export default Html;