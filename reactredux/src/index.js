import React from 'react';//default export
import ReactDOM from 'react-dom';//default export

import {Provider} from 'react-redux';//named export 
import {createStore} from 'redux';//named export 
import App from './components/App';//default export
import reducers from './reducers';//default export

ReactDOM.render(
<Provider store={createStore(reducers)}>
<App/>
</Provider>,
  document.getElementById('root'));
 
