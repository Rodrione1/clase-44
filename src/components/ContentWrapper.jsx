import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import Table from './Table';
import TableData from './TableData';
function ContentWrapper(){

    let info =[{
       titulo: "Mandalorian",
       duracion: "130",
       rating: "4",
       genero: "Drama, Comedia",
       premios: "2"},

      {
      titulo: "Maxi",
      duracion: "120",
      rating: "10",
      genero: "Drama, terror",
      premios: "2"
   }]

  


  return (
    <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
      <TopBar />
       <ContentRowTop /> 
      <Table>

        {info.map((info,index)=>(
          <TableData titulo={info.titulo} 
          duracion={info.duracion} 
          rating ={info.rating} 
          genero={info.genero} 
          premios={info.premios} 
          key={info +index}></TableData>
        ))}

      </Table>
      <Footer />
      
    </div>
    </div>
  )
}

export default ContentWrapper;

