import React, { useState } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Cabecalho from "./componentes/Cabecalho";
import Home from './pages/HomePage';
import SobrePage from './pages/SobrePage';
import CommentarioPage from './pages/ComentarioPage';
import ContatoPage from './pages/ContatoPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Cabecalho />
      
          <Route path="/" exact component={Home} />
          <Route path="/sobre" component={SobrePage} />
          <Route path="/comentarios" component={CommentarioPage} />
          <Route path="/contato" component={ContatoPage} />
      
      </div>
    </Router>
  );
}

/* <div>
  <h1>olá mundo</h1>
</div> */

export default App;
