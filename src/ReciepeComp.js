import React from 'react';
import './ReciepeComp.css';

const ReciepeComp = ({title, image, ingredientaLines}) => {
    return (
        <div className="box">
              
              <img className='containera' src={image} alt=""/>
            <hr/>
            <div className="containerb">
              <h4 className="left-box-title">{title}</h4>
               <p className="ingredients">Ingredents:</p> 
               <p className="ingredients__style">{ingredientaLines}</p>
            </div>   
        </div>
    )
}

export default ReciepeComp;
