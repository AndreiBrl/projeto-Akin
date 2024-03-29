import React, { useState, useEffect, useRef, useReducer } from 'react';
import { ReactReader, ReactReaderStyle } from 'react-reader';
import menuLeitura from '../img/capaEdit.png';
import map from '../img/iconeMap.png'
import { useNavigate } from "react-router-dom";
import setaVolta from '../img/setaVolta.png'


const LeituraEPUB = () => {
    // Substitua com o caminho real para o seu arquivo EPUB
    const epubUrl = 'https://magical-marzipan-1029e1.netlify.app/Original-Andrei-Barbuto.epub';
    const [TotcurrentLocation, setTotCurrentLocation] = useState("");
    const [changeZIndex, setChangeZindex] = useState(2)
    const [flag, setFlag] = useState(true);

    const [chapter, setChapter] = useState('n/a');
    const rendition = useRef();
    const pageLocalStorage = localStorage.getItem('page');
    const [page, setPage] = useState(pageLocalStorage);
    localStorage.setItem('page', page);
    
    const toc = useRef([]);

    const navigation = useNavigate();
    const navega = (rota) => {
        navigation(rota)

    }

    useEffect(() => {
        if ('serviceWorker' in navigator) {
          window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js')
              .then(registration => {
                console.log('Service Worker registrado com sucesso!', registration);
              })
              .catch(error => {
                console.error('Falha ao registrar o Service Worker:', error);
              });
          });
        }
      }, []);
      
    useEffect(() => {
        // Recupera a localização do localStorage ao montar o componente

        const savedLocation = localStorage.getItem('epubLocation');
        if (savedLocation) {
            setTotCurrentLocation(savedLocation);
            setFlag(false);



        }
    }, []);


    useEffect(() => {

        // Atualiza as informações da página e do capítulo sempre que houver uma mudança de localização
        if (rendition.current) {
            const { displayed, href } = rendition.current.location.start;
            // Recupera o capítulo correspondente da tabela de conteúdos (TOC)
            
            const chapterItem = toc.current?.find(item => item.href === href);
            setChapter(chapterItem ? chapterItem.label : 'n/a');

            console.log(rendition+'ss'+chapterItem);

            if (chapterItem && chapterItem.label !== 'n/a' && displayed) {

                setPage(`${chapterItem.label} - ${displayed.page} de ${displayed.total}`);
            }
            else {

                setPage('');
            }

        }


    }, [TotcurrentLocation]);





    const handleLocation = (location) => {
        if (location !== 'epubcfi(/6/4!/4/2/1:0)') {

            setFlag(false);
            setTotCurrentLocation(location.toString());
            // Salvando a localização no localStorage
            localStorage.setItem('epubLocation', location.toString());

        }
    };

    return (
        <div className="containerLeitura">

            <div className='menuLeitura'>

                <img src={menuLeitura} style={{ zIndex: changeZIndex }} />
            </div>
        <div className='map'>

        <img className='volta'src={setaVolta} onClick={()=>navega('/')}/>
        <img className='mapOri'src={map} onClick={()=>navega('/Mapa')}/>
        </div>
            <div className='pag'>

            <h1 className='pagina'>{page == 'null' ? ' ' : page}</h1>
            {/* <h1 className='pagina'>{page}</h1> */}


            </div>
            {/* flag criada por conta de que a propriedade location da bug na primeira rendezação de tela. Segundo a própria documentação a funcao 
location é executada inevitavelmente assim que entra na tela.
*/}

            
            {flag ? (
               
                <ReactReader
                    url={epubUrl}


                    locationChanged={(location) => handleLocation(location)}
                    getRendition={(rend) => (rendition.current = rend)}
                    page={page} // Adicionando o estado da página
                    chapter={chapter} // Adicionando o estado do capítulo
                    showToc={true}
                    tocChanged={(tocData) => (toc.current = tocData)}
                    
                />
            
                // nivia


            ) : (


            <ReactReader
                url={epubUrl}

                locationChanged={(location) => handleLocation(location)}

                location={TotcurrentLocation}
                getRendition={(rend) => (rendition.current = rend)}
                tocChanged={(tocData) => (toc.current = tocData)}
                page={page} // Adicionando o estado da página
                chapter={chapter} // Adicionando o estado do capítulo
                readerStyles={window.innerWidth >= 600 ? {

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
                        width: '2vw',
                        marginTop: '4.5vw',


                    },
                    readerArea: {
                        ...ReactReaderStyle.readerArea,
                        marginTop: '0vw',
                        backgroundColor: '#F4E2C7',



                    },
                    reader: {
                        ...ReactReaderStyle.reader,
                        backgroundColor: '#F4E2C7',





                    },
                    arrow: {
                        ...ReactReaderStyle.arrow,
                        backgroundColor: 'transparent',
                        color: '#522828',



                    },
                    tocButtonBottom: {
                        ...ReactReaderStyle.tocButtonBottom,
                        backgroundColor: '#522828'
                    },
                    tocButtonBarTop: {
                        ...ReactReaderStyle.tocButtonBarTop,
                        backgroundColor: '#522828'
                    },
                    prev: {
                        ...ReactReaderStyle.prev,
                        fontSize: '10vw',
                        top: '20vw'


                    },
                    next: {
                        ...ReactReaderStyle.next,
                        fontSize: '10vw',
                        top: '20vw'


                    }


                } : {
                    ...ReactReaderStyle,
                    container: {
                        backgroundColor: '#F4E2C7',
                        ...ReactReaderStyle.container,
                    },
                    tocArea: {
                        ...ReactReaderStyle.tocArea,
                        marginTop: '10vw',
                        height: '150vw',
                        color: '#522828',

                    },
                    tocButton: {
                        ...ReactReaderStyle.tocButton,
                        marginTop: '7vw',



                    },
                    readerArea: {
                        ...ReactReaderStyle.readerArea,
                        marginTop: '0vw',
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
