import './index.css';
import ArraysComponent from './components/ArraysComponent';

function App() {

  const arrayNumeral: number[] = [2, 4, 6, 8, 10];
  const arrayContent: string = arrayNumeral.join(" - ");    

  return (
    <div className="App">          
      <h1>Estudo e testes com <br/> <br />  <span>Array</span> | <span>Matriz</span> | <span>Vetor</span> | <span>Métodos</span></h1>
      
      <div className="array-components">
        <ArraysComponent  title='Array simples' arrayName={arrayContent} />        
      </div>     
    </div>
  );
}

export default App;
