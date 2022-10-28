import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/containers/task_list';
import Loginform from './components/pure/forms/loginForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <TaskListComponent></TaskListComponent> */}
        <Loginform></Loginform>
      </header>
    </div>
  );
}

export default App;
