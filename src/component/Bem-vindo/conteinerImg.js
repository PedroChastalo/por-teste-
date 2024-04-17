import React from "react";
import '../../App.css';

function conteinerImg({imagemSrc,}){
    return(
        <div style={{position:'relative', width:'100%', height:'100%'}}>
            <img
            src = {imagemSrc}
            alt="imagem"
            style={{width:'100%', height:'auto', display:'block'}}
            />

        </div>
    );
}

export default conteinerImg;