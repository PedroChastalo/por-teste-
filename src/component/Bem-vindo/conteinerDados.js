import React from "react";
import '../../App.css';

function ContainerDados({ children }) {
    return (
        <div className="container-dados">
            <div className="info">
                <span className="num">+25</span>
                <span className="info-label">Projetos</span>
            </div>
            <div className="info">
                <span className="num">4</span>
                <span className="info-label">Certificações</span>
            </div>
            <div className="info">
                <span className="num">10</span>
                <span className="info-label">Cursos</span>
            </div>
        </div>
    );
}

export default ContainerDados;
