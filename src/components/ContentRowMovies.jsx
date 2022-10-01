import React from 'react';
import Card from './Card';

function ContentRowTop(){
    return (
        <>
        
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <Card  {...producto}  key= {index}/>
                })
            }      
        </div>
        </>
    )
}


let productInDataBase = {
    color:   "primary",
    titulo: "Movies in Data Base",
    valor: 21,
    icono: "fas fa-film",
}

let amount ={
    color:   "success",
    titulo: "Total awards",
    valor: 79,
    icono: "fas fa-award",
}

let user = {
    color:   "warning",
    titulo: "Actors quantity",
    valor: 49,
    icono: "fas fa-user",
}
    
let nose = {
        color:   "warning",
        titulo: "Hola chicos",
        valor: 49,
        icono: "fas fa-user",
    
}

let cardProps = [productInDataBase,amount,user,nose];
export default ContentRowTop;