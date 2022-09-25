import './style.css'
import { Link } from 'wouter'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function Html() {



  return (
    < div >
      <h1>Web</h1>
      <h5>Maquetado responsivo de sitios Web para su empresa o su marca personal</h5>
      <Box data-testid="containerHtml"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 6,
            width: "95%",
            height: 650,
          },
        }}
      >
        <Paper elevation={20}><iframe src="https://jxelektro.github.io/css_grid/" title='Hola' width='100%' height='100%'>
        </iframe></Paper>
        <Paper elevation={20}><iframe src="https://jxelektro.github.io/IslaCanela/" title='Hola' width='100%' height='100%'>
        </iframe></Paper>
        <Paper elevation={20}><iframe src="https://jxelektro.github.io/proyecto_final_html_css/" title='Hola' width='100%' height='100%'>
        </iframe></Paper>
        <Paper elevation={20}><iframe src="https://jxelektro.github.io/desafio_github/" title='Hola' width='100%' height='100%'>
        </iframe></Paper>
      </Box>
      <div className='main'>

        <Link className='linkhome' href='/'>
          <button className="back">Volver a Incio</button>
          <br />
        </Link>
      </div >

    </div>
  );
}

export default Html;