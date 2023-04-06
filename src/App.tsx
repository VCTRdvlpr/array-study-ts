import './index.css';
import NavBarComponent from './components/NavBarComponent';
import MainHeader from './components/MainHeader';
import ArraysComponent from './components/ArraysComponent';
import { useState } from 'react';


function App() {

  const arrayNumeral: number[] = [1, 2, 3, 4, 5, 6];
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

    const FilterArrayNumeral: number[] = arrayNumeral.filter(arrayNumeral => arrayNumeral % 2 === 0);
    const FilterArrayNumeralContent: string = FilterArrayNumeral.join(" - ");
    const [showFilterArrayNumeral, setShowFilterArrayNumeral] = useState(true);
    const handleFilterArrayNumeralButtonClick = () => {
      setShowFilterArrayNumeral(!showFilterArrayNumeral);
    }


  return (
    <div className="App">            
      <MainHeader />
      <div className='nav-bar-align'>
        <NavBarComponent title='Teoria' to='' />
        <NavBarComponent title='Prática' to='' />
      </div>      
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
        <div className='btn-align'>
          <button onClick={handleFilterArrayNumeralButtonClick}>
            {showFilterArrayNumeral ? 'Esconder' : 'Método filter ( arrayNumeral = números pares )'}
          </button>
          {showFilterArrayNumeral && <ArraysComponent title='Método filter  ( arrayNumeral = números pares )' arrayName={FilterArrayNumeralContent} />}               
        </div>    
      </div>   
    </div>
  );
}

export default App;
