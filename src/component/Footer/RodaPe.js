
import React from "react";
import '../../App.css';
import ContImgRoda from "./ContImgRoda";
import ConteinerFormesCont from "./conteinerFormesCont";

function RodaPe(props) {
    return (
        <section id="contato">
            <ContImgRoda imageSrc={require('../../img/rodaPe/fundo-rodape.jpg')}>
                <ConteinerFormesCont/>
            </ContImgRoda>
        </section>
    );
}

export default RodaPe;
