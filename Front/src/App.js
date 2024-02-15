import logo from "./assets/images/logo.png";
import "./App.css";

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// каждая страница будет лежать в своей папке, откуда будет импротироваться сюда
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

import { ExamplePage } from "./pages/example/example";
import { LandingPage } from "./pages/landing/landing";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LandingPage />
      </header>
    </div>
  );
}

export default App;
