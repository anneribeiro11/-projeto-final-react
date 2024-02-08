import React from 'react';
import { Link } from 'react-router-dom';

const Cabecalho = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/comentarios">Comentários</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
};

export default Cabecalho;