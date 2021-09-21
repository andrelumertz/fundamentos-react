import React from 'react';  // importando o react
import ReactDOM from 'react-dom'; // importando o react-dom
import './index.css'; // importando o arquivo index.css


//import Primeiro from './components/Primeiro'; // importando o componente primeiro

//import ComParametros from './components/ComParametros'; // importando o
import ComFilhos from  './components/ComFilhos.jsx';
import Card from "./components/layout/Card.jsx";


ReactDOM.render(
  <div>
    <ComFilhos> {/* renderizando o componemte ComFilhos */ }
      <ul>
        <li>Ana </li>
        <li>Bia </li>
        <li>Carlos</li>
        <li>Daniel</li>
      </ul>
    </ComFilhos>

    {/* <Primeiro></Primeiro>
    <ComParametros
      titulo="Esse é o Titulo"
      subtitle="Esse é o subtitle"
    ></ComParametros>
    <ComParametros
      titulo="Opa"
      subtitle="Epa"


    ></ComParametros> */}
  </div>,
  document.getElementById("root")
);

// function libera(number) {

//    if (number >= 18) {
//      return "Adulto";
//     }
//      else {
//        return "young";
//      }
       
// }

 