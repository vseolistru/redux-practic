import Counter from "./screens/Counter";
import './App.css';
import Todolist from "./screens/Todolist";
import Filters from "./screens/Filters";



export default function App() {
    return (
        <div className="App">
        Hello Redux
          <Counter/>
          <br/>
           <Filters/>
          <Todolist/>
        </div>
    );
}







