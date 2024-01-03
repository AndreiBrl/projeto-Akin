import React, { useState, useEffect } from 'react';
import { ReactReader, ReactReaderStyle } from 'react-reader';
import menuLeitura from '../img/capaEdit.png'

const LeituraEPUB = () => {
    // Substitua com o caminho real para o seu arquivo EPUB
    const epubUrl = 'https://magical-marzipan-1029e1.netlify.app/Original - Andrei Barbuto.epub';
    const [TotcurrentLocation, setTotCurrentLocation] = useState("");
    const [changeZIndex, setChangeZindex] = useState(2)
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
        if (location !== 'epubcfi(/6/4!/4/2/1:0)') {
            console.log(location);
            setFlag(false);
            setTotCurrentLocation(location.toString());
            // Salve a localização no localStorage
            localStorage.setItem('epubLocation', location.toString());
        }
    };

    return (
        <div className="containerLeitura">
            <div className='menuLeitura'>

                <img src={menuLeitura} style={{ zIndex: changeZIndex }} />
            </div>
            {/* flag criada por conta de que a propriedade location da bug na primeira rendezação de tela. Segundo a própria documentação a funcao 
location é executada inevitavelmente assim que entra na tela.
*/}

            {flag ? (
                <ReactReader
                    url={epubUrl}


                    locationChanged={(location) => handleLocation(location)}
                    showToc={true}
                />
            ) : (
                <ReactReader
                    url={epubUrl}

                    locationChanged={(location) => handleLocation(location)}

                    location={TotcurrentLocation}
                    readerStyles={{
                        ...ReactReaderStyle,
                        container:{
                            backgroundColor: '#F4E2C7',
                            ...ReactReaderStyle.container,
                        },
                        tocArea: {
                            ...ReactReaderStyle.tocArea,
                            marginTop: '5vw',
                            height: '150vw',
                            color: '#522828'
                        },
                        tocButton: {
                            ...ReactReaderStyle.tocButton,
                            marginTop: '7vw',


                        },
                        readerArea: {
                            ...ReactReaderStyle.readerArea,
                            marginTop: '-5vw',
                            backgroundColor: '#F4E2C7',
                            
                        },
                        reader: {
                            ...ReactReaderStyle.reader,
                            backgroundColor: '#F4E2C7'


                        },
                        arrow: {
                            ...ReactReaderStyle.arrow,
                            backgroundColor: '#F4E2C7',
                            color: '#522828'

                        },
                        tocButtonBottom: {
                            ...ReactReaderStyle.tocButtonBottom,
                            backgroundColor: '#522828'
                        },
                        tocButtonBarTop: {
                            ...ReactReaderStyle.tocButtonBarTop,
                            backgroundColor: '#522828'
                        }





                    }}

                    showToc={true}
                    tocChanged={(e) => console.log(e)}
                />
            )}
        </div>
    );
};

export default LeituraEPUB;
