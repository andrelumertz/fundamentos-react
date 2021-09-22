import React from "react";
import "./App.css";

import Primeiro from "./components/Primeiro"; // importando o componente primeiro

import ComParametros from "./components/ComParametros"; // importando o
import ComFilhos from "./components/ComFilhos.jsx";
import Card from "./components/layout/Card";
import Repeticao from "./components/Repeticao";
import Condicional from "./components/Condicional";
import Formulario from "./components/Formulario";
import Button from "./components/layout/Button";

export default (props) => (
  <div className="App">
    <Card titulo="# 06 - Formulario">
      <Formulario>
        <Button></Button>
        <input type="submit" className="button">
          Clique aqui
        </input>
      </Formulario>
    </Card>

    <Card titulo="# 05 - Condicional">
      <Condicional numero={11}></Condicional>
    </Card>

    <Card titulo="# 04 - Repetição">
      <Repeticao></Repeticao>
    </Card>

    <Card titulo="# 03 - Componemte com Filhos">
      <ComFilhos>
        <ul>
          <li>Ana </li>
          <li>Bia </li>
          <li>Carlos</li>
          <li>Daniel</li>
        </ul>
        <Button></Button>
      </ComFilhos>
    </Card>

    <Card titulo=" #02 - Componemte com Parametro">
      <ComParametros comtitulo="Esse é o Titulo" subtitle="Esse é o subtitle" />
    </Card>

    <Card titulo="#01 - Primeiro Componente">
      <Primeiro />
    </Card>

    <Card titulo="Exercicio X">Conteudo</Card>
    {/*  }
     
    </ComFilhos> */}

    {/* <Primeiro></Primeiro>
    
    <ComParametros
      titulo="Opa"
      subtitle="Epa"


    ></ComParametros> */}
  </div>
);
