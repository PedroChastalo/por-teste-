import React from 'react';
import '../../App.css';
import ContainerImg from '../Bem-vindo/conteinerImg';
import ContainerDados from '../Bem-vindo/conteinerDados';

function Welcome() {
    const handleClick = () => {
        console.log('Button clicked!');
    };

    return (
        <section id="inicio">
            <ContainerImg imageSrc={require('../../img/welcome-box/Fundo-box2.jpg')}>
                <h1 id="titulo-bem">Bem-vindo ao meu <br /> portfólio!</h1>
                <button id="botao-bv" onClick={handleClick}>Entrar em contato</button>
                <ContainerDados />
            </ContainerImg>
        </section>
    );
}

export default Welcome;
