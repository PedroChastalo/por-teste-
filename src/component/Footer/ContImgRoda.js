import React from "react";
import '../../App.css';

function ContImgRoda({ imageSrc, children }) {
    return (
        <div className="container-img-roda">
            <img src={imageSrc} alt="Imagem de fundo do rodapé" className="background-img-roda" />
            {children}
        </div>
    );
}

export default ContImgRoda;
