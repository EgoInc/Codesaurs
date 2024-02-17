import logo from "./assets/images/logo.png";
import "./App.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom';


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// каждая страница будет лежать в своей папке, откуда будет импротироваться сюда
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

import { ExamplePage } from "./pages/example/example";
import FilterPage from "./pages/filterPage/FilterPage";
import CoursePage from "./pages/course/CoursePage";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import {LandingPage} from "./components/homePage/landing.js";
import HomePage from "./components/homePage/HomePage";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='/main' element={<HomePage/>}/>
                <Route path='/course' element={<CoursePage/>}/>
                <Route path='/filter' element={<FilterPage/>}/>
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
