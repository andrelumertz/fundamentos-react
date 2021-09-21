import React from 'react';


export default (props) => (
  <div>
  <h1>Componemte</h1>
  <h2>Os Filhos</h2>

    <div>
      {props.children} {/* atribuindo os filhos ao parametro com o children */}
    </div>
  </div>
);