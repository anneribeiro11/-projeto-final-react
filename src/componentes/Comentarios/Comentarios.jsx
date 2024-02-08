import React, { useState } from 'react';

const Comentarios = () => {
  const [comentario, setComentario] = useState('');
  const [listaComentarios, setListaComentarios] = useState([]);

  const handleComentarioChange = (e) => {
    setComentario(e.target.value);
  };

  const handleComentarioSubmit = () => {
    setListaComentarios([...listaComentarios, comentario]);
    setComentario('');
  };

  return (
    <div>
      <h2>Comentários</h2>
      <div>
        <input type="text" value={comentario} onChange={handleComentarioChange} />
        <button onClick={handleComentarioSubmit}>Enviar Comentário</button>
      </div>
      <ul>
        {listaComentarios.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comentarios;
