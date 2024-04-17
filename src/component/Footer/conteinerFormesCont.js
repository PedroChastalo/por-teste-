import React from "react";
import '../../App.css';

function ConteinerFormesCont() {
    return (
        <div className="container-form-contact">
            <div className="contact-info">
                <h3 className="info-title">Informações</h3>
                <div className="info-item">
                    <span className="icon"><i class="fa-regular fa-envelope"></i></span>
                    <div className="info-text">
                        <h4>Email:</h4>
                        <p>meuemail@example.com</p>
                    </div>
                </div>
                <div className="info-item">
                    <span className="icon"><i className="fas fa-phone"></i></span>
                    <div className="info-text">
                        <h4>Telefone:</h4>
                        <p>(XX) XXXXX-XXXX</p>
                    </div>
                </div>
                <div className="info-item">
                    <span className="icon"><i className="fab fa-discord"></i></span>
                    <div className="info-text">
                        <h4>Discord:</h4>
                        <p>meuusername#1234</p>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default ConteinerFormesCont;
