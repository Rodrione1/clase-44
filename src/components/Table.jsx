import React from 'react';
const Table = (props) => (
    <table className ="table">
    <>
    <th>Titulo</th>
    <th>Duraciòn</th>
    <th>Rating</th>
    <th>Género</th>
    <th>Premios</th>
    </>
    {props.children}
    </table>
);


export default Table;