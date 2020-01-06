import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {BrowserRouter} from  'react-router-dom'


export const MyContext = React.createContext();

const app = (
  <MyContext.Provider value='hello world 3424'>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </MyContext.Provider>
);

ReactDOM.render(app, document.getElementById('root'));

