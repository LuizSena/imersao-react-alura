import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo(){
    return (
      <PageDefault>
        <h1>Página de Cadastro do vídeo</h1>
        <div className="conteiner">
        <Link className="link" to="/cadastro/categoria">
            Cadastrar categoria
        </Link>
        </div>
      </PageDefault>
    )
  }

  export default CadastroVideo;