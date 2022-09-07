import React from "./Contact";
import ActionAreaCard from "../Componentes/Cards";
import './style.css'
import { Link } from "wouter";
import Html from '../Pages/html';



function All(props) {
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
        <Link href="/html"><ActionAreaCard name="Web" parra="Hola"  url="https://images2.imgbox.com/75/51/xXa2ZISw_o.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/></Link>
        <ActionAreaCard name="Animacion" parra="Buen" url="https://images2.imgbox.com/42/e6/o9ejCvu5_o.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
        <ActionAreaCard name="Programacion" parra="dia" url="https://images2.imgbox.com/c9/91/tQtqq9Hb_o.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
        </div>
      </div>
    </div>
  );
}

export default All;