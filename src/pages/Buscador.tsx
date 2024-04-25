import React, { useState } from 'react';
import './Buscador.css';
import TabelaDinamica from '../components/TabelaDinamica';
import { gerarNomeDocumentoAleatorio } from '../functions/gerarNomeDocumento';
import {loading} from '../functions/loading'
import Loading from '../components/Loading';

type Registro = {
  nomeDocumento: string;
  sistemaOrigem: string;
  linkDownload: string;
};



function Buscador() {
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [pesquisado, setPesquisado] = useState(false); 
  const [nomeFornecedor, setNomeFornecedor] = useState('');

  const [isLoading, setIsLoading] = useState(false);

   const handlePesquisar = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    
    setIsLoading(true);
    await loading(2000);
    setIsLoading(false);


    const qntdRegistros: number = Math.floor(Math.random() * 10) + 1;
    console.log('Quantidade de registros: ' + qntdRegistros);

    const novosRegistros: Registro[] = [];
    for (let i = 0; i < qntdRegistros; i++) {
      const nomeDocumento = gerarNomeDocumentoAleatorio();
      const sistemaOrigem: string = 'HUTZ';
      const linkDownload: string = "https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf"
      await novosRegistros.push({ nomeDocumento, sistemaOrigem, linkDownload });
    }

    await setRegistros(novosRegistros);
    setPesquisado(true); 
  }

  return (
    
    <div className='ajust_container'>
   
      {/* Parte de receber dado */}
      <div>
        <form onSubmit={handlePesquisar}>
          <input
            id='input_fornecedor'
            type='text'
            name='nomeFornecedor'
            placeholder='Digite o nome do fornecedor'
            value={nomeFornecedor}
            onChange={(e) => setNomeFornecedor(e.target.value)}
          />
          <button className='botao_pesquisar' type='submit' disabled={nomeFornecedor.length < 4}>
            Pesquisar
          </button>
          <p id='teste'></p>
        </form>
      </div>
      {/* Renderização da lista */}
      {isLoading  && <Loading /> }
      {pesquisado && (
        <div className='lista_documentos' >
          <TabelaDinamica registros={registros} />
        </div>
      )}
    </div>
  );
}

export default Buscador;