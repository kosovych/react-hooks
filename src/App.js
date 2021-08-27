import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { ThemeContext } from './context/theme';
import UseStateHook from './component/UseStateHook';
import UseEffectHook from './component/UseEffectHook';
import UseContextHook from './component/UseContextHook';
import UseReducer from './component/UseReducer';
import UseUserHook from './component/UseUserHook';
import UseUserHook2 from './component/UseUserHook2';

const App = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`theme theme--${theme.theme}`}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/use-state-hook">useState() hook</Link>
              </li>
              <li>
                <Link to="/use-effect-hook">useEffect() hook</Link>
              </li>
              <li>
                <Link to="/use-context-hook">useContext() hook</Link>
              </li>
              <li>
                <Link to="/use-reducer-hook">useReducer() hook</Link>
              </li>
              <li>
                <Link to="/use-fetch-hook">useFetch() hook</Link>
              </li>
              <li>
                <Link to="/use-fetch-hook2">useFetch() hook 2</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/use-state-hook">
            <UseStateHook />
          </Route>
          <Route path="/use-effect-hook">
            <UseEffectHook />
          </Route>
          <Route path="/use-context-hook">
            <UseContextHook />
          </Route>
          <Route path="/use-reducer-hook">
            <UseReducer />
          </Route>
          <Route path="/use-fetch-hook">
            <UseUserHook />
          </Route>
          <Route path="/use-fetch-hook2">
            <UseUserHook2 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
