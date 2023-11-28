import logo from './logo.svg';
import './App.css';
//import MonComposant from './cours/02-react/02-composant-classe';
import MonComposant from './cours/02-react/03-composant-fonction';
import Props, {Compteur, Salutation, Wrapper} from './cours/03-props/01-props';
import Compteurs from './cours/04-state/01-state';
import Notes from './exercices/01-notes';

function App() {
  return (
    <div className="App">
    {/* <MonComposant/>  */}
    {/* <Props></Props>
    <Salutation nom="Quentin" age={29}></Salutation>
    <Wrapper>
      <p>Ceci est un contenu enfant.</p>
    </Wrapper> */}
    {/* <Compteurs></Compteurs> */}
    <Notes></Notes>
    </div>
  );
}

export default App;
