import './style.css'
import {Link} from 'wouter'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function Html() {

  return (
    < div >
    <h1>Web</h1>
    <h5>Maquetado responsivo de sitios Web para su empresa o su marca personal</h5>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 6,
          width: 400,
          height: 250,
        },
      }}
    >
    <Paper elevation={20}>Proyecto A</Paper>
    <Paper elevation={20}>Proyecto B</Paper>
    <Paper elevation={20}>Proyecto C</Paper>
    </Box>
    <div className='main'>
    
    
    </div >
    <Link href='/'>
    <button className="back">Volver a Incio</button>
    <br/>
    </Link>
    </div>
  );
}

export default Html;