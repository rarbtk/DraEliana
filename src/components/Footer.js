import React from "react";
import footer from "../assets/css/footer.css"
import { FaWhatsapp } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { AiOutlineMail } from 'react-icons/ai';



class Footer extends React.Component{

    render(){
        return(
            <div id="footer">
                <a href=""><FaWhatsapp/> WhatsApp</a>

                <a href=""><GrInstagram/> Instagram</a>

                <a href=""><AiOutlineMail/> Mail</a>

            </div>
        )

        
    }
}

export default Footer;