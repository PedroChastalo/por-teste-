import React from 'react'; 
import '../../App.css';
import conteinerImg from '../Bem-vindo/conteinerImg';


function Welcome(){
    const clique= () =>{
        console.log('botão clicado !');
    }
    return(
        <section id= "inicio">
            <conteinerImg imagemSrc= '../../img/wallpaper_white.jpg'>
                <h1 id="titulo-bem">Bem- Vindo ao meu <br></br>portifolio!</h1>
                <button id="botao-bv" onClick={clique} >Entrar em contato</button>
                <conteinerDados>
                    
                </conteinerDados>
            </conteinerImg>
        </section>
    );
};

export default Welcome; 
