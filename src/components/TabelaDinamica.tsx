import Table from "react-bootstrap/Table";



type Registro = {
  nomeDocumento: string;
  sistemaOrigem: string;
  linkDownload: string;
};

type Props = {
  registros: Registro[];
};


function TabelaDinamica({ registros }: Props) {
  return (
    <Table id="tabela-dinamica" className="tabela" striped bordered hover>
      <thead>
        <tr>
          <th>Nome do Documento</th>
          <th>Sistema de origem</th>
          <th>Link para download</th>
        </tr>
      </thead>
      <tbody>
        {registros.map((registro, index) => (
          <tr key={index}>
            <td>{registro.nomeDocumento}</td>
            <td>{registro.sistemaOrigem}</td>
            <td>
              <a href={registro.linkDownload} download="teste"> Download</a>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TabelaDinamica;
