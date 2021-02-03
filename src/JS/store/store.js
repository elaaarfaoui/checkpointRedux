import {createStore} from "redux"
import {reducersTask} from "../reducers/reducersTask"

const store = createStore(
    reducersTask,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store