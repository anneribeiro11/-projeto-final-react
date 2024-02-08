import React, { useState } from 'react';

const Contato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const aoSalvar = (e) => {
    e.preventDefault();
  
  };

  return (
    <div>
      <section className="formulario">
        <form onSubmit={aoSalvar}>
          <h2>Contato</h2>

          <CampoTexto
            obrigatorio={true}
            label='Nome'
            placeholder='Digite seu nome'
            valor={nome}
            aoAlterarCampo={(valor) => setNome(valor)}
          />

          <CampoTexto
            obrigatorio={true}
            label='E-mail'
            placeholder='Digite seu e-mail'
            valor={email}
            aoAlterarCampo={(valor) => setEmail(valor)}
          />

          <CampoTexto
            obrigatorio={true}
            label='Mensagem'
            placeholder='Digite sua mensagem'
            valor={mensagem}
            aoAlterarCampo={(valor) => setMensagem(valor)}
          />

          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
};

const CampoTexto = ({ obrigatorio, label, placeholder, valor, aoAlterarCampo }) => {
  return (
    <div>
      <label>
        {label} {obrigatorio && <span>*</span>}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        value={valor}
        onChange={(e) => aoAlterarCampo(e.target.value)}
      />
    </div>
  );
};

export default Contato;
