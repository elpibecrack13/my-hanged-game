import { useEffect, useState } from 'react';
import { HangImage } from './components/HangImage';
import { letters } from './helpers//letters'

import './App.css';
import { getRandomWord } from './helpers/getRandomWord';

function App() {

  const [ word, setWord ] = useState( getRandomWord() );
  const [ hiddentWord, setHiddentWord ] = useState( '_ '.repeat( word.length ) );
  const [ attempts, setAttempts ] = useState(0);
  const [ lose, setLose ] = useState( false );
  const [ won, setWon ] = useState( false );

  // Determinar si la persona perdio
  useEffect( () => {
    if ( attempts >= 9 ){
      setLose( true );
    }

  }, [ attempts ] );

  // Determinar si la persona ganó
  useEffect(()=> {
    // console.log(hiddentWord);// _ _ _ _ _ _ _ _
    const currentHidenWord = hiddentWord.split(' ').join('');
    console.log(currentHidenWord);
    if( currentHidenWord === word ){
      setWon( true );
    }

  }, [ hiddentWord ])


  const checkLetter = ( letter: string ) => {
    if ( lose ) return;
    if ( won ) return;
    
    if ( !word.includes(letter) ){
      setAttempts( Math.min( attempts + 1, 9 ) );
      return;
    }

    const hiddentWordArray = hiddentWord.split(' ');

    for ( let i = 0; i < word.length; i++ ){
      if ( word[i] === letter ){
        hiddentWordArray[i] = letter;
      }
    }
    setHiddentWord( hiddentWordArray.join(' ') );
  }


  const newGame = () => {
    const newWord = getRandomWord();

    setWord( newWord );
    setHiddentWord( '_ '.repeat( newWord.length ) );

    setAttempts( 0 );
    setLose( false );
    setWon( false );
  }

  return(
    <div className="App">
      
        {/* Imagenes */}
        <HangImage imageNumber={ attempts }/>

        {/* Palabra oculta */}
        <h3>{ hiddentWord }</h3>

        {/* Contador de intentos */}
        <h3>Intentos: { attempts }</h3>

        {/* Mensaje si perdió */}
        {
          ( lose ) 
          ? <h2>Perdió { word }</h2>
          : ''
        }

        {/* Mensaje si ganó */}
        {
          ( won ) 
          ? <h2>Felicidades, usted ganó</h2>
          : ''
        }

        {/* Botones de letras */}
        {
          letters.map( (letters) => (
            <button 
              onClick={ () => checkLetter(letters) }
              key = { letters }>
                { letters }
            </button>
          ))
        }

        <br /><br />
        <button onClick={ newGame }>¿Nuevo juego?</button>





    </div>
  );
};

export default App;
