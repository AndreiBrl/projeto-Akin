import React, { useState, useEffect } from 'react';
import { ReactReader } from 'react-reader';

const LeituraEPUB = () => {
    // Substitua com o caminho real para o seu arquivo EPUB
    const epubUrl = 'https://magical-marzipan-1029e1.netlify.app/Original - Andrei Barbuto.epub';
    const [TotcurrentLocation, setTotCurrentLocation] = useState("");

    const [flag, setFlag] = useState(true);

    useEffect(() => {
        // Recupere a localização do localStorage ao montar o componente
        const savedLocation = localStorage.getItem('epubLocation');
        if (savedLocation) {
            setTotCurrentLocation(savedLocation);
            setFlag(false);
        }
    }, []);



    const handleLocation = (location) => {
        if (location !== 'epubcfi(/6/4!/4/2/1:0)'&& TotcurrentLocation!="") {
            console.log(location);
            setFlag(false);
            setTotCurrentLocation(location.toString());
            // Salve a localização no localStorage
            localStorage.setItem('epubLocation', location.toString());
        }
    };

    return (
        <div className="containerLeitura">
            {/* <input onChange={(e) => setInputPage(e.target.value)}></input>
            <button onClick={handlePage}>ir</button> */}


            {/* flag criada por conta de que a propriedade location da bug na primeira rendezação de tela. Segundo a própria documentação a funcao 
location é executada inevitavelmente assim que entra na tela.
*/}
            {flag ? (
                <ReactReader
                    url={epubUrl}
                    title="Tribos Ancestrais"
                    locationChanged={(location) => handleLocation(location)}
                    showToc={true}
                />
            ) : (
                <ReactReader
                    url={epubUrl}
                    title="Tribos Ancestrais"
                    locationChanged={(location) => handleLocation(location)}
                    location={TotcurrentLocation}
                    showToc={true}
                />
            )}
        </div>
    );
};

export default LeituraEPUB;
