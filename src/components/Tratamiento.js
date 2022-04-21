import React from "react";
import tratamientos from "../assets/css/tratamientos.css"
import { Button, Card } from 'react-bootstrap';
import tratamientosCorporales from "../assets/imagenes/tratamientos-corporales.jpg"
import tratamientosCapilares from "../assets/imagenes/t-capilares.jpg"
import tratamientosFaciales from "../assets/imagenes/t-faciales.jpg"



class Tratamiento extends React.Component{

    render(){
        return (
   <div id="tratamientos-container">

  <Card style={{width: '25rem'}} className="tarjeta">
  <Card.Img variant="top" src={tratamientosCorporales} style={{height:"17rem"}}/>
  <Card.Body>
    <Card.Title> <h2>Tratamientos corporales</h2></Card.Title>
    <Card.Text>
      <li>Masajes linfaticos.</li>
      <li>Masaje muscular.</li>
      <li>Grasa localizada.</li>
         </Card.Text>
    <Button variant="primary">Corporales</Button>
  </Card.Body>
</Card>

<Card style={{ width: '25rem' }} className="tarjeta">
  <Card.Img variant="top" src={tratamientosCapilares} style={{height:"17rem"}}/>
  <Card.Body>
    <Card.Title><h2>Tratamientos capilares.</h2></Card.Title>
    <Card.Text>
      <li>Mesoterapia capilar.</li>
      <li>Plasma rico en plaquetas.</li>
      <li>Transplante capilar.</li>
      
    </Card.Text>
    <Button variant="primary">Capilares</Button>
  </Card.Body>
</Card>

<Card style={{ width: '25rem' }} className="tarjeta">
  <Card.Img variant="top" src={tratamientosFaciales} style={{height:"17rem"}}/>
  <Card.Body>
    <Card.Title><h2>Tratamientos faciales.</h2></Card.Title>
    <Card.Text>
      <li>Acne-Rosacea.</li>
      <li>Despigmentacion.</li>
      <li>Post operatorios.</li>
    </Card.Text>
    <Button variant="primary">Faciales</Button>
  </Card.Body>
</Card>


   </div>



    )
    }
}

export default Tratamiento