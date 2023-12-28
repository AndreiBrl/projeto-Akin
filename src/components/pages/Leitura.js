import React, { useState } from 'react';
import { ReactReader } from 'react-reader';

const Leitura = () => {
    const [location, setLocation] = useState(0);

    return (
        <div className="containerLeitura">
            <div className="backLeitura">
                <ReactReader
                    url="https://andreibrl.github.io/projeto-Akin/src/components/book/oriOriginal%20-%20Andrei%20Barbuto.epub"
                    location={location}
                    locationChanged={(epubcfi) => setLocation(epubcfi)}
                    title='Tribos Ancestrais'
                    
                />
            </div>
        </div>
    );
};



export default Leitura;

