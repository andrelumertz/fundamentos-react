import React from 'react';
import "./Formulario.css"

import Button from './layout/Button'

export default props => {

    return (
      <form>
        Nome: <input type="text" name="nome" />
        <br />
        Sobrenome: <input type="text" name="sobrenome" />
        <br />
        E-mail: <input type="email" name="email_usuario" />
        <br />
        <Button></Button>
      </form>
    );
   
  

}