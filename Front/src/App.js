import logo from "./assets/images/logo.png";
import "./App.css";

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// каждая страница будет лежать в своей папке, откуда будет импротироваться сюда
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

import { ExamplePage } from "./pages/example/example";
import FilterPage from "./pages/filterPage/FilterPage";

function App() {
  return (
    <div className="App">
        <FilterPage/>
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>Начнем создавать онлайн-школу</p>*/}
      {/*  <ExamplePage />*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
