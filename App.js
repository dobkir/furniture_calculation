import Header from "./modules/components/Header.js";
import Main from "./modules/components/Main.js";
import Footer from "./modules/components/Footer.js";

function App() {
  const appContent = `${Header()} ${Main()} ${Footer()}`;
  return appContent;
}

export default App;