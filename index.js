import App from "./App.js";
import state from './modules/state/state.js';


document.getElementById("app").insertAdjacentHTML('afterbegin', App(state));
