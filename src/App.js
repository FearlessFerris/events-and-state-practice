import StateComponent from './State';
import StateComponentTwo from './StateTwo';
import NumberGame from './NumberGame';
import { ButtonGroup, ButtonGroupTwo } from './ButtonGroup';
import 'semantic-ui-css/semantic.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className = 'title'> Events and State Practice </h1>
      <NumberGame /> 
    </div>
  );
}

export default App;
