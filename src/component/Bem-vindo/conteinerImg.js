import React from "react";
import '../../App.css';

function ContainerImg({ imageSrc, children }) {
   return (
        <div className="container-img">
            <img src={imageSrc} alt="Background" className="background-img" />
            {children}
        </div>
    );
}

export default ContainerImg;
