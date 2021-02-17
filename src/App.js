import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Page2 } from './pages/Page2';
import {Home} from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <div className="container pt-4">
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/page2'} exact component={Page2} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
