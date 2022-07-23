import { legacy_createStore as createStore} from 'redux';
import products from '../reducer';
import { loadState } from './localStorage';

const persistedState = loadState();
const store = createStore(products,persistedState);
export default store;