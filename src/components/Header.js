import React from "react";
import header from "../assets/css/header.css";
import isabella from "../assets/imagenes/isabella.png"
import IconoDra from "../assets/imagenes/IconoDra.png"
import { ImMenu } from 'react-icons/im';


class Header extends React.Component{

render(){
    return (
    <header className="header">
    <ImMenu />
    <img src={isabella} id="isabella"></img>
    <img src={IconoDra} id="IconoHeader"></img>

    <div id="Titulo-Dra">
    <h1>Dra Eliana Maldonado.</h1>
    <h1>Dermatologia y estetica.</h1>

    </div>
    
        </header>
    )
}

}

export default Header;