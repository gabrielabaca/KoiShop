import { combineReducers } from 'redux';
import productos from './store'

const rootReducer = combineReducers({
  productos
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
