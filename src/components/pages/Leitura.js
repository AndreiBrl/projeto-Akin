import React from 'react';
import { ReactReader } from 'react-reader';

const LeituraEPUB = () => {
  // Substitua com o caminho real para o seu arquivo EPUB
  const epubUrl = 'https://magical-marzipan-1029e1.netlify.app/Original-Andrei_Barbuto.epub';

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
        <h1>teste</h1>
      <ReactReader
        url={epubUrl}
        title="Exemplo de Leitura EPUB"
        locationChanged={(epubcifi) => console.log(epubcifi)}
      />
    </div>
  );
};

export default LeituraEPUB;
