import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import NuevoPirata from './componentes/NuevoPirata';
import Pirata from './componentes/Pirata';
import TodosPiratas from './componentes/TodosPiratas';

const App = () => {
  return(
  <div className="container">
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={()=> <TodosPiratas/>} />
        <Route path="/new" render={()=> <NuevoPirata/>} />
        {/* <Route path="/new">
          <NuevoPirata/>
        </Route> */}
        <Route path="/pirata/:id" render={()=> <Pirata/>} />
      </Switch>
    </BrowserRouter>
  </div>
  )


}

export default App;

