import {createStore} from 'redux';
import {rootReducer} from './reducers/root-reducer';



export const index = createStore( rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())




