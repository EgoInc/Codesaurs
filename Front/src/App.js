import logo from "./assets/images/logo.png";
import "./App.css";
import { ExamplePage } from "./pages/example/example";
import Task from "./pages/tasksPage/task";
import { PersonalArea } from "./pages/personalArea/personalArea";

function App() {
  return (
    <div className="App">
      <PersonalArea/>
    </div>
  );
}

export default App;
