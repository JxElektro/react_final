import React from "./Contact";
import ActionAreaCard from "../Componentes/Cards";
import './style.css'



function All() {
  //Pequeña funcion para calcular la cantidad de meses
  const begin = new Date('Jul 11 2022');
  const today = new Date();
  const monthBegin = begin.getMonth();
  const day = today.getMonth();
  const total = (day - monthBegin);
  

  return (
    < div >
      <div className='main'>
        <h1>Desarrollador Jr.</h1>
        <h3 className="conoce"> HTML5 | CSS | JavaScript | React</h3>
        <h3>¡Hola! Soy Jhen Nuñez <br/> Desarrollador con {total} meses de experiencia con espectativas de convertirme en "FullStack".</h3>
        <p>Me Gustan los Mapas y el Diseño 3D y me gustaria trabajar proyectos que utilicen Realidad Aumentada.</p>
        <div className="card_container">
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
        </div>
      </div>
    </div>
  );
}

export default All;