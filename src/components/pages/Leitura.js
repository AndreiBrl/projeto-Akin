import React from 'react';
import { ReactReader } from 'react-reader';

const LeituraEPUB = () => {
    // Substitua com o caminho real para o seu arquivo EPUB
    const epubUrl = 'https://magical-marzipan-1029e1.netlify.app/Original-Andrei_Barbuto.epub';

    return (
        <div className='containerLeitura'>
            <h1>teste</h1>


            <ReactReader
                url={epubUrl}
                title="Tribos Ancestrais"
                locationChanged={(epubcifi) => console.log(epubcifi)}
                swipeable='true'

            />
            <h1>teste</h1>
        </div>
    );
};

export default LeituraEPUB;
