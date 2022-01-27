import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import SignIn from './Pages/SignIn/SignInPage';
import Todo from './Pages/TodoPage/Todo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/to-do-list" element={<Todo />} />
    </Routes>
  );
}

export default App;
