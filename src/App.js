import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Instruction } from './pages/instruction';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { Alert } from './components/Alert';
import { AlertState } from './components/context/alert/AlertState';

function App() {
  return (
    <AlertState>
      <BrowserRouter>
        <Navbar />
        <div className="container pt-4">
          <Alert />
          <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/instruction'} exact component={Instruction} />
          </Switch>
        </div>
      </BrowserRouter>
    </AlertState>
  );
}

export default App;
