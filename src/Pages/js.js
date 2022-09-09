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
          width: "25%",
          height: 600,
        },
      }}
    >
      <Paper elevation={15}><iframe src="https://jxelektro.github.io/backgroundColorFlipperJs/" title='Flipper' width='100%' height='100%'>
      </iframe></Paper>
      <Paper elevation={15}><iframe src="https://jxelektro.github.io/api_cripto_js/" title='Bitcoin' width='100%' height='100%'>
      </iframe></Paper>
      <Paper elevation={15}><iframe src="https://jxelektro.github.io/react_introduccion/" title='Calculadora' width='100%' height='100%'>
      </iframe></Paper>
      <Paper elevation={15}><iframe src="https://jxelektro.github.io/CounterJs/" title='Calculadora' width='100%' height='100%'>
      </iframe></Paper>
      <Paper elevation={15}><iframe src="https://jxelektro.github.io/api_weather_js/" title='Calculadora' width='100%' height='100%'>
      </iframe></Paper>
      <Paper elevation={15}><iframe src="https://jxelektro.github.io/calculadora/" title='Calculadora' width='100%' height='100%'>
      </iframe></Paper>
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