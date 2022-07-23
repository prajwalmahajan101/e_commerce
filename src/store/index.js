import { legacy_createStore as createStore} from 'redux';
import products from '../reducer';
const store = createStore(products);
export default store;