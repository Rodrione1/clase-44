import React from "react";

const TableData = (props) =>(
    <tr>
        <td>{props.titulo}</td>
        <td>{props.duracion}</td>
        <td>{props.rating}</td>
        <td>{props.genero}</td>
        <td>{props.premios}</td>
        
    </tr>
)


export default TableData;