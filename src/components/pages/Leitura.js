import React, { useState, useEffect, useRef } from 'react';
import { ReactReader, ReactReaderStyle } from 'react-reader';
import menuLeitura from '../img/capaEdit.png';


const LeituraEPUB = () => {
    // Substitua com o caminho real para o seu arquivo EPUB
    const epubUrl = 'https://magical-marzipan-1029e1.netlify.app/Ori-teste - Andrei Barbuto.epub';
    const [TotcurrentLocation, setTotCurrentLocation] = useState("");
    const [changeZIndex, setChangeZindex] = useState(2)
    const [flag, setFlag] = useState(true);

    const [page, setPage] = useState('');
    const [chapter, setChapter] = useState('n/a');
    const rendition = useRef();
    const toc = useRef([]);



    useEffect(() => {
        // Recupere a localização do localStorage ao montar o componente
        const savedLocation = localStorage.getItem('epubLocation');
        if (savedLocation) {
            setTotCurrentLocation(savedLocation);
            setFlag(false);
        }
    }, []);

    useEffect(() => {
        // Atualize as informações da página e do capítulo sempre que houver uma mudança de localização
        if (rendition.current) {
            const { displayed, href } = rendition.current.location.start;
            // Recupere o capítulo correspondente da tabela de conteúdos (TOC)

            const chapterItem = toc.current?.find(item => item.href === href);
            setChapter(chapterItem ? chapterItem.label : 'n/a');

            if (chapterItem && chapterItem.label !== 'n/a' && displayed) {
                setPage(<h1 className='pagina'> {chapterItem.label} - {displayed.page} de {displayed.total}</h1>);
            }
            else{
                setPage('');
            }

        }

    }, [TotcurrentLocation, toc.current]);



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
          
            <div className='pag'>
                {page}

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
                    getRendition={(rend) => (rendition.current = rend)}
                    tocChanged={(tocData) => (toc.current = tocData)}
                    page={page} // Adicionando o estado da página
                    chapter={chapter} // Adicionando o estado do capítulo
                    readerStyles={{
                        ...ReactReaderStyle,
                        container: {
                            backgroundColor: '#F4E2C7',
                            ...ReactReaderStyle.container,
                        },
                        tocArea: {
                            ...ReactReaderStyle.tocArea,
                            marginTop: '5vw',
                            height: '150vw',
                            color: '#522828',
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
                            backgroundColor: '#F4E2C7',




                        },
                        arrow: {
                            ...ReactReaderStyle.arrow,
                            backgroundColor: '#F4E2C7',
                            color: '#522828',


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

                />
            )}
        </div>
    );
};

export default LeituraEPUB;
