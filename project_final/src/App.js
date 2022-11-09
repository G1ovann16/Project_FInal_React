import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/containers/task_list';
import Loginform from './components/pure/forms/loginForm';
import RegisterForm from './components/pure/forms/registerForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TaskListComponent></TaskListComponent>
        {/* <RegisterForm></RegisterForm> */}
      </header>
    </div>
  );
}

export default App;
