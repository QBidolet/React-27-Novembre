import logo from './logo.svg';
import './App.css';
//import MonComposant from './cours/02-react/02-composant-classe';
import MonComposant from './cours/02-react/03-composant-fonction';
import Props, {Compteur, Salutation, Wrapper} from './cours/03-props/01-props';
import Compteurs from './cours/04-state/01-state';
import Notes from './exercices/01-notes';
import CycleDeVie from './cours/04-state/02-cycle-de-vie';
import DemoUseEffect from './cours/05-hooks/01-useeffect';
import AffichagePosition from './cours/05-hooks/02-custom-hook';
import Binding from './cours/06-evenement/01-evenement';
import {Message} from './cours/07-rendu-conditionnel/01-conditionnel'

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
    {/* <Notes></Notes> */}
    {/* <CycleDeVie></CycleDeVie> */}
    {/* <DemoUseEffect></DemoUseEffect> */}
    {/* <AffichagePosition></AffichagePosition> */}
    {/* <Binding></Binding> */}
    <Message estConnecte={true}></Message>
    </div>
  );
}

export default App;
