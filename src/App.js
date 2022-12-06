import './App.css';
import TodoList from './Components/TodoList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux"
import store from './Redux/store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <TodoList />
        </Provider>
      </header>
    </div>
  );
}

export default App;
