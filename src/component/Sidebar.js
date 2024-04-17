import React from "react";
import '../App.css';
import { SidebarData } from './SidebarData';

function Sidebar(){
    return (
        <div className="Sidebar">
            <a href="/" className="profile-link">
                <div className="Perfil">
                    {/*<img src="/" alt="Profile">*/}
                    <div className="Circulo"></div>
                    {/*</img>*/}
                </div>
            </a>
            <ul className="SidebarList">
            {SidebarData.map((val, key)=> {
                return(
                    <li key={key} className=" row"
                    onClick={()=>{
                        window.location.pathname = val.link;
                        }}
                    >
                        <div id="icon">{val.icon}</div> {""}
                        <div id="title">
                            {val.title}
                        </div>
                    </li>
                )
            })}
             {/* Icons das Redes */}
                <ul>
                    <a className="redes" href="https://github.com/MayaRodrigues" target="_blank">git </a>
                    <a className="redes" href="https://www.instagram.com/mah._rodrigues_/" target="_blank">insta </a>
                    <a className="redes" href="https://www.linkedin.com/in/mayara-rodrigues-pereira-9a104425a/" target="_blank">link </a>
                </ul>
            </ul>     
        </div>
    )
}

export default Sidebar; 