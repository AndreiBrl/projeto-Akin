import React, { useState } from 'react';
import { ReactReader } from 'react-reader';

const LeituraEPUB = () => {
    // Substitua com o caminho real para o seu arquivo EPUB
    const epubUrl = 'https://magical-marzipan-1029e1.netlify.app/Original - Andrei Barbuto.epub';
    const [currentPage, setCurrentpage] = useState(0)
    const [inputPage, setInputPage] = useState(0)
    const [TotcurrentLocation, setTotCurrentLocation] = useState('epubcfi(/6/4!/4/2[pg-header]/8[pg-start-separator]')
    const [countPage, setCountPage] = useState(0)
    const [flag, setFlag] = useState(true)
    const handlePage = () => {
        console.log('clicou');
        if (inputPage < 12) {

            setCurrentpage(inputPage)
        }
        else {
            console.log('nao tem');
        }

    }

    const handleLocation = (location) => {
        if (location != 'epubcfi(/6/4!/4/2/1:0)') {

            setFlag(false)
            setTotCurrentLocation(location.toString())
        }


    }
    return (
        <div className='containerLeitura'>

            <input onChange={(e) => setInputPage(e.target.value)}></input>
            <button onClick={handlePage}>ir</button>




            {
                flag ? (
                    < ReactReader
                        url={epubUrl}
                        title="Tribos Ancestrais"
                        locationChanged={(location) => handleLocation(location)}

                        // tocChanged={(location) => handleLocation(location)}

                        // epubOptions={{ width: '100%', height: '50%' }}
                        showToc={true}





                    />) : (<ReactReader
                        url={epubUrl}
                        title="Tribos Ancestrai"
                        locationChanged={(location) => handleLocation(location)}
                        location={TotcurrentLocation}
                        tocChanged={(location) => handleLocation(location)}
                        // epubOptions={{ width: '100%', height: '50%' }}
                        showToc={true}





                    />)
            }

        </div>
    );
};

export default LeituraEPUB;
