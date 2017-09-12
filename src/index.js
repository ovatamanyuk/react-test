import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css';
import reducer from './reducers'
import App from './components/App';


const store = createStore(reducer)

store.subscribe(() => {
    console.log(store.getState());
});

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
)
