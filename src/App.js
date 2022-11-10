import { Provider } from 'react-redux';
import './App.css';
import TaskForm from './Components/TaskForm';
import TaskHeader from './Components/TaskHeader';
import TasksList from './Components/TasksList';
import store from './Features/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TaskHeader />
        <TasksList />
        <TaskForm />
      </div>
    </Provider>
    
  );
}

export default App;
