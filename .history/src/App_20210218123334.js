import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Home} from './pages/Home'
import {Instruction} from './pages/instruction'
import {Navbar} from './components/Navbar'
import {Alert} from './components/Alert'
import {AlertState} from './context/alert/AlertState'
import {FirebaseState} from './context/firebase/FirebaseState'
import { Instruction } from './pages/instruction';

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar/>
          <div className="container pt-4">
            <Alert/>
            <Switch>
              <Route path={'/'} exact component={Home}/>
              <Route path={'/instruction'} component={Instruction}/>
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;