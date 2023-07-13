export function gerarNomeDocumentoAleatorio(): string {
    const parte1 = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    const parte2 = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    const parte3 = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    return `${parte1}-${parte2}-${parte3}.pdf`;
  }