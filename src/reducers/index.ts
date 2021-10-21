import { combineReducers } from 'redux';
import { reducers as frutaReducers } from './fruta.reducers';

const reducers = combineReducers({
    frutaReducers
})

export { reducers };