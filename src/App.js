import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Instruction } from './pages/instruction';
import {Home} from './pages/Home';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <div className="container pt-4">
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/instruction'} exact component={Instruction} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
