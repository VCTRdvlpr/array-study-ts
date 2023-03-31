import './index.css';
import ArraysComponent from './components/ArraysComponent';
import { useState } from 'react';

function App() {

  const arrayNumeral: number[] = [2, 4, 6, 8, 10];
  const arrayContent: string = arrayNumeral.join(" - ");    
  const [showArrayNumeral, setShowArrayNumeral] = useState(true);
  const handleArrayNumeralButtonClick = () => {
    setShowArrayNumeral(!showArrayNumeral);
  }

  const MapArrayNumeral: number[] = arrayNumeral.map(arrayNumeral => arrayNumeral * 2);
  const MapArrayNumeralContent: string = MapArrayNumeral.join(" - ");
  const [showMapArrayNumeral, setShowMapArrayNumeral] = useState(true);
  const handleMapArrayNumeralButtonClick = () => {
    setShowMapArrayNumeral(!showMapArrayNumeral);
  }

  return (
    <div className="App">          
      <h1>
        Estudo e testes com <br/> <br />  <span>Array</span> | <span>Matriz</span> | 
        <span>Vetor</span> | <span>Métodos</span> | <span>Hooks</span>
      </h1>
      <div className='main-align'>     
        <div className='btn-align'>
          <button onClick={handleArrayNumeralButtonClick}>
            {showArrayNumeral ? 'Esconder' : 'arrayNumeral'}
          </button>
          {showArrayNumeral && <ArraysComponent title='arrayNumeral' arrayName={arrayContent} />} 
        </div>           
        <div className='btn-align'>
          <button onClick={handleMapArrayNumeralButtonClick}>
            {showMapArrayNumeral ? 'Esconder' : 'Método map ( arrayNumeral * 2 )'}
          </button>
          {showMapArrayNumeral && <ArraysComponent title='Método map  ( arrayNumeral * 2 )' arrayName={MapArrayNumeralContent} />}               
        </div>    
      </div>     
    </div>
  );
}

export default App;
