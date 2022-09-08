import {Link} from 'wouter'
import './style.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
function Jss() {

  return (
    < div >
    <h1>Programacion</h1>
    <h5>Proyectos interactivos con consumo de APIs</h5>
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
      <Paper elevation={15}>Proyecto A</Paper>
      <Paper elevation={15}>Proyecto B</Paper>
      <Paper elevation={15}>Proyecto C</Paper>
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

export default Jss;